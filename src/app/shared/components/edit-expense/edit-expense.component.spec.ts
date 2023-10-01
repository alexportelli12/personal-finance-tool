import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditExpenseComponent } from './edit-expense.component';
import { givenExpense } from '../../models/generators';
import { SharedModule } from '../../shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('EditExpenseComponent', () => {
  let component: EditExpenseComponent;
  let fixture: ComponentFixture<EditExpenseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditExpenseComponent],
      imports: [SharedModule, BrowserAnimationsModule],
    });
    fixture = TestBed.createComponent(EditExpenseComponent);
    component = fixture.componentInstance;

    component.expense = givenExpense();

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('handleSaveExpense', () => {
    beforeEach(() => {
      spyOn(component.saveExpense, 'emit');
    });

    it('should emit saveExpense', () => {
      component['handleSaveExpense']();

      expect(component.saveExpense.emit).toHaveBeenCalledWith({
        expense: component.expense,
        createAnother: component.createAnother,
      });
    });

    it('should mark expense form as pristine', () => {
      component.expenseForm.form.markAsDirty();

      component['handleSaveExpense']();

      expect(component.expenseForm.form.pristine).toBeTrue();
    });

    it('should focus on expense title input', () => {
      spyOn(component.expenseTitleInput.nativeElement, 'focus');

      component['handleSaveExpense']();

      expect(
        component.expenseTitleInput.nativeElement.focus
      ).toHaveBeenCalled();
    });
  });
});

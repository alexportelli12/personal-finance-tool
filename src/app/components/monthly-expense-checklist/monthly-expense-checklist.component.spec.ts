import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyExpenseChecklistComponent } from './monthly-expense-checklist.component';

describe('MonthlyExpenseChecklistComponent', () => {
  let component: MonthlyExpenseChecklistComponent;
  let fixture: ComponentFixture<MonthlyExpenseChecklistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonthlyExpenseChecklistComponent]
    });
    fixture = TestBed.createComponent(MonthlyExpenseChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensesComponent } from './expenses.component';
import { givenExpenses } from '../../../shared/models/generators';
import { SharedModule } from '../../../shared/shared.module';

describe('ExpensesComponent', () => {
  let component: ExpensesComponent;
  let fixture: ComponentFixture<ExpensesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpensesComponent],
      imports: [SharedModule],
    });

    fixture = TestBed.createComponent(ExpensesComponent);
    component = fixture.componentInstance;

    component.expenses = givenExpenses();

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set currentEditingExpense when addExpense is called', () => {
    component.addExpense();

    expect(component.currentEditingExpense).toEqual({
      title: '',
      amount: 0,
      category: component.expenseCategories[10],
    });
  });

  it('should emit expensesChanged when deleteExpense is called', () => {
    spyOn(component.expensesChanged, 'emit');

    component.deleteExpense(0);

    expect(component.expensesChanged.emit).toHaveBeenCalledWith(
      component.expenses.slice(1)
    );
  });

  it('should set currentEditingExpense when editExpense is called', () => {
    component.editExpense(component.expenses[0]);

    expect(component.currentEditingExpense).toEqual(component.expenses[0]);
  });

  it('should set currentEditingExpense to null when cancelEditing is called', () => {
    component.cancelEditExpense();

    expect(component.currentEditingExpense).toBeNull();
  });

  it('should emit expensesChanged when saveExpense is called', () => {
    spyOn(component.expensesChanged, 'emit');

    component.saveExpense({
      expense: component.expenses[0],
      createAnother: false,
    });

    expect(component.expensesChanged.emit).toHaveBeenCalledWith(
      component.expenses
    );
  });

  it('should set currentEditingExpense to null when saveExpense is called with createAnother false', () => {
    component.saveExpense({
      expense: component.expenses[0],
      createAnother: false,
    });

    expect(component.currentEditingExpense).toBeNull();
  });

  it('should NOT set currentEditingExpense to null when saveExpense is called with createAnother true', () => {
    component.saveExpense({
      expense: component.expenses[0],
      createAnother: true,
    });

    expect(component.currentEditingExpense).toEqual({
      title: '',
      amount: 0,
      category: component.expenseCategories[10],
    });
  });

  it('should add new expense to expenses when saveExpense is called with expenses that has no id', () => {
    const emitSpy = spyOn(component.expensesChanged, 'emit');

    const newExpense = {
      title: 'New Expense',
      amount: 100,
      category: component.expenseCategories[0],
    };

    component.saveExpense({
      expense: newExpense,
      createAnother: false,
    });

    expect(
      emitSpy.calls
        .mostRecent()
        // We check that the argument passed to emit contains the new expense.
        .args[0]?.find((expense) => expense.title === newExpense.title)
    ).toBeDefined();
  });
});

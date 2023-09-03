import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
} from '@angular/core';
import { EXPENSE_CATEGORIES, Expense } from '../../../shared/models';
import { randomId } from '../../../shared/utils';

@Component({
  selector: 'pft-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpensesComponent {
  @Input()
  title: string;

  @Input()
  description: TemplateRef<void>;

  @Input()
  expenseGroupName: string;

  @Input()
  expenses: Expense[];

  editingExpenses: { [id: string]: Expense } = {};
  editingRowKeys: { [id: string]: boolean } = {};

  expenseCategories = EXPENSE_CATEGORIES;

  currentEditingExpense: Expense | null;

  @Output()
  expensesChanged: EventEmitter<Expense[]> = new EventEmitter();

  addExpense() {
    this.currentEditingExpense = {
      title: '',
      amount: 0,
      category: EXPENSE_CATEGORIES[10],
    };
  }

  deleteExpense(index: number) {
    const clonedExpenses = [...this.expenses];
    clonedExpenses.splice(index, 1);

    // On delete we always emit the latest expenses
    this.expensesChanged.emit(clonedExpenses);
  }

  editExpense(expense: Expense) {
    this.currentEditingExpense = { ...expense };
  }

  saveExpense(expense: Expense) {
    const clonedExpenses = [...this.expenses];
    this.currentEditingExpense = null;

    if (expense.id) {
      const index = clonedExpenses.findIndex((e) => e.id === expense.id);

      clonedExpenses[index] = expense;
    } else {
      clonedExpenses.push({ ...expense, id: randomId() });
    }

    this.expensesChanged.emit(clonedExpenses);
  }

  cancelEditExpense() {
    this.currentEditingExpense = null;
  }
}

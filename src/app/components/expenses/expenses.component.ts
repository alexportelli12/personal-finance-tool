import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
} from '@angular/core';
import { EXPENSE_CATEGORIES, Expense } from '../../models';
import { randomId } from '../../utils';

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
    this.expenses.splice(index, 1);

    // On delete we always emit the latest expenses
    this.expensesChanged.emit(this.expenses);
  }

  editExpense(expense: Expense) {
    this.currentEditingExpense = { ...expense };
  }

  saveExpense(expense: Expense) {
    this.currentEditingExpense = null;

    if (expense.id) {
      const index = this.expenses.findIndex((e) => e.id === expense.id);

      this.expenses[index] = expense;
    } else {
      this.expenses.push({ ...expense, id: randomId() });
    }

    this.expensesChanged.emit(this.expenses);
  }

  cancelEditExpense() {
    this.currentEditingExpense = null;
  }
}

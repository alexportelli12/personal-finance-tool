import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
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
export class ExpensesComponent implements OnInit {
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

  @Output()
  expensesChanged: EventEmitter<Expense[]> = new EventEmitter();

  ngOnInit(): void {
    if (this.expenses.length === 0) {
      this.addExpense();
    }
  }

  addExpense() {
    const id = randomId();

    this.expenses.push({
      id,
      title: '',
      amount: 0,
      category: EXPENSE_CATEGORIES[10],
    });

    this.editingRowKeys[id] = true;
  }

  deleteExpense(index: number) {
    this.expenses.splice(index, 1);

    // On delete we always emit the latest expenses
    this.expensesChanged.emit(this.expenses);
  }

  onRowEditInit(expense: Expense) {
    // We store a copy of the expense on row edit init.
    this.editingExpenses[expense.id] = { ...expense };
  }

  onRowEditSave(expense: Expense) {
    // On save we no longer need the expense copy so we delete it.
    delete this.editingExpenses[expense.id];

    // On save we always emit the latest expenses
    this.expensesChanged.emit(this.expenses);
  }

  onRowEditCancel(expense: Expense, index: number) {
    // On cancel we set the expense on the selected index back to it's original value
    this.expenses[index] = this.editingExpenses[expense.id];

    // Then delete the copy taken.
    delete this.editingExpenses[expense.id];
  }
}

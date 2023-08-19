import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Expense } from '../../models';
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
  description: string;

  @Input()
  expenseGroupName: string;

  @Input()
  expenses: Expense[];

  editingExpenses: { [id: string]: Expense } = {};
  editingRowKeys: { [id: string]: boolean } = {};

  @Output()
  expensesChanged: EventEmitter<Expense[]> = new EventEmitter();

  addExpense() {
    const id = randomId();

    this.expenses.push({
      id,
      title: 'Expense Title',
      amount: 0,
    });

    this.editingRowKeys[id] = true;
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

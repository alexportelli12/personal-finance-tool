import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { EXPENSE_CATEGORIES, Expense } from '../../models';

@Component({
  selector: 'pft-edit-expense',
  templateUrl: './edit-expense.component.html',
  styleUrls: ['./edit-expense.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditExpenseComponent {
  @Input()
  expense: Expense;

  protected expenseCategories = EXPENSE_CATEGORIES;

  expenseTitle: string;

  @Output()
  saveExpense: EventEmitter<Expense> = new EventEmitter();

  @Output()
  cancelEditExpense: EventEmitter<void> = new EventEmitter();
}

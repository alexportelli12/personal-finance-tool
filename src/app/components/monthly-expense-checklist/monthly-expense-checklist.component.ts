import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Expense } from '../../models';

@Component({
  selector: 'pft-monthly-expense-checklist',
  templateUrl: './monthly-expense-checklist.component.html',
  styleUrls: ['./monthly-expense-checklist.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MonthlyExpenseChecklistComponent {
  @Input()
  monthlyExpenses: Expense[];

  @Input()
  monthlyIncome: number;

  @Input()
  totalMonthlyExpensesIncludingYearly: number;
}

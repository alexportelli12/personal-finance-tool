import { Component, Input } from '@angular/core';
import { Expense } from '../../../shared/models';

@Component({
  selector: 'pft-your-expenses-page',
  templateUrl: './your-expenses-page.component.html',
  styleUrls: ['./your-expenses-page.component.less'],
})
export class YourExpensesPageComponent {
  @Input()
  monthlyExpenses: Expense[];

  @Input()
  monthlyIncome: number;

  @Input()
  totalMonthlyExpensesIncludingYearly: number;
}

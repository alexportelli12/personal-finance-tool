import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { ExpensesState } from '../../../store';
import { Observable } from 'rxjs';
import { Expense } from '../../../shared/models';

@Component({
  selector: 'pft-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less'],
})
export class DashboardComponent {
  @Select(ExpensesState.selectMonthlyIncome)
  protected monthlyIncome$: Observable<number>;

  // This property combines the monthly expenses added by the user,
  // as well as an entry for the total yearly expenses divided by 12.
  @Select(ExpensesState.selectCombinedMonthlyExpenses)
  protected combinedMonthlyExpenses$: Observable<Expense[]>;

  // This property will store the total monthly expenses INCLUDING the yearly expenses per month
  @Select(ExpensesState.selectTotalMonthlyExpensesIncludingYearly)
  protected totalMonthlyExpensesIncludingYearly$: Observable<number>;
}

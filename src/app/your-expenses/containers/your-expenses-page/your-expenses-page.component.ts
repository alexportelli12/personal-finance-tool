import { Component } from '@angular/core';
import { Expense } from '../../../shared/models';
import { Select } from '@ngxs/store';
import { ExpensesState } from '../../../store';
import { Observable } from 'rxjs';

@Component({
  selector: 'pft-your-expenses-page',
  templateUrl: './your-expenses-page.component.html',
  styleUrls: ['./your-expenses-page.component.less'],
})
export class YourExpensesPageComponent {
  @Select(ExpensesState.selectMonthlyIncome)
  protected monthlyIncome$: Observable<number>;

  @Select(ExpensesState.selectTotalYearlyExpenses)
  protected totalYearlyExpenses$: Observable<number>;

  @Select(ExpensesState.selectTotalMonthlyExpenses)
  protected totalMonthlyExpenses$: Observable<number>;

  // This property will store the total yearly expenses divided by 12 (per month expense)
  @Select(ExpensesState.selectYearlyExpensesPerMonth)
  protected yearlyExpensesPerMonth$: Observable<number>;

  // This property will store the total monthly expenses INCLUDING the yearly expenses per month
  @Select(ExpensesState.selectTotalMonthlyExpensesIncludingYearly)
  protected totalMonthlyExpensesIncludingYearly$: Observable<number>;

  // This property combines the monthly expenses added by the user,
  // as well as an entry for the total yearly expenses divided by 12.
  @Select(ExpensesState.selectCombinedMonthlyExpenses)
  protected combinedMonthlyExpenses$: Observable<Expense[]>;
}

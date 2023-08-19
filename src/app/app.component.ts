import { Component } from '@angular/core';
import { Expense } from './models';
import { BehaviorSubject, Observable, combineLatest, map } from 'rxjs';
import { calculateTotalExpenses, divideByTwelve, randomId } from './utils';

@Component({
  selector: 'pft-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  protected monthlyIncome$ = new BehaviorSubject<number>(1000);

  protected yearlyExpenses$ = new BehaviorSubject<Expense[]>([
    {
      id: randomId(),
      title: 'Yearly Expense',
      amount: 500.0,
    },
  ]);

  protected monthlyExpenses$ = new BehaviorSubject<Expense[]>([
    {
      id: randomId(),
      title: 'Monthly Expense',
      amount: 150,
    },
  ]);

  protected totalYearlyExpenses$: Observable<number>;
  protected totalMonthlyExpenses$: Observable<number>;

  // This property will store the total yearly expenses divided by 12 (per month expense)
  protected yearlyExpensesPerMonth$: Observable<number>;

  // This property will store the total monthly expenses INCLUDING the yearly expenses per month
  protected totalMonthlyExpensesIncludingYearly$: Observable<number>;

  // This property combines the monthly expenses added by the user,
  // as well as an entry for the total yearly expenses divided by 12.
  protected combinedMonthlyExpenses$: Observable<Expense[]>;

  constructor() {
    this.totalYearlyExpenses$ = this.yearlyExpenses$.pipe(
      map((yearlyExpenses) => calculateTotalExpenses(yearlyExpenses))
    );

    this.totalMonthlyExpenses$ = this.monthlyExpenses$.pipe(
      map((monthlyExpenses) => calculateTotalExpenses(monthlyExpenses))
    );

    this.yearlyExpensesPerMonth$ = this.totalYearlyExpenses$.pipe(
      // IMPORTANT:
      // A flag needs to be added to allow user to select whether or not to round up the result
      map((totalYearlyExpenses) => divideByTwelve(totalYearlyExpenses, 10))
    );

    this.totalMonthlyExpensesIncludingYearly$ = combineLatest([
      this.totalMonthlyExpenses$,
      this.yearlyExpensesPerMonth$,
    ]).pipe(
      map(
        ([totalMonthlyExpenses, yearlyExpensesPerMonth]) =>
          totalMonthlyExpenses + yearlyExpensesPerMonth
      )
    );

    this.combinedMonthlyExpenses$ = combineLatest([
      this.monthlyExpenses$,
      this.yearlyExpensesPerMonth$,
    ]).pipe(
      map(([monthlyExpenses, yearlyPerMonth]) => [
        ...monthlyExpenses,
        { id: randomId(), title: 'Yearly Expenses', amount: yearlyPerMonth },
      ])
    );
  }
}

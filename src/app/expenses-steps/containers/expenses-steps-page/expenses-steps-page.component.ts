import { Component } from '@angular/core';
import { MenuItem } from "primeng/api";
import { PFT_STEPS } from "../../../shared/constants";
import { BehaviorSubject, Observable, combineLatest, map, tap } from "rxjs";
import { Expense } from "../../../shared/models";
import { calculateTotalExpenses, divideByTwelve, randomId } from "../../../shared/utils";

@Component({
  selector: 'pft-expenses-steps-page',
  templateUrl: './expenses-steps-page.component.html',
  styleUrls: ['./expenses-steps-page.component.less'],
})
export class ExpensesStepsPageComponent {
  protected steps: MenuItem[] = [
    {
      label: PFT_STEPS.MONTHLY_INCOME.title,
    },
    {
      label: PFT_STEPS.YEARLY_EXPENSES.title,
    },
    {
      label: PFT_STEPS.MONTHLY_EXPENSES.title,
    },
    {
      label: PFT_STEPS.OVERVIEW.title,
    },
  ];

  protected activeStepIndex$ = new BehaviorSubject<number>(1);
  protected activeStepIndex: number;

  protected monthlyIncome$ = new BehaviorSubject<number>(1000);

  protected yearlyExpenses$ = new BehaviorSubject<Expense[]>([]);
  protected monthlyExpenses$ = new BehaviorSubject<Expense[]>([]);

  protected totalYearlyExpenses$: Observable<number>;
  protected totalMonthlyExpenses$: Observable<number>;

  // This property will store the total yearly expenses divided by 12 (per month expense)
  protected yearlyExpensesPerMonth$: Observable<number>;

  // This property will store the total monthly expenses INCLUDING the yearly expenses per month
  protected totalMonthlyExpensesIncludingYearly$: Observable<number>;

  // This property combines the monthly expenses added by the user,
  // as well as an entry for the total yearly expenses divided by 12.
  protected combinedMonthlyExpenses$: Observable<Expense[]>;

  protected nextButtonDisabled$: Observable<boolean>;

  constructor() {
    this.activeStepIndex$
      .pipe(tap((index) => (this.activeStepIndex = index)))
      .subscribe();

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

    this.nextButtonDisabled$ = combineLatest([
      this.activeStepIndex$,
      this.monthlyIncome$,
      this.yearlyExpenses$,
      this.monthlyExpenses$,
    ]).pipe(
      map(([activeStepIndex, monthlyIncome, yearlyExpenses, monthlyExpenses]) =>
        this.nextButtonDisabled(
          activeStepIndex,
          monthlyIncome,
          yearlyExpenses,
          monthlyExpenses
        )
      )
    );
  }

  goToNextStep() {
    this.activeStepIndex$.next(this.activeStepIndex + 1);
  }

  goToPreviousStep() {
    this.activeStepIndex$.next(this.activeStepIndex - 1);
  }

  private nextButtonDisabled(
    activeStepIndex: number,
    monthlyIncome: number,
    yearlyExpenses: Expense[],
    monthlyExpenses: Expense[]
  ): boolean {
    switch (activeStepIndex) {
      case PFT_STEPS.MONTHLY_INCOME.index:
        return !monthlyIncome || monthlyIncome <= 0;
      case PFT_STEPS.YEARLY_EXPENSES.index:
        return (
          !yearlyExpenses ||
          yearlyExpenses.length === 0 ||
          yearlyExpenses.filter(
            (expense) => expense.amount <= 0 || !expense.title
          ).length > 0
        );
      case PFT_STEPS.MONTHLY_EXPENSES.index:
        return (
          !monthlyExpenses ||
          monthlyExpenses.length === 0 ||
          monthlyExpenses.filter(
            (expense) => expense.amount <= 0 || !expense.title
          ).length > 0
        );
      default:
        return false;
    }
  }
}

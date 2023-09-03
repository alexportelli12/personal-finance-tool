import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { PFT_STEPS } from '../../../shared/constants';
import { BehaviorSubject, Observable, combineLatest, map, tap } from 'rxjs';
import { Expense } from '../../../shared/models';
import { Select, Store } from '@ngxs/store';
import {
  ExpensesState,
  UpdateMonthlyExpenses,
  UpdateMonthlyIncome,
  UpdateYearlyExpenses,
} from '../../../store';

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

  protected activeStepIndex$ = new BehaviorSubject<number>(0);
  protected activeStepIndex: number;

  @Select(ExpensesState.selectMonthlyIncome)
  protected monthlyIncome$: Observable<number>;

  @Select(ExpensesState.selectYearlyExpenses)
  protected yearlyExpenses$: Observable<Expense[]>;

  @Select(ExpensesState.selectMonthlyExpenses)
  protected monthlyExpenses$: Observable<Expense[]>;

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

  protected nextButtonDisabled$: Observable<boolean>;

  constructor(private store: Store) {
    this.yearlyExpensesPerMonth$.subscribe((yearlyExpensesPerMonth) => {
      console.log({ yearlyExpensesPerMonth });
    });

    this.activeStepIndex$
      .pipe(tap((index) => (this.activeStepIndex = index)))
      .subscribe();

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

  updateMonthlyIncome(monthlyIncome: number) {
    this.store.dispatch(new UpdateMonthlyIncome(monthlyIncome));
  }

  updateYearlyExpenses(yearlyExpenses: Expense[]) {
    this.store.dispatch(new UpdateYearlyExpenses(yearlyExpenses));
  }

  updateMonthlyExpenses(monthlyExpenses: Expense[]) {
    this.store.dispatch(new UpdateMonthlyExpenses(monthlyExpenses));
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

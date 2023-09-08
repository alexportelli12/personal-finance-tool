import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { PFT_STEPS } from '../../../shared/constants';
import { BehaviorSubject, Observable, combineLatest, map, tap } from 'rxjs';
import { Expense } from '../../../shared/models';
import { Select, Store } from '@ngxs/store';
import {
  ExpensesState,
  UpdateHasGoneThroughSteps,
  UpdateMonthlyExpenses,
  UpdateMonthlyIncome,
  UpdateYearlyExpenses,
} from '../../../store';
import { Router } from '@angular/router';

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
  ];

  protected activeStepIndex$ = new BehaviorSubject<number>(0);
  protected activeStepIndex: number;

  @Select(ExpensesState.selectMonthlyIncome)
  protected monthlyIncome$: Observable<number>;

  @Select(ExpensesState.selectYearlyExpenses)
  protected yearlyExpenses$: Observable<Expense[]>;

  @Select(ExpensesState.selectMonthlyExpenses)
  protected monthlyExpenses$: Observable<Expense[]>;

  protected nextButtonDisabled$: Observable<boolean>;

  constructor(private store: Store, private router: Router) {
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

  goToYourExpensesPage() {
    this.router.navigate(['/your-expenses']);
    this.store.dispatch(new UpdateHasGoneThroughSteps(true));
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

import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Expense } from '../../shared/models';
import { Injectable } from '@angular/core';
import {
  AddMonthlyExpense,
  AddYearlyExpense,
  UpdateHasGoneThroughSteps,
  UpdateMonthlyExpenses,
  UpdateMonthlyIncome,
  UpdateYearlyExpenses,
} from '../actions/expenses.actions';
import {
  calculateTotalExpenses,
  totalMonthlyExpensesIncludingYearly,
  yearlyExpensesPerMonth,
} from '../../shared/utils';

export interface ExpensesStateModel {
  monthlyIncome: number;
  yearlyExpenses: Expense[];
  monthlyExpenses: Expense[];
  hasGoneThroughSteps: boolean;
}

@State<ExpensesStateModel>({
  name: 'expenses',
  defaults: {
    monthlyIncome: 1000,
    yearlyExpenses: [],
    monthlyExpenses: [],
    hasGoneThroughSteps: false,
  },
})
@Injectable()
export class ExpensesState {
  @Selector()
  static selectHasGoneThroughSteps(state: ExpensesStateModel): boolean {
    return state.hasGoneThroughSteps;
  }

  @Selector()
  static selectMonthlyIncome(state: ExpensesStateModel): number {
    return state.monthlyIncome;
  }

  @Selector()
  static selectYearlyExpenses(state: ExpensesStateModel): Expense[] {
    return state.yearlyExpenses;
  }

  @Selector()
  static selectTotalYearlyExpenses(state: ExpensesStateModel): number {
    return calculateTotalExpenses(state.yearlyExpenses);
  }

  @Selector()
  static selectYearlyExpensesPerMonth(state: ExpensesStateModel): number {
    return yearlyExpensesPerMonth(state.yearlyExpenses, 10);
  }

  @Selector()
  static selectMonthlyExpenses(state: ExpensesStateModel): Expense[] {
    return state.monthlyExpenses;
  }

  @Selector()
  static selectTotalMonthlyExpenses(state: ExpensesStateModel): number {
    return calculateTotalExpenses(state.monthlyExpenses);
  }

  @Selector()
  static selectTotalMonthlyExpensesIncludingYearly(
    state: ExpensesStateModel
  ): number {
    return totalMonthlyExpensesIncludingYearly(
      state.yearlyExpenses,
      state.monthlyExpenses,
      10
    );
  }

  @Selector()
  static selectCombinedMonthlyExpenses(state: ExpensesStateModel): Expense[] {
    return [
      ...state.monthlyExpenses,
      {
        // id: randomId(),
        title: 'Yearly Expenses',
        amount: yearlyExpensesPerMonth(state.yearlyExpenses, 10),
      },
    ];
  }

  @Action(UpdateMonthlyIncome)
  updateMonthlyIncome(
    { patchState }: StateContext<ExpensesStateModel>,
    { monthlyIncome }: UpdateMonthlyIncome
  ) {
    patchState({ monthlyIncome });
  }

  @Action(UpdateYearlyExpenses)
  updateYearlyExpenses(
    { patchState }: StateContext<ExpensesStateModel>,
    { yearlyExpenses }: UpdateYearlyExpenses
  ) {
    patchState({ yearlyExpenses });
  }

  @Action(UpdateMonthlyExpenses)
  updateMonthlyExpenses(
    { patchState }: StateContext<ExpensesStateModel>,
    { monthlyExpenses }: UpdateMonthlyExpenses
  ) {
    patchState({ monthlyExpenses });
  }

  @Action(AddYearlyExpense)
  addYearlyExpense(
    { patchState, getState }: StateContext<ExpensesStateModel>,
    { expense }: AddYearlyExpense
  ) {
    patchState({
      yearlyExpenses: [...getState().yearlyExpenses, expense],
    });
  }

  @Action(AddMonthlyExpense)
  addMonthlyExpense(
    { patchState, getState }: StateContext<ExpensesStateModel>,
    { expense }: AddMonthlyExpense
  ) {
    patchState({
      monthlyExpenses: [...getState().monthlyExpenses, expense],
    });
  }

  @Action(UpdateHasGoneThroughSteps)
  updateHasGoneThroughSteps(
    { patchState }: StateContext<ExpensesStateModel>,
    { hasGoneThroughSteps }: UpdateHasGoneThroughSteps
  ) {
    patchState({ hasGoneThroughSteps });
  }
}

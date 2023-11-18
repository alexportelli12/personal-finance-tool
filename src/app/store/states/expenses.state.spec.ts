import { TestBed } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { ExpensesState, ExpensesStateModel } from './expenses.state';
import { Expense } from '../../shared/models';
import { givenExpenses } from '../../shared/models/generators';
import {
  AddMonthlyExpense,
  AddYearlyExpense,
  UpdateHasGoneThroughSteps,
  UpdateMonthlyExpenses,
  UpdateMonthlyIncome,
  UpdateYearlyExpenses,
} from '../actions/expenses.actions';

describe('ExpensesState', () => {
  let store: Store;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([ExpensesState])],
    });
    store = TestBed.inject(Store);
  });

  it('should select the monthly expenses', () => {
    const monthlyExpenses: Expense[] = givenExpenses();
    const state: ExpensesStateModel = {
      monthlyIncome: 1000,
      yearlyExpenses: [],
      monthlyExpenses: monthlyExpenses,
      hasGoneThroughSteps: false,
    };
    store.reset({ expenses: state });

    const selectedMonthlyExpenses = store.selectSnapshot(
      ExpensesState.selectMonthlyExpenses
    );

    expect(selectedMonthlyExpenses).toEqual(monthlyExpenses);
  });

  it('should select the yearly expenses', () => {
    const yearlyExpenses: Expense[] = givenExpenses();
    const state: ExpensesStateModel = {
      monthlyIncome: 1000,
      yearlyExpenses: yearlyExpenses,
      monthlyExpenses: [],
      hasGoneThroughSteps: false,
    };
    store.reset({ expenses: state });

    const selectedYearlyExpenses = store.selectSnapshot(
      ExpensesState.selectYearlyExpenses
    );

    expect(selectedYearlyExpenses).toEqual(yearlyExpenses);
  });

  it('should select the total yearly expenses', () => {
    const yearlyExpenses: Expense[] = givenExpenses();
    const state: ExpensesStateModel = {
      monthlyIncome: 1000,
      yearlyExpenses: yearlyExpenses,
      monthlyExpenses: [],
      hasGoneThroughSteps: false,
    };
    store.reset({ expenses: state });

    const selectedTotalYearlyExpenses = store.selectSnapshot(
      ExpensesState.selectTotalYearlyExpenses
    );

    expect(selectedTotalYearlyExpenses).toEqual(400);
  });

  it('should select the total monthly expenses', () => {
    const monthlyExpenses: Expense[] = givenExpenses();
    const state: ExpensesStateModel = {
      monthlyIncome: 1000,
      yearlyExpenses: [],
      monthlyExpenses: monthlyExpenses,
      hasGoneThroughSteps: false,
    };
    store.reset({ expenses: state });

    const selectedTotalMonthlyExpenses = store.selectSnapshot(
      ExpensesState.selectTotalMonthlyExpenses
    );

    expect(selectedTotalMonthlyExpenses).toEqual(400);
  });

  it('should select the total monthly expenses including yearly', () => {
    const yearlyExpenses: Expense[] = givenExpenses();
    const monthlyExpenses: Expense[] = givenExpenses();
    const state: ExpensesStateModel = {
      monthlyIncome: 1000,
      yearlyExpenses: yearlyExpenses,
      monthlyExpenses: monthlyExpenses,
      hasGoneThroughSteps: false,
    };
    store.reset({ expenses: state });

    const selectedTotalMonthlyExpensesIncludingYearly = store.selectSnapshot(
      ExpensesState.selectTotalMonthlyExpensesIncludingYearly
    );

    expect(selectedTotalMonthlyExpensesIncludingYearly).toEqual(440);
  });

  it('should select the yearly expenses per month', () => {
    const yearlyExpenses: Expense[] = givenExpenses();
    const state: ExpensesStateModel = {
      monthlyIncome: 1000,
      yearlyExpenses: yearlyExpenses,
      monthlyExpenses: [],
      hasGoneThroughSteps: false,
    };
    store.reset({ expenses: state });

    const selectedYearlyExpensesPerMonth = store.selectSnapshot(
      ExpensesState.selectYearlyExpensesPerMonth
    );

    expect(selectedYearlyExpensesPerMonth).toEqual(40);
  });

  it('should select the monthly income', () => {
    const monthlyIncome = 1000;
    const state: ExpensesStateModel = {
      monthlyIncome,
      yearlyExpenses: [],
      monthlyExpenses: [],
      hasGoneThroughSteps: false,
    };
    store.reset({ expenses: state });

    const selectedMonthlyIncome = store.selectSnapshot(
      ExpensesState.selectMonthlyIncome
    );

    expect(selectedMonthlyIncome).toEqual(monthlyIncome);
  });

  it('should select the has gone through steps', () => {
    const hasGoneThroughSteps = true;
    const state: ExpensesStateModel = {
      monthlyIncome: 1000,
      yearlyExpenses: [],
      monthlyExpenses: [],
      hasGoneThroughSteps,
    };
    store.reset({ expenses: state });

    const selectedHasGoneThroughSteps = store.selectSnapshot(
      ExpensesState.selectHasGoneThroughSteps
    );

    expect(selectedHasGoneThroughSteps).toEqual(hasGoneThroughSteps);
  });

  it('should select combined monthly expenses', () => {
    const yearlyExpenses: Expense[] = givenExpenses();
    const monthlyExpenses: Expense[] = givenExpenses();
    const state: ExpensesStateModel = {
      monthlyIncome: 1000,
      yearlyExpenses: yearlyExpenses,
      monthlyExpenses: monthlyExpenses,
      hasGoneThroughSteps: false,
    };
    store.reset({ expenses: state });

    const selectedCombinedMonthlyExpenses = store.selectSnapshot(
      ExpensesState.selectCombinedMonthlyExpenses
    );

    expect(selectedCombinedMonthlyExpenses).toEqual([
      ...monthlyExpenses,
      {
        title: 'Yearly Expenses',
        amount: 40,
        category: {
          title: '📅 Yearly Expenses',
          color: 'black',
        },
      },
    ]);
  });

  it('should update the monthly income', () => {
    const monthlyIncome = 1000;
    store.dispatch(new UpdateMonthlyIncome(monthlyIncome));

    const selectedMonthlyIncome = store.selectSnapshot(
      ExpensesState.selectMonthlyIncome
    );

    expect(selectedMonthlyIncome).toEqual(monthlyIncome);
  });

  it('should update the yearly expenses', () => {
    const yearlyExpenses: Expense[] = givenExpenses();
    store.dispatch(new UpdateYearlyExpenses(yearlyExpenses));

    const selectedYearlyExpenses = store.selectSnapshot(
      ExpensesState.selectYearlyExpenses
    );

    expect(selectedYearlyExpenses).toEqual(yearlyExpenses);
  });

  it('should update the monthly expenses', () => {
    const monthlyExpenses: Expense[] = givenExpenses();
    store.dispatch(new UpdateMonthlyExpenses(monthlyExpenses));

    const selectedMonthlyExpenses = store.selectSnapshot(
      ExpensesState.selectMonthlyExpenses
    );

    expect(selectedMonthlyExpenses).toEqual(monthlyExpenses);
  });

  it('should update the has gone through steps', () => {
    const hasGoneThroughSteps = true;
    store.dispatch(new UpdateHasGoneThroughSteps(hasGoneThroughSteps));

    const selectedHasGoneThroughSteps = store.selectSnapshot(
      ExpensesState.selectHasGoneThroughSteps
    );

    expect(selectedHasGoneThroughSteps).toEqual(hasGoneThroughSteps);
  });

  it('should add a monthly expense', () => {
    const monthlyExpense: Expense = givenExpenses()[0];
    store.dispatch(new AddMonthlyExpense(monthlyExpense));

    const selectedMonthlyExpenses = store.selectSnapshot(
      ExpensesState.selectMonthlyExpenses
    );

    expect(selectedMonthlyExpenses).toEqual([monthlyExpense]);
  });

  it('should add a yearly expense', () => {
    const yearlyExpense: Expense = givenExpenses()[0];
    store.dispatch(new AddYearlyExpense(yearlyExpense));

    const selectedYearlyExpenses = store.selectSnapshot(
      ExpensesState.selectYearlyExpenses
    );

    expect(selectedYearlyExpenses).toEqual([yearlyExpense]);
  });
});

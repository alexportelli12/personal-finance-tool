import {
  AddMonthlyExpense,
  AddYearlyExpense,
  RemoveMonthlyExpense,
  RemoveYearlyExpense,
  UpdateHasGoneThroughSteps,
  UpdateMonthlyExpenses,
  UpdateMonthlyIncome,
  UpdateYearlyExpenses,
} from './expenses.actions';
import { EXPENSE_CATEGORIES, Expense } from '../../shared/models';

describe('Expenses Actions', () => {
  describe('UpdateMonthlyIncome', () => {
    it('should create an action to update monthly income', () => {
      const monthlyIncome = 5000;
      const action = new UpdateMonthlyIncome(monthlyIncome);
      expect(action.monthlyIncome).toEqual(monthlyIncome);
    });
  });

  describe('UpdateYearlyExpensess', () => {
    it('should create an action to update yearly expenses', () => {
      const yearlyExpenses: Expense[] = [
        {
          id: '1',
          title: 'Rent',
          amount: 1000,
          category: EXPENSE_CATEGORIES[1],
        },
        {
          id: '2',
          title: 'Utilities',
          amount: 200,
          category: EXPENSE_CATEGORIES[2],
        },
      ];
      const action = new UpdateYearlyExpenses(yearlyExpenses);
      expect(action.yearlyExpenses).toEqual(yearlyExpenses);
    });
  });

  describe('AddYearlyExpense', () => {
    it('should create an action to add a yearly expense', () => {
      const expense: Expense = {
        id: '1',
        title: 'Rent',
        amount: 1000,
        category: EXPENSE_CATEGORIES[1],
      };
      const action = new AddYearlyExpense(expense);
      expect(action.expense).toEqual(expense);
    });
  });

  describe('RemoveYearlyExpense', () => {
    it('should create an action to remove a yearly expense', () => {
      const expenseId = '1';
      const action = new RemoveYearlyExpense(expenseId);
      expect(action.expenseId).toEqual(expenseId);
    });
  });

  describe('UpdateMonthlyExpensess', () => {
    it('should create an action to update monthly expenses', () => {
      const monthlyExpenses: Expense[] = [
        {
          id: '1',
          title: 'Rent',
          amount: 1000,
          category: EXPENSE_CATEGORIES[1],
        },
        {
          id: '2',
          title: 'Utilities',
          amount: 200,
          category: EXPENSE_CATEGORIES[2],
        },
      ];
      const action = new UpdateMonthlyExpenses(monthlyExpenses);
      expect(action.monthlyExpenses).toEqual(monthlyExpenses);
    });
  });

  describe('AddMonthlyExpense', () => {
    it('should create an action to add a monthly expense', () => {
      const expense: Expense = {
        id: '1',
        title: 'Rent',
        amount: 1000,
        category: EXPENSE_CATEGORIES[1],
      };
      const action = new AddMonthlyExpense(expense);
      expect(action.expense).toEqual(expense);
    });
  });

  describe('RemoveMonthlyExpense', () => {
    it('should create an action to remove a monthly expense', () => {
      const expenseId = '1';
      const action = new RemoveMonthlyExpense(expenseId);
      expect(action.expenseId).toEqual(expenseId);
    });
  });

  describe('UpdateHasGoneThroughSteps', () => {
    it('should create an action to update has gone through steps', () => {
      const hasGoneThroughSteps = true;
      const action = new UpdateHasGoneThroughSteps(hasGoneThroughSteps);
      expect(action.hasGoneThroughSteps).toEqual(hasGoneThroughSteps);
    });
  });
});

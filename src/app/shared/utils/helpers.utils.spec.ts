import { givenExpenses } from '../models/generators';
import {
  calculateTotalExpenses,
  divideByTwelve,
  randomId,
  totalMonthlyExpensesIncludingYearly,
  yearlyExpensesPerMonth,
} from './helpers.utils';

describe('HelpersUtils', () => {
  describe('randomId', () => {
    it('should return a random id', () => {
      const id = randomId();
      expect(id).toBeTruthy();
    });

    it('should return a different id each time', () => {
      const id1 = randomId();
      const id2 = randomId();
      expect(id1).not.toEqual(id2);
    });
  });

  describe('calculateTotalExpenses', () => {
    it('should return the total amount of expenses', () => {
      const expenses = givenExpenses();
      const total = calculateTotalExpenses(expenses);

      expect(total).toEqual(400);
    });
  });

  describe('divideByTwelve', () => {
    it('should divide by twelve', () => {
      const divided = divideByTwelve(1000);
      expect(divided).toEqual(83.33);
    });

    it('should round up to the nearest 10', () => {
      const divided = divideByTwelve(1000, 10);
      expect(divided).toEqual(90);
    });
  });

  describe('yearlyExpensesPerMonth', () => {
    it('should return the total amount of yearly expenses divided by 12', () => {
      const result = yearlyExpensesPerMonth(givenExpenses());
      expect(result).toEqual(33.33);
    });

    it('should return the total amount of yearly expenses divided by 12 rounded up', () => {
      const result = yearlyExpensesPerMonth(givenExpenses(), 10);
      expect(result).toEqual(40);
    });
  });

  describe('totalMonthlyExpensesIncludingYearly', () => {
    it('should return the total amount of yearly expenses divided by 12', () => {
      const yearlyExpenses = givenExpenses();
      const monthlyExpenses = givenExpenses();

      const result = totalMonthlyExpensesIncludingYearly(
        yearlyExpenses,
        monthlyExpenses
      );

      expect(result).toEqual(433.33);
    });

    it('should return the total amount of yearly expenses divided by 12 rounded up', () => {
      const yearlyExpenses = givenExpenses();
      const monthlyExpenses = givenExpenses();

      const result = totalMonthlyExpensesIncludingYearly(
        yearlyExpenses,
        monthlyExpenses,
        10
      );

      expect(result).toEqual(440);
    });
  });
});

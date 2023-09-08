import { Expense } from '../models';

export const randomId = (): string => {
  return Math.random().toString(16).slice(2);
};

export const calculateTotalExpenses = (expenses: Expense[]): number => {
  let total = 0;
  expenses.forEach((expense) => (total += expense.amount));

  return total;
};

export const divideByTwelve = (
  value: number,
  roundUp: number | null = null
): number => {
  let divided = +(value / 12).toFixed(2);

  if (roundUp !== null) {
    // Round up to the nearest number specified
    divided = Math.ceil(divided / roundUp) * roundUp;
  }

  return divided;
};

export const yearlyExpensesPerMonth = (
  yearlyExpenses: Expense[],
  roundUp: number | null = null
): number => {
  return divideByTwelve(calculateTotalExpenses(yearlyExpenses), roundUp);
};

export const totalMonthlyExpensesIncludingYearly = (
  yearlyExpenses: Expense[],
  monthlyExpenses: Expense[],
  roundUp: number | null = null
): number => {
  return (
    divideByTwelve(calculateTotalExpenses(yearlyExpenses), roundUp) +
    calculateTotalExpenses(monthlyExpenses)
  );
};

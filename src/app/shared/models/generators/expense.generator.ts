import { randomId } from '../../utils';
import { EXPENSE_CATEGORIES, Expense } from '../expense.model';

export const givenExpense = (overrides?: Partial<Expense>): Expense => ({
  id: randomId(),
  title: 'Expense 1',
  amount: 100,
  category: EXPENSE_CATEGORIES[10],
  ...overrides,
});

export const givenExpenses = (): Expense[] => [
  givenExpense({ id: randomId() }),
  givenExpense({ id: randomId() }),
  givenExpense({ id: randomId() }),
  givenExpense({ id: randomId(), category: EXPENSE_CATEGORIES[8] }),
];

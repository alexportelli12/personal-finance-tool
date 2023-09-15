export interface Expense {
  id?: string;
  title: string;
  amount: number;
  category: ExpenseCategory;
}

export interface ExpenseCategory {
  title: string;
  color: string;
}

export const EXPENSE_CATEGORIES: ExpenseCategory[] = [
  {
    title: '🏦 Loans',
    color: '#ff0000',
  },
  {
    title: '🛒 Groceries',
    color: '#ff5300',
  },
  {
    title: '🎁 Gifts',
    color: '#ffa500',
  },
  {
    title: '⚕️ Medical',
    color: '#ffd200',
  },
  {
    title: '🛡️ Insurance',
    color: '#ffff00',
  },
  {
    title: '💰 Savings',
    color: '#80c000',
  },
  {
    title: '🚗 Car',
    color: '#008000',
  },
  {
    title: '🏍️ Motorcycle',
    color: '#004080',
  },
  {
    title: '🍿 Entertainment',
    color: '#0000ff',
  },
  {
    title: '💡 Utilities',
    color: '#2600c1',
  },
  {
    title: '📂 Other',
    color: '#4b0082',
  },
];

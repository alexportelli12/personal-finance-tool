import { Expense } from './expense.model';

export interface ExpenseFormData {
  monthlyIncome: number;
  yearlyExpenses: Expense[];
  monthlyExpenses: Expense[];
}

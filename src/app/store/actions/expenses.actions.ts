import { Expense } from '../../shared/models';

export class UpdateMonthlyIncome {
  static readonly type = '[Expenses] Update Monthly Income';
  constructor(public monthlyIncome: number) {}
}

// Yearly Expenses
export class UpdateYearlyExpenses {
  static readonly type = '[Expenses] Update Yearly Expenses';
  constructor(public yearlyExpenses: Expense[]) {}
}

export class AddYearlyExpense {
  static readonly type = '[Expenses] Add Yearly Expense';
  constructor(public expense: Expense) {}
}

export class RemoveYearlyExpense {
  static readonly type = '[Expenses] Remove Yearly Expense';
  constructor(public expenseId: string) {}
}

// Monthly Expenses
export class UpdateMonthlyExpenses {
  static readonly type = '[Expenses] Update Monthly Expenses';
  constructor(public monthlyExpenses: Expense[]) {}
}

export class AddMonthlyExpense {
  static readonly type = '[Expenses] Add Monthly Expense';
  constructor(public expense: Expense) {}
}

export class RemoveMonthlyExpense {
  static readonly type = '[Expenses] Remove Monthly Expense';
  constructor(public expenseId: string) {}
}

export class UpdateHasGoneThroughSteps {
  static readonly type = '[Expenses] Update Has Gone Through Steps';
  constructor(public hasGoneThroughSteps: boolean) {}
}

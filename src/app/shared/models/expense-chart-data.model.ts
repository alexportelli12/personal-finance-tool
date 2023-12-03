export interface ExpenseChartData {
  labels: string[];
  datasets: ExpenseChartDataset[];
}

export type ExpenseChartDataset =
  | ExpensePieChartDataset
  | ExpenseBarChartDataset;

export interface ExpensePieChartDataset {
  data: { amount: number; percentage: string }[];
  backgroundColor: string[];
}

export interface ExpenseBarChartDataset {
  data: number[];
  backgroundColor: string[];
}

export enum ExpenseChartType {
  Pie = 'pie',
  Bar = 'bar',
}

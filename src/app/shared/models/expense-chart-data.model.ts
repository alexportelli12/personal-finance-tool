export interface ExpenseChartData {
  labels: string[];
  datasets: ExpenseChartDataset[];
}

export interface ExpenseChartDataset {
  data: { amount: number; percentage: string }[];
  backgroundColor: string[];
}

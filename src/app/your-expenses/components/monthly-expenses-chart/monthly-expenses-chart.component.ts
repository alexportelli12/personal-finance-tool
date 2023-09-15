import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  Expense,
  ExpenseCategory,
  ExpenseChartData,
} from '../../../shared/models';
import { UIChart } from 'primeng/chart';

@Component({
  selector: 'pft-monthly-expenses-chart',
  templateUrl: './monthly-expenses-chart.component.html',
  styleUrls: ['./monthly-expenses-chart.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MonthlyExpensesChartComponent implements OnInit {
  @Input()
  monthlyExpenses: Expense[];

  @ViewChild('pieChart')
  protected pieChart: UIChart;

  protected selectedChartType: 'pie' | 'bar' = 'pie';
  protected chartData: ExpenseChartData;

  protected chartTypes = [
    {
      label: 'Pie',
      value: 'pie',
    },
    {
      label: 'Bar',
      value: 'bar',
    },
  ];

  protected chartOptions = {
    parsing: {
      key: 'amount',
    },
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: true,
        },
      },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            const label = context.label || '';

            if (label) {
              const data = context.raw || 0;
              return `€${data.amount} (${data.percentage})`;
            }

            return '';
          },
        },
      },
    },
  };

  private monthlyExpensesGroupedByCategory: ReturnType<
    typeof this.mapMonthlyExpensesGroupedByCategory
  >;

  ngOnInit(): void {
    this.chartData = this.mapChartData();
  }

  protected onChartTypeChange(chartType: 'pie' | 'bar'): void {
    console.log(this.pieChart.chart);
    setTimeout(() => {
      console.log('setTimeout', this.pieChart.chart);
    }, 500);
  }

  private mapChartData(): ExpenseChartData {
    const groupedByCategory: {
      category: ExpenseCategory;
      totalAmount: number;
    }[] = [];

    this.monthlyExpenses.forEach((expense) => {
      const category = groupedByCategory.find(
        (groupedExpense) =>
          groupedExpense.category.title === expense.category.title
      );

      if (category) {
        category.totalAmount += expense.amount;
      } else {
        groupedByCategory.push({
          category: expense.category,
          totalAmount: expense.amount,
        });
      }
    });

    this.monthlyExpensesGroupedByCategory =
      this.mapMonthlyExpensesGroupedByCategory();

    return {
      labels: this.monthlyExpensesGroupedByCategory.map(
        (expense) => expense.category.title
      ),
      datasets: [
        {
          data: this.monthlyExpensesGroupedByCategory.map((expense) => ({
            amount: expense.totalAmount,
            percentage: expense.percentage,
          })),
          backgroundColor: this.monthlyExpensesGroupedByCategory.map(
            (expense) => expense.category.color
          ),
        },
      ],
    };
  }

  private mapMonthlyExpensesGroupedByCategory() {
    const totalMonthlyExpenses = this.monthlyExpenses.reduce(
      (total, expense) => total + expense.amount,
      0
    );

    const groupedByCategory: {
      category: ExpenseCategory;
      totalAmount: number;
      percentage: string;
    }[] = [];

    this.monthlyExpenses.forEach((expense) => {
      const category = groupedByCategory.find(
        (groupedExpense) =>
          groupedExpense.category.title === expense.category.title
      );

      if (category) {
        category.totalAmount += expense.amount;
        category.percentage = `${Math.round(
          (category.totalAmount / totalMonthlyExpenses) * 100
        )}%`;
      } else {
        groupedByCategory.push({
          category: expense.category,
          totalAmount: expense.amount,
          percentage: `${Math.round(
            (expense.amount / totalMonthlyExpenses) * 100
          )}%`,
        });
      }
    });

    return groupedByCategory.sort((a, b) => b.totalAmount - a.totalAmount);
  }
}

import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Expense } from '../../../shared/models';

@Component({
  selector: 'pft-your-expenses',
  templateUrl: './your-expenses.component.html',
  styleUrls: ['./your-expenses.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class YourExpensesComponent {
  @Input()
  monthlyExpenses: Expense[];

  @Input()
  totalMonthlyExpensesIncludingYearly: number;

  @Input()
  monthlyIncome: number;

  data = {
    labels: ['A', 'B', 'C'],
    datasets: [
      {
        data: [540, 325, 702],
        backgroundColor: ['black', 'blue', 'yellow'],
        hoverBackgroundColor: ['orange', 'green', 'red'],
      },
    ],
  };

  options = {
    plugins: {
      legend: {
        labels: {
          usePointStyle: true,
          color: 'purple',
        },
      },
    },
  };
}

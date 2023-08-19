import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'pft-monthly-income',
  templateUrl: './monthly-income.component.html',
  styleUrls: ['./monthly-income.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MonthlyIncomeComponent {
  @Input()
  monthlyIncome: number;

  @Output()
  monthlyIncomeChange: EventEmitter<number> = new EventEmitter();
}

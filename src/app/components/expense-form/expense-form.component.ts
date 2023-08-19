import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ExpenseFormData } from '../../models';

@Component({
  selector: 'pft-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpenseFormComponent {
  @Input()
  expenseFormData: ExpenseFormData;
}

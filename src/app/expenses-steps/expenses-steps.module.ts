import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpensesStepsRoutingModule } from './expenses-steps-routing.module';
import { ExpensesStepsPageComponent } from './containers/expenses-steps-page/expenses-steps-page.component';
import { ExpensesComponent, MonthlyIncomeComponent } from './components';
import { SharedModule } from '../shared/shared.module';

const CONTAINERS = [ExpensesStepsPageComponent];

const COMPONENTS = [ExpensesComponent, MonthlyIncomeComponent];

@NgModule({
  declarations: [...CONTAINERS, ...COMPONENTS],
  imports: [CommonModule, ExpensesStepsRoutingModule, SharedModule],
})
export class ExpensesStepsModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YourExpensesRoutingModule } from './your-expenses-routing.module';
import { SharedModule } from '../shared/shared.module';
import {
  DashboardComponent,
  MonthlyChecklistComponent,
  MonthlyExpensesComponent,
  YearlyExpensesComponent,
  YourExpensesPageComponent,
} from './containers';
import { YourExpensesComponent } from './components';

const CONTAINERS = [
  YourExpensesPageComponent,
  DashboardComponent,
  YearlyExpensesComponent,
  MonthlyExpensesComponent,
  MonthlyChecklistComponent,
];
const COMPONENTS = [YourExpensesComponent];

@NgModule({
  declarations: [...CONTAINERS, ...COMPONENTS],
  imports: [CommonModule, YourExpensesRoutingModule, SharedModule],
})
export class YourExpensesModule {}

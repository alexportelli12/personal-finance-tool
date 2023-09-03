import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YourExpensesRoutingModule } from './your-expenses-routing.module';
import { YourExpensesPageComponent } from './containers/your-expenses-page/your-expenses-page.component';
import { SharedModule } from '../shared/shared.module';
import { YourExpensesComponent } from './components/your-expenses/your-expenses.component';

const CONTAINERS = [YourExpensesPageComponent];
const COMPONENTS = [YourExpensesComponent];

@NgModule({
  declarations: [...CONTAINERS, ...COMPONENTS],
  imports: [CommonModule, YourExpensesRoutingModule, SharedModule],
})
export class YourExpensesModule {}

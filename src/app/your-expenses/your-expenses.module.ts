import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YourExpensesRoutingModule } from './your-expenses-routing.module';
import { YourExpensesPageComponent } from './containers/your-expenses-page/your-expenses-page.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [YourExpensesPageComponent],
  imports: [CommonModule, YourExpensesRoutingModule, SharedModule],
})
export class YourExpensesModule {}

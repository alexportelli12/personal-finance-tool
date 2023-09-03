import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YourExpensesPageComponent } from './containers/your-expenses-page/your-expenses-page.component';

const ROUTES: Routes = [
  {
    path: '',
    component: YourExpensesPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class YourExpensesRoutingModule {}

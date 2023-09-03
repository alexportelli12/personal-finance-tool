import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpensesStepsPageComponent } from './containers/expenses-steps-page/expenses-steps-page.component';

const ROUTES: Routes = [
  {
    path: '',
    component: ExpensesStepsPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class ExpensesStepsRoutingModule {}

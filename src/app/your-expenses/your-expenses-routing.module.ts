import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YourExpensesPageComponent } from './containers/your-expenses-page/your-expenses-page.component';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { YearlyExpensesComponent } from './containers/yearly-expenses/yearly-expenses.component';
import { MonthlyExpensesComponent } from './containers/monthly-expenses/monthly-expenses.component';
import { MonthlyChecklistComponent } from './containers/monthly-checklist/monthly-checklist.component';

const ROUTES: Routes = [
  {
    path: '',
    component: YourExpensesPageComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'monthly-checklist',
        component: MonthlyChecklistComponent,
      },
      {
        path: 'yearly-expenses',
        component: YearlyExpensesComponent,
      },
      {
        path: 'monthly-expenses',
        component: MonthlyExpensesComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class YourExpensesRoutingModule {}

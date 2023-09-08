import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'expenses-steps',
    loadChildren: () =>
      import('./expenses-steps/expenses-steps.module').then(
        (m) => m.ExpensesStepsModule
      ),
  },
  {
    path: 'your-expenses',
    loadChildren: () =>
      import('./your-expenses/your-expenses.module').then(
        (m) => m.YourExpensesModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

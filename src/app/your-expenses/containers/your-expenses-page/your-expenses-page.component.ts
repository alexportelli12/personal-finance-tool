import { Component } from '@angular/core';
import { Expense } from '../../../shared/models';
import { Select } from '@ngxs/store';
import { ExpensesState } from '../../../store';
import { Observable } from 'rxjs';

@Component({
  selector: 'pft-your-expenses-page',
  templateUrl: './your-expenses-page.component.html',
  styleUrls: ['./your-expenses-page.component.less'],
})
export class YourExpensesPageComponent {

  @Select(ExpensesState.selectTotalYearlyExpenses)
  protected totalYearlyExpenses$: Observable<number>;

  @Select(ExpensesState.selectTotalMonthlyExpenses)
  protected totalMonthlyExpenses$: Observable<number>;

  // This property will store the total yearly expenses divided by 12 (per month expense)
  @Select(ExpensesState.selectYearlyExpensesPerMonth)
  protected yearlyExpensesPerMonth$: Observable<number>;


  protected menuItems = [
    {
      label: 'Dashboard',
      icon: 'pi pi-fw pi-home',
      routerLink: ['dashboard'],
    },
    {
      label: 'Expense Checklist',
      icon: 'pi pi-fw pi-check-circle',
      routerLink: ['monthly-checklist'],
    },
    {
      label: 'Yearly Expenses',
      icon: 'pi pi-fw pi-euro',
      routerLink: ['yearly-expenses'],
    },
    {
      label: 'Monthly Expenses',
      icon: 'pi pi-fw pi-money-bill',
      routerLink: ['monthly-expenses'],
    },
  ];
}

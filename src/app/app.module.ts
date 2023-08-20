import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { StepsModule } from 'primeng/steps';
import { MessagesModule } from 'primeng/messages';
import { TooltipModule } from 'primeng/tooltip';
import { DropdownModule } from 'primeng/dropdown';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { MonthlyExpenseChecklistComponent } from './components/monthly-expense-checklist/monthly-expense-checklist.component';

import { AppComponent } from './app.component';
import { MonthlyIncomeComponent } from './components/monthly-income/monthly-income.component';
import { MainComponent } from './containers/main/main.component';
import { RouterModule } from '@angular/router';

const CONTAINERS = [AppComponent, MainComponent];

const COMPONENTS = [
  ExpensesComponent,
  MonthlyExpenseChecklistComponent,
  MonthlyIncomeComponent,
];

const PRIMENG_MODULES = [
  ButtonModule,
  InputNumberModule,
  InputTextModule,
  TableModule,
  StepsModule,
  MessagesModule,
  TooltipModule,
  DropdownModule,
];

@NgModule({
  declarations: [...CONTAINERS, ...COMPONENTS],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot([]),
    ...PRIMENG_MODULES,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

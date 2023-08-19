import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { ExpenseFormComponent } from './components/expense-form/expense-form.component';
import { MonthlyExpenseChecklistComponent } from './components/monthly-expense-checklist/monthly-expense-checklist.component';

import { AppComponent } from './app.component';
import { MonthlyIncomeComponent } from './components/monthly-income/monthly-income.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpensesComponent,
    ExpenseFormComponent,
    MonthlyExpenseChecklistComponent,
    MonthlyIncomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ButtonModule,
    InputNumberModule,
    InputTextModule,
    TableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

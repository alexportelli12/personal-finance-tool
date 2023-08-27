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
import { SidebarModule } from 'primeng/sidebar';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { MonthlyExpenseChecklistComponent } from './components/monthly-expense-checklist/monthly-expense-checklist.component';
import { EditExpenseComponent } from './components/edit-expense/edit-expense.component';

import { AppComponent } from './app.component';
import { MonthlyIncomeComponent } from './components/monthly-income/monthly-income.component';
import { MainComponent } from './containers/main/main.component';
import { RouterModule } from '@angular/router';
import { KeydownStopPropagationDirective } from './directives/keydown-stop-propagation.directive';

const CONTAINERS = [AppComponent, MainComponent];

const COMPONENTS = [
  ExpensesComponent,
  MonthlyExpenseChecklistComponent,
  MonthlyIncomeComponent,
  EditExpenseComponent,
];

const DIRECTIVES = [KeydownStopPropagationDirective];

const PRIMENG_MODULES = [
  ButtonModule,
  InputNumberModule,
  InputTextModule,
  TableModule,
  StepsModule,
  MessagesModule,
  TooltipModule,
  DropdownModule,
  SidebarModule,
];

@NgModule({
  declarations: [...CONTAINERS, ...COMPONENTS, ...DIRECTIVES],
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

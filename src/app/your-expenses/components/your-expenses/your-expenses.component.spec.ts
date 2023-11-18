import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourExpensesComponent } from './your-expenses.component';
import { SharedModule } from '../../../shared/shared.module';
import { MonthlyExpensesChartComponent } from '../monthly-expenses-chart/monthly-expenses-chart.component';
import { givenExpenses } from "../../../shared/models/generators";

describe('YourExpensesComponent', () => {
  let component: YourExpensesComponent;
  let fixture: ComponentFixture<YourExpensesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YourExpensesComponent, MonthlyExpensesChartComponent],
      imports: [SharedModule],
    });
    fixture = TestBed.createComponent(YourExpensesComponent);
    component = fixture.componentInstance;

    component.monthlyExpenses = givenExpenses();

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

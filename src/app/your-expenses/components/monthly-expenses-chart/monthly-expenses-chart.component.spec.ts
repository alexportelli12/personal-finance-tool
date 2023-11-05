import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyExpensesChartComponent } from './monthly-expenses-chart.component';
import { givenExpenses } from "../../../shared/models/generators";

fdescribe('MonthlyExpensesChartComponent', () => {
  let component: MonthlyExpensesChartComponent;
  let fixture: ComponentFixture<MonthlyExpensesChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonthlyExpensesChartComponent]
    });
    fixture = TestBed.createComponent(MonthlyExpensesChartComponent);
    component = fixture.componentInstance;

    component.monthlyExpenses = givenExpenses();

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

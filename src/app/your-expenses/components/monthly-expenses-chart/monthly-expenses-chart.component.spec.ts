import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyExpensesChartComponent } from './monthly-expenses-chart.component';
import { givenExpenses } from '../../../shared/models/generators';
import { EXPENSE_CATEGORIES } from '../../../shared/models';
import { SharedModule } from '../../../shared/shared.module';

describe('MonthlyExpensesChartComponent', () => {
  let component: MonthlyExpensesChartComponent;
  let fixture: ComponentFixture<MonthlyExpensesChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonthlyExpensesChartComponent],
      imports: [SharedModule],
    });
    fixture = TestBed.createComponent(MonthlyExpensesChartComponent);
    component = fixture.componentInstance;

    component.monthlyExpenses = givenExpenses();

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set chart data for both pie and bar charts', () => {
    expect(component['pieChartData']).toBeTruthy();
    expect(component['barChartData']).toBeTruthy();
  });

  it('should map monthlyExpenses to pieChartData', () => {
    expect(component['pieChartData'].datasets[0].data).toEqual([
      {
        amount: 300,
        percentage: '75%',
      },
      {
        amount: 100,
        percentage: '25%',
      },
    ]);
  });

  it('should map monthlyExpenses to barChartData', () => {
    expect(component['barChartData'].datasets[0].data).toEqual([300, 100]);
  });

  it('should map monthlyExpensesGroupedByCategory property', () => {
    expect(component['monthlyExpensesGroupedByCategory']).toEqual([
      {
        category: EXPENSE_CATEGORIES[10],
        totalAmount: 300,
        percentage: '75%',
      },
      {
        category: EXPENSE_CATEGORIES[8],
        totalAmount: 100,
        percentage: '25%',
      },
    ]);
  });
});

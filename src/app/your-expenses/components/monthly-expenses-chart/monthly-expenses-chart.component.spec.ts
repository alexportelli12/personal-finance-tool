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

  it('should set chartData', () => {
    expect(component['chartData']).toBeTruthy();
  });

  it('should map monthlyExpenses to chartData', () => {
    expect(component['chartData'].datasets[0].data).toEqual([
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

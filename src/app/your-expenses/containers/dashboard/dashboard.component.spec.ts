import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { NgxsModule } from '@ngxs/store';
import { appStates } from '../../../store';
import {
  MonthlyExpensesChartComponent,
  YourExpensesComponent,
} from '../../components';
import { SharedModule } from '../../../shared/shared.module';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        DashboardComponent,
        YourExpensesComponent,
        MonthlyExpensesChartComponent,
      ],
      imports: [NgxsModule.forRoot(appStates), SharedModule],
    });
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

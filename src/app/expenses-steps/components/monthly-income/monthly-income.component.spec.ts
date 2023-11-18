import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyIncomeComponent } from './monthly-income.component';
import { SharedModule } from "../../../shared/shared.module";

describe('MonthlyIncomeComponent', () => {
  let component: MonthlyIncomeComponent;
  let fixture: ComponentFixture<MonthlyIncomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonthlyIncomeComponent],
      imports: [SharedModule],
    });
    fixture = TestBed.createComponent(MonthlyIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

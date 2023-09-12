import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearlyExpensesComponent } from './yearly-expenses.component';

describe('YearlyExpensesComponent', () => {
  let component: YearlyExpensesComponent;
  let fixture: ComponentFixture<YearlyExpensesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YearlyExpensesComponent]
    });
    fixture = TestBed.createComponent(YearlyExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

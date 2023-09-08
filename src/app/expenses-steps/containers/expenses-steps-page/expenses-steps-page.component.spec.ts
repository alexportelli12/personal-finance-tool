import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensesStepsPageComponent } from './expenses-steps-page.component';

describe('ExpensesStepsPageComponent', () => {
  let component: ExpensesStepsPageComponent;
  let fixture: ComponentFixture<ExpensesStepsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpensesStepsPageComponent]
    });
    fixture = TestBed.createComponent(ExpensesStepsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ExpensesStepsPageComponent } from './expenses-steps-page.component';
import { NgxsModule, Store } from '@ngxs/store';
import {
  UpdateHasGoneThroughSteps,
  UpdateMonthlyExpenses,
  UpdateMonthlyIncome,
  UpdateYearlyExpenses,
  appStates,
} from '../../../store';
import { SharedModule } from '../../../shared/shared.module';
import { MonthlyIncomeComponent } from '../../components';
import { givenExpenses } from '../../../shared/models/generators';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';

@NgModule()
export class FixNavigationTriggeredOutsideAngularZoneNgModule {
  constructor(_router: Router) {}
}

describe('ExpensesStepsPageComponent', () => {
  let component: ExpensesStepsPageComponent;
  let fixture: ComponentFixture<ExpensesStepsPageComponent>;

  let store: Store;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpensesStepsPageComponent, MonthlyIncomeComponent],
      imports: [
        NgxsModule.forRoot(appStates),
        SharedModule,
        RouterTestingModule.withRoutes([
          { path: 'your-expenses', redirectTo: '' },
        ]),
        FixNavigationTriggeredOutsideAngularZoneNgModule,
      ],
      providers: [],
    });
    fixture = TestBed.createComponent(ExpensesStepsPageComponent);
    component = fixture.componentInstance;

    store = TestBed.inject(Store);
    router = TestBed.inject(Router);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('store dispatches', () => {
    beforeEach(() => {
      spyOn(store, 'dispatch');
    });

    it('should call store dispatch with UpdateMonthlyIncome when updateMonthlyIncome is called', () => {
      component.updateMonthlyIncome(1000);

      expect(store.dispatch).toHaveBeenCalledWith(
        new UpdateMonthlyIncome(1000)
      );
    });

    it('should call store dispatch with UpdateYearlyExpenses when updateYearlyExpenses is called', () => {
      const yearlyExpenses = givenExpenses();

      component.updateYearlyExpenses(yearlyExpenses);

      expect(store.dispatch).toHaveBeenCalledWith(
        new UpdateYearlyExpenses(yearlyExpenses)
      );
    });

    it('should call store dispatch with UpdateMonthlyExpenses when updateMonthlyExpenses is called', () => {
      const monthlyExpenses = givenExpenses();

      component.updateMonthlyExpenses(monthlyExpenses);

      expect(store.dispatch).toHaveBeenCalledWith(
        new UpdateMonthlyExpenses(monthlyExpenses)
      );
    });

    it('should call store dispatch with UpdateHasGoneThroughSteps when goToYourExpensesPage is called', () => {
      component.goToYourExpensesPage();

      expect(store.dispatch).toHaveBeenCalledWith(
        new UpdateHasGoneThroughSteps(true)
      );
    });
  });

  it('should emit activeStepIndex + 1 when goToNextStep is called', () => {
    spyOn(component['activeStepIndex$'], 'next');

    component.goToNextStep();

    expect(component['activeStepIndex$'].next).toHaveBeenCalledWith(1);
  });

  it('should emit activeStepIndex - 1 when goToPreviousStep is called', () => {
    component.goToNextStep();
    spyOn(component['activeStepIndex$'], 'next');

    component.goToPreviousStep();

    expect(component['activeStepIndex$'].next).toHaveBeenCalledWith(0);
  });

  it('should call router navigate with /your-expenses when goToYourExpensesPage is called', () => {
    spyOn(router, 'navigate');
    component.goToYourExpensesPage();

    expect(router.navigate).toHaveBeenCalledWith(['/your-expenses']);
  });

  describe('nextButtonDisabled$', () => {
    it('should be true when activeStepIndex is 0 and monthlyIncome is 0', (done) => {
      component['activeStepIndex$'].next(0);
      component.updateMonthlyIncome(0);

      component['nextButtonDisabled$'].subscribe((disabled) => {
        expect(disabled).toBeTrue();
        done();
      });
    });

    it('should be false when activeStepIndex is 0 and monthlyIncome is greater than 0', (done) => {
      component['activeStepIndex$'].next(0);
      component.updateMonthlyIncome(1);

      component['nextButtonDisabled$'].subscribe((disabled) => {
        expect(disabled).toBeFalse();
        done();
      });
    });

    it('should be true when activeStepIndex is 1 and yearlyExpenses is empty', (done) => {
      component['activeStepIndex$'].next(1);
      component.updateYearlyExpenses([]);

      component['nextButtonDisabled$'].subscribe((disabled) => {
        expect(disabled).toBeTrue();
        done();
      });
    });

    it('should be false when activeStepIndex is 1 and yearlyExpenses is not empty', (done) => {
      component['activeStepIndex$'].next(1);
      component.updateYearlyExpenses(givenExpenses());

      component['nextButtonDisabled$'].subscribe((disabled) => {
        expect(disabled).toBeFalse();
        done();
      });
    });

    it('should be true when activeStepIndex is 2 and monthlyExpenses is empty', (done) => {
      component['activeStepIndex$'].next(2);
      component.updateMonthlyExpenses([]);

      component['nextButtonDisabled$'].subscribe((disabled) => {
        expect(disabled).toBeTrue();
        done();
      });
    });

    it('should be false when activeStepIndex is 2 and monthlyExpenses is not empty', (done) => {
      component['activeStepIndex$'].next(2);
      component.updateMonthlyExpenses(givenExpenses());

      component['nextButtonDisabled$'].subscribe((disabled) => {
        expect(disabled).toBeFalse();
        done();
      });
    });

    it('should be false when activeStepIndex is 3', (done) => {
      component['activeStepIndex$'].next(3);

      component['nextButtonDisabled$'].subscribe((disabled) => {
        expect(disabled).toBeFalse();
        done();
      });
    });
  });
});

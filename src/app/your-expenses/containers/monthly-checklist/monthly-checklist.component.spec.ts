import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyChecklistComponent } from './monthly-checklist.component';

describe('MonthlyChecklistComponent', () => {
  let component: MonthlyChecklistComponent;
  let fixture: ComponentFixture<MonthlyChecklistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonthlyChecklistComponent]
    });
    fixture = TestBed.createComponent(MonthlyChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

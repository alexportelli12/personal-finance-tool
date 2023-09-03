import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourExpensesComponent } from './your-expenses.component';

describe('YourExpensesComponent', () => {
  let component: YourExpensesComponent;
  let fixture: ComponentFixture<YourExpensesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YourExpensesComponent]
    });
    fixture = TestBed.createComponent(YourExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

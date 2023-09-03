import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourExpensesPageComponent } from './your-expenses-page.component';

describe('YourExpensesPageComponent', () => {
  let component: YourExpensesPageComponent;
  let fixture: ComponentFixture<YourExpensesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YourExpensesPageComponent]
    });
    fixture = TestBed.createComponent(YourExpensesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

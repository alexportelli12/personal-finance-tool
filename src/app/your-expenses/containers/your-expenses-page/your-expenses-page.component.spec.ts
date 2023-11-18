import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourExpensesPageComponent } from './your-expenses-page.component';
import { SharedModule } from '../../../shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

describe('YourExpensesPageComponent', () => {
  let component: YourExpensesPageComponent;
  let fixture: ComponentFixture<YourExpensesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YourExpensesPageComponent],
      imports: [SharedModule, BrowserAnimationsModule, RouterTestingModule],
    });
    fixture = TestBed.createComponent(YourExpensesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

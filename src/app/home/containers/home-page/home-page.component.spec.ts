import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageComponent } from './home-page.component';
import { NgxsModule, Store } from '@ngxs/store';
import { UpdateHasGoneThroughSteps, appStates } from '../../../store';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  let store: Store;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomePageComponent],
      imports: [NgxsModule.forRoot(appStates), RouterTestingModule],
    });
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;

    store = TestBed.inject(Store);
    router = TestBed.inject(Router);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set loading to false when hasGoneThroughSteps is false', () => {
    store.reset({
      ...store.snapshot(),
      hasGoneThroughSteps: false,
    });

    expect(component['loading']).toBeFalse();
  });
});

import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { HomePageComponent } from './home-page.component';
import { NgxsModule, Store } from '@ngxs/store';
import { UpdateHasGoneThroughSteps, appStates } from '../../../store';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  let store: Store;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomePageComponent],
      imports: [NgxsModule.forRoot(appStates)],
    });
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;

    store = TestBed.inject(Store);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('set loading to false when hasGoneThroughSteps is false', fakeAsync(() => {
    store.dispatch(new UpdateHasGoneThroughSteps(false));

    tick(1000);

    expect(component['loading']).toBe(false);
  }));
});

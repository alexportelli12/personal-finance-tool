import { Injectable } from '@angular/core';
import { BehaviorSubject, distinctUntilChanged, fromEvent, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScreenSizeService {
  public isMobile$ = new BehaviorSubject<boolean>(false);
  public isTablet$ = new BehaviorSubject<boolean>(false);
  public isSmallDesktop$ = new BehaviorSubject<boolean>(false);
  public isDesktop$ = new BehaviorSubject<boolean>(false);
  public isLargeDesktop$ = new BehaviorSubject<boolean>(false);

  constructor() {
    this.initialValues();
    this.initEventSubscription();
  }

  private initialValues() {
    this.isMobile$.next(window.innerWidth <= 480);
    this.isTablet$.next(window.innerWidth > 480 && window.innerWidth <= 768);
    this.isSmallDesktop$.next(
      window.innerWidth > 768 && window.innerWidth <= 1024
    );
    this.isDesktop$.next(window.innerWidth > 1024 && window.innerWidth <= 1200);
    this.isLargeDesktop$.next(window.innerWidth > 1200);
  }

  private initEventSubscription() {
    fromEvent(window, 'resize')
      .pipe(
        tap((event: Event) => {
          const { innerWidth } = event.target as Window;

          this.isMobile$.next(innerWidth <= 480);
          this.isTablet$.next(innerWidth > 480 && innerWidth <= 768);
          this.isSmallDesktop$.next(innerWidth > 768 && innerWidth <= 1024);
          this.isDesktop$.next(innerWidth > 1024 && innerWidth <= 1200);
          this.isLargeDesktop$.next(innerWidth > 1200);
        }),
        distinctUntilChanged()
      )
      .subscribe();
  }
}

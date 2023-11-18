import { TestBed } from '@angular/core/testing';

import { ScreenSizeService } from './screen-size.service';
import { Subscription } from 'rxjs';

describe('ScreenSizeService', () => {
  let service: ScreenSizeService;
  let subscription: Subscription;

  afterEach(() => {
    subscription.unsubscribe();
  });

  describe('mobile device', () => {
    beforeEach(() => {
      spyOnProperty(window, 'innerWidth').and.returnValue(480);

      TestBed.configureTestingModule({});
      service = TestBed.inject(ScreenSizeService);
    });

    it('should return isMobile$ as true if screen width is within mobile size', (done) => {
      subscription = service.isMobile$.subscribe((isMobile) => {
        expect(isMobile).toBeTrue();
        done();
      });
    });

    it('should return isTablet$ as false if screen width is outside tablet size', (done) => {
      subscription = service.isTablet$.subscribe((isTablet) => {
        expect(isTablet).toBeFalse();
        done();
      });
    });

    it('should return isSmallDesktop$ as false if screen width is outside small desktop size', (done) => {
      subscription = service.isSmallDesktop$.subscribe((isSmallDesktop) => {
        expect(isSmallDesktop).toBeFalse();
        done();
      });
    });

    it('should return isDesktop$ as false if screen width is outside desktop size', (done) => {
      subscription = service.isDesktop$.subscribe((isDesktop) => {
        expect(isDesktop).toBeFalse();
        done();
      });
    });

    it('should return isLargeDesktop$ as false if screen width is outside large desktop size', (done) => {
      subscription = service.isLargeDesktop$.subscribe((isLargeDesktop) => {
        expect(isLargeDesktop).toBeFalse();
        done();
      });
    });
  });

  describe('tablet device', () => {
    beforeEach(() => {
      spyOnProperty(window, 'innerWidth').and.returnValue(768);

      TestBed.configureTestingModule({});
      service = TestBed.inject(ScreenSizeService);
    });

    it('should return isMobile$ as false if screen width is outside mobile size', (done) => {
      subscription = service.isMobile$.subscribe((isMobile) => {
        expect(isMobile).toBeFalse();
        done();
      });
    });

    it('should return isTablet$ as true if screen width is within tablet size', (done) => {
      subscription = service.isTablet$.subscribe((isTablet) => {
        expect(isTablet).toBeTrue();
        done();
      });
    });

    it('should return isSmallDesktop$ as false if screen width is outside small desktop size', (done) => {
      subscription = service.isSmallDesktop$.subscribe((isSmallDesktop) => {
        expect(isSmallDesktop).toBeFalse();
        done();
      });
    });

    it('should return isDesktop$ as false if screen width is outside desktop size', (done) => {
      subscription = service.isDesktop$.subscribe((isDesktop) => {
        expect(isDesktop).toBeFalse();
        done();
      });
    });

    it('should return isLargeDesktop$ as false if screen width is outside large desktop size', (done) => {
      subscription = service.isLargeDesktop$.subscribe((isLargeDesktop) => {
        expect(isLargeDesktop).toBeFalse();
        done();
      });
    });
  });

  describe('small desktop device', () => {
    beforeEach(() => {
      spyOnProperty(window, 'innerWidth').and.returnValue(1024);

      TestBed.configureTestingModule({});
      service = TestBed.inject(ScreenSizeService);
    });

    it('should return isMobile$ as false if screen width is outside mobile size', (done) => {
      subscription = service.isMobile$.subscribe((isMobile) => {
        expect(isMobile).toBeFalse();
        done();
      });
    });

    it('should return isTablet$ as false if screen width is outside tablet size', (done) => {
      subscription = service.isTablet$.subscribe((isTablet) => {
        expect(isTablet).toBeFalse();
        done();
      });
    });

    it('should return isSmallDesktop$ as true if screen width is within small desktop size', (done) => {
      subscription = service.isSmallDesktop$.subscribe((isSmallDesktop) => {
        expect(isSmallDesktop).toBeTrue();
        done();
      });
    });

    it('should return isDesktop$ as false if screen width is outside desktop size', (done) => {
      subscription = service.isDesktop$.subscribe((isDesktop) => {
        expect(isDesktop).toBeFalse();
        done();
      });
    });

    it('should return isLargeDesktop$ as false if screen width is outside large desktop size', (done) => {
      subscription = service.isLargeDesktop$.subscribe((isLargeDesktop) => {
        expect(isLargeDesktop).toBeFalse();
        done();
      });
    });
  });

  describe('desktop device', () => {
    beforeEach(() => {
      spyOnProperty(window, 'innerWidth').and.returnValue(1200);

      TestBed.configureTestingModule({});
      service = TestBed.inject(ScreenSizeService);
    });

    it('should return isMobile$ as false if screen width is outside mobile size', (done) => {
      subscription = service.isMobile$.subscribe((isMobile) => {
        expect(isMobile).toBeFalse();
        done();
      });
    });

    it('should return isTablet$ as false if screen width is outside tablet size', (done) => {
      subscription = service.isTablet$.subscribe((isTablet) => {
        expect(isTablet).toBeFalse();
        done();
      });
    });

    it('should return isSmallDesktop$ as false if screen width is outside small desktop size', (done) => {
      subscription = service.isSmallDesktop$.subscribe((isSmallDesktop) => {
        expect(isSmallDesktop).toBeFalse();
        done();
      });
    });

    it('should return isDesktop$ as true if screen width is within desktop size', (done) => {
      subscription = service.isDesktop$.subscribe((isDesktop) => {
        expect(isDesktop).toBeTrue();
        done();
      });
    });

    it('should return isLargeDesktop$ as false if screen width is outside large desktop size', (done) => {
      subscription = service.isLargeDesktop$.subscribe((isLargeDesktop) => {
        expect(isLargeDesktop).toBeFalse();
        done();
      });
    });
  });

  describe('large desktop device', () => {
    beforeEach(() => {
      spyOnProperty(window, 'innerWidth').and.returnValue(1440);

      TestBed.configureTestingModule({});
      service = TestBed.inject(ScreenSizeService);
    });

    it('should return isMobile$ as false if screen width is outside mobile size', (done) => {
      subscription = service.isMobile$.subscribe((isMobile) => {
        expect(isMobile).toBeFalse();
        done();
      });
    });

    it('should return isTablet$ as false if screen width is outside tablet size', (done) => {
      subscription = service.isTablet$.subscribe((isTablet) => {
        expect(isTablet).toBeFalse();
        done();
      });
    });

    it('should return isSmallDesktop$ as false if screen width is outside small desktop size', (done) => {
      subscription = service.isSmallDesktop$.subscribe((isSmallDesktop) => {
        expect(isSmallDesktop).toBeFalse();
        done();
      });
    });

    it('should return isDesktop$ as false if screen width is outside desktop size', (done) => {
      subscription = service.isDesktop$.subscribe((isDesktop) => {
        expect(isDesktop).toBeFalse();
        done();
      });
    });

    it('should return isLargeDesktop$ as true if screen width is within large desktop size', (done) => {
      subscription = service.isLargeDesktop$.subscribe((isLargeDesktop) => {
        expect(isLargeDesktop).toBeTrue();
        done();
      });
    });
  });

  describe('window resize', () => {

    beforeEach(() => {
      TestBed.configureTestingModule({});
      service = TestBed.inject(ScreenSizeService);
    });

    it('should return isMobile$ as true if screen width is within mobile size', (done) => {
      spyOnProperty(window, 'innerWidth').and.returnValue(480);
      window.dispatchEvent(new Event('resize'));

      subscription = service.isMobile$.subscribe((isMobile) => {
        expect(isMobile).toBeTrue();
        done();
      });
    });

    it('should return isTablet$ as true if screen width is within tablet size', (done) => {
      spyOnProperty(window, 'innerWidth').and.returnValue(768);
      window.dispatchEvent(new Event('resize'));

      subscription = service.isTablet$.subscribe((isTablet) => {
        expect(isTablet).toBeTrue();
        done();
      });
    });

    it('should return isSmallDesktop$ as true if screen width is within small desktop size', (done) => {
      spyOnProperty(window, 'innerWidth').and.returnValue(1024);
      window.dispatchEvent(new Event('resize'));

      subscription = service.isSmallDesktop$.subscribe((isSmallDesktop) => {
        expect(isSmallDesktop).toBeTrue();
        done();
      });
    });

    it('should return isDesktop$ as true if screen width is within desktop size', (done) => {
      spyOnProperty(window, 'innerWidth').and.returnValue(1200);
      window.dispatchEvent(new Event('resize'));

      subscription = service.isDesktop$.subscribe((isDesktop) => {
        expect(isDesktop).toBeTrue();
        done();
      });
    });

    it('should return isLargeDesktop$ as true if screen width is within large desktop size', (done) => {
      spyOnProperty(window, 'innerWidth').and.returnValue(1440);
      window.dispatchEvent(new Event('resize'));

      subscription = service.isLargeDesktop$.subscribe((isLargeDesktop) => {
        expect(isLargeDesktop).toBeTrue();
        done();
      });
    });
  });
});

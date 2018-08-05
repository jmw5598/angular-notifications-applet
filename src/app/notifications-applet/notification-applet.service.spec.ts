import { TestBed, inject } from '@angular/core/testing';

import { NotificationAppletService } from './notification-applet.service';

describe('NotificationAppletService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotificationAppletService]
    });
  });

  it('should be created', inject([NotificationAppletService], (service: NotificationAppletService) => {
    expect(service).toBeTruthy();
  }));
});

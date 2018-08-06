import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { NotificationAppletService } from '../notification-applet.service';

@Component({
  selector: 'app-notification-indicator',
  templateUrl: './notification-indicator.component.html',
  styleUrls: ['./notification-indicator.component.css']
})
export class NotificationIndicatorComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  count: number = 0;

  constructor(
    private notificationAppletService: NotificationAppletService
  ) { }

  ngOnInit() {
    this.subscription = this.notificationAppletService.notifications
      .subscribe(
        notifications => this.count = notifications.length
      );
  }

  toggle() {
    this.notificationAppletService.toggle();
  }

  ngOnDestroy() {
    if(this.subscription)
      this.subscription.unsubscribe();
  }

}

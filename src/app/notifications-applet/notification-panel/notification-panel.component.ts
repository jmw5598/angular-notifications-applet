import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { NotificationAppletService } from '../notification-applet.service';
import { Notification } from '../notification.model';
import { NotificationPanelState } from './notification-panel-state.enum';

@Component({
  selector: 'app-notification-panel',
  templateUrl: './notification-panel.component.html',
  styleUrls: ['./notification-panel.component.css']
})
export class NotificationPanelComponent implements OnInit, OnDestroy {

  private notificationsSubscription: Subscription;
  private panelStateSubscription: Subscription;

  notifications: Notification[];
  panelState: NotificationPanelState;

  constructor(
    private notificationAppletService: NotificationAppletService
  ) { }

  ngOnInit() {
    this.notificationsSubscription = this.notificationAppletService.notifications
      .subscribe(notifications =>  this.notifications = notifications);
    this.panelStateSubscription = this.notificationAppletService.panelState
      .subscribe(panelState => this.panelState = panelState);
  }

  ngOnDestroy() {
    if(this.notificationsSubscription)
      this.notificationsSubscription.unsubscribe();
    if(this.panelStateSubscription)
      this.panelStateSubscription.unsubscribe();
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationComponent } from './notification-panel/notification-list/notification/notification.component';
import { NotificationIndicatorComponent } from './notification-indicator/notification-indicator.component';
import { NotificationListComponent } from './notification-panel/notification-list/notification-list.component';
import { NotificationPanelComponent } from './notification-panel/notification-panel.component';

import { NotificationAppletService } from './notification-applet.service';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    NotificationIndicatorComponent,
    NotificationPanelComponent
  ],
  declarations: [
    NotificationComponent,
    NotificationIndicatorComponent,
    NotificationListComponent,
    NotificationPanelComponent
  ],
  providers: [
    NotificationAppletService
  ]
})
export class NotificationsAppletModule { }

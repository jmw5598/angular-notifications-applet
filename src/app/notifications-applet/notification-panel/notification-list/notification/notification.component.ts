import { Component, OnInit, Input } from '@angular/core';

import { Notification } from '../../../notification.model';
import { NotificationAppletService } from '../../../notification-applet.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  @Input()
  notification: Notification;

  constructor(
    private notificationAppletService: NotificationAppletService
  ) { }

  ngOnInit() {
  }

  remove(id: number) {
    this.notificationAppletService.remove(id);
  }

}

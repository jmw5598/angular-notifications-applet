import { Component, OnInit } from '@angular/core';
import { MOCK_NOTIFICATIONS } from './notifications.mock';

import { NotificationAppletService } from './notifications-applet/notification-applet.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private notificationAppletService: NotificationAppletService
  ) {}

  ngOnInit() {
    MOCK_NOTIFICATIONS.forEach((e) => this.notificationAppletService.add(e));
  }

}

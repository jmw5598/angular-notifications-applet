import { Component, OnInit, Input } from '@angular/core';

import { Notification } from '../../notification.model';

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.css']
})
export class NotificationListComponent implements OnInit {

  @Input()
  notifications: Notification[]

  constructor() { }

  ngOnInit() {
  }

}

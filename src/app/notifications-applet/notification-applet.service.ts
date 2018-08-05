import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Notification } from './notification.model';

@Injectable()
export class NotificationAppletService {

  private notificationsData: Notification[] = [];
  private notificationsSource: BehaviorSubject<Notification[]> =
      new BehaviorSubject<Notification[]>(this.notificationsData);

  public notification = this.notificationsSource.asObservable();

  constructor() { }

  toggle() {

  }

  add(notification: Notification) {
    if(notification) {
      this.notificationsData.push(notification);
      this.notificationsSource.next(this.notificationsData);
    }
  }

  remove(id: number) {
    const index = this.notificationsData.indexOf(
        this.notificationsData.find(x => x.id == id));
    if(index != -1) {
      this.notificationsData.splice(index, 1);
      this.notificationsSource.next(this.notificationsData);
    }
  }

}

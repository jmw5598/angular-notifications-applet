import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Notification } from './notification.model';
import { NotificationPanelState } from './notification-panel/notification-panel-state.enum';

@Injectable()
export class NotificationAppletService {

  private notificationsData: Notification[] = [];
  private panelStateData: NotificationPanelState = NotificationPanelState.CLOSE;

  private notificationsSource: BehaviorSubject<Notification[]> =
      new BehaviorSubject<Notification[]>(this.notificationsData);
  private panelStateSource: BehaviorSubject<NotificationPanelState> =
      new BehaviorSubject<NotificationPanelState>(this.panelStateData);

  public notifications = this.notificationsSource.asObservable();
  public panelState = this.panelStateSource.asObservable();

  constructor() { }

  toggle() {
    if(this.panelStateData === NotificationPanelState.OPEN) {
      this.panelStateData = NotificationPanelState.CLOSE;
      this.panelStateSource.next(this.panelStateData);
    } else {
      this.panelStateData = NotificationPanelState.OPEN;
      this.panelStateSource.next(this.panelStateData);
    }
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

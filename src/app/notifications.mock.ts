import { Notification } from './notifications-applet/notification.model';
import { NotificationLevel } from './notifications-applet/notification-level.enum';

export const MOCK_NOTIFICATIONS: Notification[] = [
  new Notification(1, 'Subject 1', 'Body 1'),
  new Notification(2, 'Subject 2', 'Body 2', NotificationLevel.SUCCESS),
  new Notification(3, 'Subject 3', 'Body 3', NotificationLevel.INFO),
  new Notification(4, 'Subject 4', 'Body 4', NotificationLevel.WARNING),
  new Notification(5, 'Subject 5', 'Body 5', NotificationLevel.DANGER)
];

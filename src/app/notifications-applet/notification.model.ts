import { NotificationLevel } from './notification-level.enum';

export class Notification {

  constructor(
    public id: number,
    public subject: string,
    public body: string,
    public level: NotificationLevel
  ) {}

}

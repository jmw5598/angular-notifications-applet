import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Notification } from '../notifications-applet/notification.model';
import { NotificationLevel } from '../notifications-applet/notification-level.enum';
import { NotificationAppletService } from '../notifications-applet/notification-applet.service';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.css']
})
export class TestFormComponent implements OnInit {

  NotificationLevel = NotificationLevel //needed for template
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private notificationAppletService: NotificationAppletService
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      subject: ['', [Validators.required]],
      body: ['', [Validators.required]],
      level: []
    });
  }

  submit(notification: Notification) {
    notification.id = this.generateId();
    this.notificationAppletService.add(notification);
  }

  private generateId() {
    return Math.floor(Math.random() * 1000) + 1;
  }

}

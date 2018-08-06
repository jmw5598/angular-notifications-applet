import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { NotificationsAppletModule } from './notifications-applet/notifications-applet.module';

import { AppComponent } from './app.component';
import { TestFormComponent } from './test-form/test-form.component';


@NgModule({
  declarations: [
    AppComponent,
    TestFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NotificationsAppletModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

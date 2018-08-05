import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NotificationsAppletModule } from './notifications-applet/notifications-applet.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NotificationsAppletModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

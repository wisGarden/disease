import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NextPageModule } from '../pages/next/next.module';
import { NextPage } from '../pages/next/next';
import { NextPage2Page } from '../pages/next-page2/next-page2';
import { NextPage3Page } from '../pages/next-page3/next-page3';
import { NextPage4Page } from '../pages/next-page4/next-page4';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NextPage,
    NextPage2Page,
    NextPage3Page,
    NextPage4Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NextPage,
    NextPage2Page,
    NextPage3Page,
    NextPage4Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

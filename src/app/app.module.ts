// Angular and Ionic
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, LOCALE_ID } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { registerLocaleData } from '@angular/common';
import pt from '@angular/common/locales/pt';

// My App
import { MyApp } from './app.component';

// My providers
import { AuthProvider } from '../providers/firebase/auth/auth';
import { FirestoreProvider } from '../providers/firebase/firestore/firestore';

registerLocaleData(pt);

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: LOCALE_ID, useValue: 'pt' },
    AuthProvider,
    FirestoreProvider,
    SplashScreen,
    StatusBar
  ]
})
export class AppModule {}

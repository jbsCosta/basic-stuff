import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { environment } from '../environments/environment';
import firebase from 'firebase';
import 'firebase/firestore';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    firebase.initializeApp(environment.firebase);
    const firestore = firebase.firestore();
    const settings = {
      timestampsInSnapshots: true,
    };
    firestore.settings(settings);
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}

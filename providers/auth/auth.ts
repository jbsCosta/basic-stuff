import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import firebase from 'firebase';
import { BasicAuth } from './basic-auth';
import { FirestoreProvider } from '../firestore/firestore';
import { SessionStoreProvider } from '../../session-store/session-store';

@Injectable()
export class AuthProvider implements BasicAuth {
  private currentUser: firebase.User;

  constructor(
    public firestoreProvider: FirestoreProvider,
    public sessionStorageProvider: SessionStoreProvider
  ) {
    firebase.auth().onAuthStateChanged((user: firebase.User) => {
      this.currentUser = user;
      if (this.currentUser) {
        this.storageUserData(user);
      } else {
        this.sessionStorageProvider.removeItem('unity-e-currentUser-token');
      }
    });
  }

  storageUserData(user: firebase.User) {
    this.currentUser.getIdToken().then(token => {
      this.sessionStorageProvider.setItem('unity-e-currentUser-token', token);
    });
  }

  getAuth() {
    return firebase.auth();
  }

  isAuthenticated() {
    return this.currentUser != null;
  }

  getUserId() {
    return this.currentUser.uid;
  }

  getUserName() {
    return this.currentUser.displayName;
  }

  getUserEmail() {
    return this.currentUser.email;
  }

  signInWithEmailAndPassword(email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  signUpWithEmailAndPassword(email, password) {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  }

  updateUserProfile(profile: any) {
    return this.currentUser.updateProfile(profile);
  }

  resetPassword(email: string) {
    return firebase.auth().sendPasswordResetEmail(email);
  }

  signOut(): void {
    firebase.auth().signOut();
  }
}

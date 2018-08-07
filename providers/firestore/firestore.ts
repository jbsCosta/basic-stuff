import { Injectable } from '@angular/core';
import { BasicFirestore } from './basic-firestore';
import firebase from 'firebase';
import 'firebase/firestore';

@Injectable()
export class FirestoreProvider implements BasicFirestore {

  db = firebase.firestore();

  constructor() {}

  // TODO: Error handling

  public getCollection(name: string) {
    let collectionsRef = this.db.collection(name);
    return collectionsRef.get();
  }

  public watchCollection(name: string) {
    let collectionsRef = this.db.collection(name);
    return collectionsRef;
  }

  public addToCollection(name: string, item: any) {
    let collectionsRef = this.db.collection(name);
    return collectionsRef.add(item);
  }

  public getDocument(name: string) {
    let documentRef = this.db.doc(name);
    return documentRef.get();
  }

  public watchDocument(name: string) {
    let documentRef = this.db.doc(name);
    return documentRef;
  }

  public addDocument(name: string, item: any) {
    let documentRef = this.db.doc(name);
    return documentRef.set(item);
  }

  public updateDocument(name: string, item: any) {
    let documentRef = this.db.doc(name);
    return documentRef.update(item);
  }

  public removeDocument(name: string) {
    let documentRef = this.db.doc(name);
    return documentRef.delete();
  }

  public unsubscribe(subscriptions: object) {
    for (const sub in subscriptions) {
      if (subscriptions.hasOwnProperty(sub)) {
        if (typeof subscriptions[sub]['unsubscribe'] == 'function') return subscriptions[sub].unsubscribe();
        else if (typeof subscriptions[sub] == 'function') return subscriptions[sub]();
        else return;
      }
    }
  }

}

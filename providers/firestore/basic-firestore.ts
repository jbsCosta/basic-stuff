/**
 * Basic interface to providers that will interact Firebase Firestore.
 */
export interface BasicFirestore {

  getCollection(name: string);

  watchCollection(name: string);

  addToCollection(name: string, item: any);

  getDocument(name: string);

  watchDocument(name: string);

  addDocument(name: string, item: any);

  updateDocument(name: string, item: any);

  removeDocument(name: string);

  unsubscribe(subscriptions: object);

}
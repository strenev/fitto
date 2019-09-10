import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Card {
  id?: string;
  holderName: string;
  cardNumber: string;
  expirationDate: string;
  cvv: string;
  uid: string;
}

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  private cardsCollection: AngularFirestoreCollection<Card>;
  private db: AngularFirestore;
  private cards: Observable<Card[]>;
  private user: any;

  constructor(db: AngularFirestore) {
    this.cardsCollection = db.collection<Card>('cards');
    this.db = db;
    this.cards = this.cardsCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  getCards() {
    return this.cards;
  }

  getCardByUser(uid) {
    return this.db.collection<Card>('cards', ref => ref.where('uid', '==', uid)).valueChanges();
  }

  updateCard(card: Card, id: string) {
    return this.cardsCollection.doc(id).update(card);
  }

  addCard(card: Card) {
    return this.cardsCollection.add(card);
  }

  removeCardById(id) {
    return this.cardsCollection.doc(id).delete();
  }

}

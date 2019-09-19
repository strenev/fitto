import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Offer {
    id?: string;
    brand: string;
    photoUrl: string;
    promoCode: string;
}

@Injectable({
    providedIn: 'root'
})
export class OffersService {
    private offersCollection: AngularFirestoreCollection<Offer>;
    private db: AngularFirestore;
    private offers: Observable<Offer[]>;
    private user: any;

    constructor(db: AngularFirestore) {
        this.offersCollection = db.collection<Offer>('offers');
        this.db = db;
        this.offers = this.offersCollection.snapshotChanges().pipe(
            map(actions => {
                return actions.map(a => {
                    const data = a.payload.doc.data();
                    const id = a.payload.doc.id;
                    return { id, ...data };
                });
            })
        );
    }

    getOffers() {
        return this.offers;
    }

    updateOffer(offer: Offer, id: string) {
        return this.offersCollection.doc(id).update(offer);
    }

    addOffer(offer: Offer) {
        return this.offersCollection.add(offer);
    }

    removeOfferById(id) {
        return this.offersCollection.doc(id).delete();
    }

}

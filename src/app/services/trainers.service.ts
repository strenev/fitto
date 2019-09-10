import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Trainer {
    id?: string;
    name: string;
    age: number;
    activity: number;
    rating: number;
    practiceLenght: number;
    practicePrice: number;
    imageUrl: string;
    experience: number;
    address: string;
    phoneNumber: string;
    info: string;
    instagram: string;
}

@Injectable({
    providedIn: 'root'
})
export class TrainersService {
    private trainersCollection: AngularFirestoreCollection<Trainer>;
    private db: AngularFirestore;
    private trainers: Observable<Trainer[]>;

    constructor(db: AngularFirestore) {
        this.trainersCollection = db.collection<Trainer>('trainers');
        this.db = db;
        this.trainers = this.trainersCollection.snapshotChanges().pipe(
            map(actions => {
                return actions.map(a => {
                    const data = a.payload.doc.data();
                    const id = a.payload.doc.id;
                    return { id, ...data };
                });
            })
        );
    }

    getTrainers() {
        return this.trainers;
    }

    getTrainer(id) {
        return this.db.collection<Trainer>('trainers', ref => ref.where('id', '==', id)).valueChanges();
    }

    getTrainersByActivity(activity) {
        return this.db.collection<Trainer>('trainers', ref => ref.where('activity', '==', activity)).valueChanges();
    }

    updateTrainer(trainer: Trainer, id: string) {
        return this.trainersCollection.doc(id).update(trainer);
    }

    addTrainer(trainer: Trainer) {
        return this.trainersCollection.add(trainer);
    }

    removeTrainer(id) {
        return this.trainersCollection.doc(id).delete();
    }

}

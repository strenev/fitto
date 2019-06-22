import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Trainer } from './trainers.service';

export interface Booking {
  id?: string;
  bookingInfo: string;
  bookingDate: Date;
  bookingTime: Date;
  trainerName: string;
  trainerImage: string;
  activity: number;
}
 
@Injectable({
  providedIn: 'root'
})
export class BookingsService {
  private bookingsCollection: AngularFirestoreCollection<Booking>;
  private db: AngularFirestore;
  private bookings: Observable<Booking[]>;
 
  constructor(db: AngularFirestore) {
    this.bookingsCollection = db.collection<Booking>('bookings');
    this.db = db;
    this.bookings = this.bookingsCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );

  }

  getBookings(){
    return this.bookings;
  }

  getBookingByTrainerId(trainerId) {
    return this.bookingsCollection.doc<Booking>(trainerId).valueChanges();
  }

  updateBooking(booking: Booking, id: string) {
    return this.bookingsCollection.doc(id).update(booking);
  }

  addBooking(booking: Booking) {
    return this.bookingsCollection.add(booking);
  }

  removeBookingbyId(id) {
    return this.bookingsCollection.doc(id).delete();
  }

}
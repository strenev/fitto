import { Component, OnInit } from '@angular/core';
import { Booking, BookingsService } from '../services/bookings.service';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent implements OnInit {

  public bookings: Observable<Booking[]>;

  constructor(
    private bookingsService: BookingsService) {
  }

  ngOnInit() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.bookings = this.bookingsService.getBookingsByUser(user.uid);
      }
    });
  }

}

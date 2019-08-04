import { Component, OnInit } from '@angular/core';
import { Booking, BookingsService } from '../services/bookings.service';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent implements OnInit {

  public bookings: Observable<Booking[]>;

  constructor(
    private bookingsService: BookingsService,
    private authService: AuthenticationService) { }

  ngOnInit() {
    this.bookings = this.bookingsService.getBookings();
  }

}

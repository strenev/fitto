import { Component, OnInit } from '@angular/core';
import { Booking, BookingsService } from '../services/bookings.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent implements OnInit {

  public bookings: Booking[];

  constructor(private bookingsService: BookingsService) { }

  ngOnInit() {

    this.bookingsService.getBookings().subscribe(res => {
      this.bookings = res;
    });

  }

}

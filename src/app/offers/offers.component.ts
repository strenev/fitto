import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Offer, OffersService } from '../services/offers.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  offers: Observable<Offer[]>;

  constructor(private offersService: OffersService) { }

  ngOnInit() {
    this.offers = this.offersService.getOffers();
  }

}

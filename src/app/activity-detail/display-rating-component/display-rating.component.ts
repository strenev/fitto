import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'display-rating',
  templateUrl: './display-rating.component.html',
  styleUrls: ['./display-rating.component.scss']
})
export class DisplayRatingComponent implements OnInit {

  @Input() rating: number;

  constructor() { }

  ngOnInit() {
  }

  iterator(n: number): any[] {
    return new Array(n);
  }

}

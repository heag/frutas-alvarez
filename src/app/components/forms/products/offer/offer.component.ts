import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit {

  flag: boolean;

  constructor() {
    this.flag = false
  }

  ngOnInit() {
  }

}

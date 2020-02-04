import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footer-app',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  currentYear: number;

  constructor() { }

  ngOnInit() {
    this.initialSetup()
  }

  private initialSetup(){
    let date = new Date();
    this.currentYear = date.getFullYear();
  }
}

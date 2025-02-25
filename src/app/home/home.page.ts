import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  public n: number; //Public: To Show in the HTML page
  public showNumber: string;
  
  constructor() {
    this.n = 0;
    this.showNumber = '00';
  }

}

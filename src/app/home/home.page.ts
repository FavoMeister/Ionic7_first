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

  up(){
    this.n++;
    this.formatShowNumber();
  }

  down(){
    this.n--;
    this.formatShowNumber()
  }

  formatShowNumber(){
    if(this.n < 10){
      this.showNumber = '0' + this.n;
    } else {
      this.showNumber = '' + this.n;
    }
  }
}

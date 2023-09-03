import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = "Angular Project";
  username: string = "";
  isDisabled: boolean = true;

  constructor(){
  }

  buttonClick(event: any): void {
    this.username = "";
  }
}

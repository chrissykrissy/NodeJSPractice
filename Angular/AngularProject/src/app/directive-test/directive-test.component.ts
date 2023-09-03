import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-test',
  templateUrl: './directive-test.component.html',
  styleUrls: ['./directive-test.component.css']
})
export class DirectiveTestComponent {
  clicked: boolean = true;
  clickTime: Array<number> = [];
  clickValue: number = 1;

  buttonClick(event: any): void{
    this.clicked = false;
    this.clickTime.push(this.clickValue);
    this.clickValue += 1;
    console.log(event);
  }

  resetButton(event: any): void{
    this.clickTime=[];
    this.clicked = true;
  }
}

import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
  <h3>Counter {{ counter }}</h3>

<button (click)="increaseBy(20)">+1</button>
<button (click)="resetCounter()">Reset</button>
<button (click)="decreaseBy(20)">-1</button>


  ` ,
})
export class CounterComponent {
  counter:number = 0;

  increaseBy(value: number):void {
    this.counter += value;
  }

  decreaseBy(value: number):void {
    this.counter -= value;
  }
  resetCounter():void {
    this.counter = 0;
  }

}

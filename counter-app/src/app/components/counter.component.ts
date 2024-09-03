import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
})
export class CounterComponent {
  title: string = 'Counter usando redux';
  counter: number;

  constructor(){
    this.counter = 0;
  }

  increment(): void{
    this.counter++;
    console.log('incrementando...');
  }

  decrement(): void{
    this.counter--;
    console.log('decrementado...');
  }

  reset(): void{
    this.counter = 0;
    console.log('reset el contador...');
  }

}

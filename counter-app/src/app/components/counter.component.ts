import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../store/items.action';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
})
export class CounterComponent {
  title: string = 'Counter usando redux';
  counter: number;

  constructor(private store: Store<{counter: number}>){
    this.counter = 0;
    this.store.select('counter').subscribe(counter => {
      //aqui estamos asignando en el contexto del subscribe
      //lo estamos asignando cuando cambie el counter
      this.counter = counter;
    })
    
  }

  increment(): void{
    //this.counter++;
    //es una accion en forma de funcion
    this.store.dispatch(increment());
    console.log('incrementando...');
  }

  decrement(): void{
    //this.counter--;
    this.store.dispatch(decrement());
    console.log('decrementado...');
  }

  reset(): void{
    //this.counter = 0;
    this.store.dispatch(reset());
    console.log('reset el contador...');
  }

}

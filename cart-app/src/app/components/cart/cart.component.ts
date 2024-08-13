import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CartItem } from '../../../models/cartItem';

@Component({
  selector: 'cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnChanges{
  
  @Input() items: CartItem[] = [];
  total = 0;
  @Output() idProductEventEmitter = new EventEmitter();

  ngOnChanges(changes: SimpleChanges): void {
    let itemChanges = changes['items'];
    this.calculateTotal();
    this.saveSession();
  }
  //la funcion reduce recibe ((variable de storage, variable a modificar) => sumatoria, valor inicial)
  calculateTotal(): void{
    this.total = this.items.reduce((accumulator, item) => accumulator + item.quantity * item.product.price, 0);
  }
  saveSession(): void{
    //con stringify se guarda todo el arreglo items como un string con la estructura de JSON
    sessionStorage.setItem('cart',JSON.stringify(this.items));
  }

  onDeleteCart(id: number){
    this.idProductEventEmitter.emit(id);
  }
}

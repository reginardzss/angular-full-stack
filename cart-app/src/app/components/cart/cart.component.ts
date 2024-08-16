import { Component, EventEmitter } from '@angular/core';
import { CartItem } from '../../../models/cartItem';
import { Router } from '@angular/router';
import { SharingDataService } from '../../services/sharing-data.service';

@Component({
  selector: 'cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
})
export class CartComponent {
  
  items: CartItem[] = [];

  total = 0;

  constructor(private sharingDataService: SharingDataService, private router:Router){
    //le asignamos los items de los estados de las rutas
    //Extras con ? en caso de que sea null, state es con el objeto que le pasamos de la plantilla
    this.items = this.router.getCurrentNavigation()?.extras.state!['items'];
    this.total = this.router.getCurrentNavigation()?.extras.state!['total'];

  }
  
  onDeleteCart(id: number) {
    //lo que hace es llamar el metodo get
    this.sharingDataService.idProductEventEmitter.emit(id);
  }

}

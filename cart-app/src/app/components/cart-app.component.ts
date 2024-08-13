import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../../models/product';
import { CatalogComponent } from './catalog/catalog.component';
import { CartComponent } from './cart/cart.component';
import { CartItem } from '../../models/cartItem';

@Component({
  selector: 'cart-app',
  standalone: true,
  imports: [CatalogComponent, CartComponent],
  templateUrl: './cart-app.component.html',
})
export class CartAppComponent implements OnInit{
  products: Product[] = [];
  items: CartItem[] = [];
  total: number = 0;

  constructor(private service: ProductService){}
  
  ngOnInit(): void {
    this.products = this.service.findAll();
    this.calculateTotal();
  }

  onAddCart(product: Product){
    //Se busca si el item ya existe dentro del arreglo de items
    //Con la funcion find le indicamos que del item compare el id del producto que agregué al carrito contra los id's de los productos que ya estan en el carrito, si lo encuentra devuelve true, de lo contrario false
    const hasItem = this.items.find(item => {return item.product.id === product.id});
    
    if(hasItem){
      //map regresa una nueva instancia de los mismos items o del arreglo pero modificado
      this.items = this.items.map(item =>{
        //aqui volvemos a comparar los id's
        if(item.product.id === product.id){
          //regresa el item con la cantidad modificada
          return {
            ... item, quantity: item.quantity + 1
          }
        }
        //sino solo regresa el item igual
        return item;
      })
    }else {
      //si no existe el item dentro del carrito entonces lo agregamos con la cantidad de 1
      this.items = [... this.items, {product: {... product}, quantity:1}];
    }
    this.calculateTotal();
  }

  //la funcion recibe el id, luego lo filtra, si el id no es igual pasa, sino modifica la lista y no pasa
  onDeleteCart(id:number): void{
    this.items = this.items.filter(item => item.product.id !== id);
    this.calculateTotal();
  }

  //la funcion reduce recibe ((variable de storage, variable a modificar) => sumatoria, valor inicial)
  calculateTotal(): void{
    this.total = this.items.reduce((accumulator, item) => accumulator + item.quantity * item.product.price, 0);
  }
}

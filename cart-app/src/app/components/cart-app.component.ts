import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { CatalogComponent } from './catalog/catalog.component';
import { CartItem } from '../../models/cartItem';
import { NavbarComponent } from './navbar/navbar.component';
import { Router, RouterOutlet } from '@angular/router';
import { SharingDataService } from '../services/sharing-data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'cart-app',
  standalone: true,
  imports: [CatalogComponent, NavbarComponent, RouterOutlet],
  templateUrl: './cart-app.component.html',
})
export class CartAppComponent implements OnInit{
  items: CartItem[] = [];
  total: number = 0;

  constructor(
    private router: Router,
    private sharingDataService: SharingDataService, 
    private service: ProductService){}
  
  ngOnInit(): void {
    //si existe items obtenemos el JSON con la estructura JSON del tipo String de la sesion y lo convertimos a un arreglo de objeto del tipo items, sino un arreglo vacio
    this.items = JSON.parse(sessionStorage.getItem('cart') || '[]') ;
    this.calculateTotal();
    this.onDeleteCart();
    this.onAddCart();
  }

  onAddCart(): void{
    this.sharingDataService.productEventEmitter.subscribe(product => {
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
      this.saveSession();
      //muy parecido al routerlink del navbar
      this.router.navigate(['/cart'], {
        //nombre de la llave y el valor
        state:{items: this.items, total: this.total}
      })
      Swal.fire({
        title: "Shopping Cart",
        text: "Nuevo producto agregado al carro",
        icon: "success"
      });
    });
  }

  //la funcion recibe el id, luego lo filtra, si el id no es igual pasa, sino modifica la lista y no pasa
  onDeleteCart(): void{
    this.sharingDataService.idProductEventEmitter.subscribe(id =>{
      Swal.fire({
        title: "¿Estás seguro/a que desea eliminar?",
        text: "Cuidado el item se eliminará del carro de compras",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          this.items = this.items.filter(item => item.product.id !== id);
          this.calculateTotal();
          this.saveSession();
          this.router.navigateByUrl('/',{skipLocationChange: true}).then(() => {
            this.router.navigate(['/cart'], {
              //nombre de la llave y el valor
              state:{items: this.items, total: this.total}
            })
          })
          
          Swal.fire({
            title: "¡Eliminado!",
            text: "Se ha eliminado el item del carrito de compras",
            icon: "success"
          });
        }
      });
    })
  }

//la funcion reduce recibe ((variable de storage, variable a modificar) => sumatoria, valor inicial)
  calculateTotal(): void{
    this.total = this.items.reduce((accumulator, item) => accumulator + item.quantity * item.product.price, 0);
  }
  saveSession(): void{
    //con stringify se guarda todo el arreglo items como un string con la estructura de JSON
    sessionStorage.setItem('cart',JSON.stringify(this.items));
  }
}

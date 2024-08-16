import { Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';

export const routes: Routes = [
    //no poner slash / solo el nombre
    { path: 'cart', component: CartComponent }
];

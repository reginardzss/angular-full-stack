import { Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { CatalogComponent } from './components/catalog/catalog.component';

export const routes: Routes = [
    //no poner slash / solo el nombre
    { path: 'cart', component: CartComponent },
    { path: 'catalog', component: CatalogComponent },
    //si no colocamos nada en el path lo redirige a catalog, solamente cuando sea vacio va a redirigir
    { path: '', redirectTo: '/catalog', pathMatch: 'full' }
];

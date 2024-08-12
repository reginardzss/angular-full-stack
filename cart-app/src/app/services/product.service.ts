import { Injectable } from '@angular/core';
import { Product } from '../../models/product';
import { products } from '../data/product.data';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  //Metodo que devuelve una lista de productos
  findAll(): Product[]{
    //Regresamos la lista de productos del documento de datos
    return products;
  }
}

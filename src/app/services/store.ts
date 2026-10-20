import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Productos } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class Store {

  private myShoppingCart: Productos[] = [];
  private myCart = new BehaviorSubject<Productos[]>([]);

  myCart$ = this.myCart.asObservable();

  total = 0;

  addProduct(product: Productos) {
    this.myShoppingCart.push(product);
    this.myCart.next(this.myShoppingCart);
  }

  getShoppingCart() {
    return this.myShoppingCart;
  }

  getTotal() {
    return this.myShoppingCart.reduce((sum, item) => sum + item.price, 0);
  }

}

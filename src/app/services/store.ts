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

  removeProduct(productId: string) {
    const currentProducts = this.myCart.getValue();

    // Encontramos el índice del primer producto que coincida con el ID
    const index = currentProducts.findIndex(p => p.id === productId);

    if (index !== -1) {
      // Creamos una copia del arreglo original
      const updatedProducts = [...currentProducts];
      // Eliminamos únicamente ese elemento
      updatedProducts.splice(index, 1);

      // Emitimos la nueva lista actualizada al BehaviorSubject
      this.myCart.next(updatedProducts);
    }
  }

}

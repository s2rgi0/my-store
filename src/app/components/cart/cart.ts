import { Component, OnInit, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Store } from '../../services/store';
import { Productos } from '../../models/product.model';

// 1. Creamos una interfaz local para manejar la cantidad
interface CartItemWithQuantity {
  product: Productos;
  quantity: number;
  total: number;
}

@Component({
  selector: 'app-cart',
  imports: [CurrencyPipe],
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class Cart implements OnInit {

  //cartProducts: Productos[] = [];
  groupedCartProducts: CartItemWithQuantity[] = [];

  cartTotal: number = 0;

  private storeService = inject(Store);

  ngOnInit(): void {

    this.storeService.myCart$.subscribe(products => {
      //this.cartProducts = products;
      this.groupedCartProducts = this.groupCartItems(products);
    })
  }


  private groupCartItems(products: Productos[]): CartItemWithQuantity[] {
    const map = new Map<string, CartItemWithQuantity>();

    let totalAcumulado = 0;

    products.forEach(product => {
      if (map.has(product.id)) {
        const item = map.get(product.id)!;
        item.quantity += 1;
        item.total = item.quantity * product.price;
      } else {
        map.set(product.id, {
          product: product,
          quantity: 1,
          total: product.price
        });
      }

      totalAcumulado += product.price;
    });
    this.cartTotal = totalAcumulado;

    return Array.from(map.values());
  }

  onRemoveItem(productId: string) {
    this.storeService.removeProduct(productId);
  }


}

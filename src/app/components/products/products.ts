import { Component, inject, OnInit } from '@angular/core';
import { Product } from '../product/product';
import { Productos } from '../../models/product.model';
import { Store } from '../../services/store';
import { Productsvrc } from '../../services/productsvrc';
import { DatePipe, UpperCasePipe } from '@angular/common';
import { TimeAgoPipe } from '../../pipes/time-ago-pipe';


@Component({
  selector: 'app-products',
  imports: [Product, DatePipe, UpperCasePipe, TimeAgoPipe],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products implements OnInit {

  private storeService = inject(Store);
  private productService = inject(Productsvrc);

  myShoppingCart: Productos[] = [];
  total = 0;
  products: Productos[] = [];
  today = new Date();
  date = new Date(2021, 10, 23);

  constructor() {
    //this.myShoppingCart = this.storeService.getShoppingCart();

  }
  ngOnInit(): void {
    this.productService.getAllProducts()
      .subscribe(data => {
        console.log(data);
        this.products = data;
      })
  }



  onAddToShoppingCart(product: Productos) {
    console.log(product);
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
  }

}

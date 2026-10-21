import { Component, input, Output, EventEmitter } from '@angular/core';
import { Productos } from '../../models/product.model';
import { Img } from '../img/img';
import { CurrencyPipe } from '@angular/common';


@Component({
  selector: 'app-product',
  imports: [Img, CurrencyPipe],
  templateUrl: './product.html',
  styleUrl: './product.scss',
})
export class Product {

  /*@Input() product: Products = {
      id: '',
      name: '',
      image: '',
      price: 0
    }
  */
  product = input<Productos>();

  @Output() addedProduct = new EventEmitter<Productos>();

  onAddToCart() {
    this.addedProduct.emit(this.product());
  }

}

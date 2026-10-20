import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Productos } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class Productsvrc {

  private http = inject(HttpClient);

  getAllProducts() {
    return this.http.get<Productos[]>('https://fakestoreapi.com/products')
  }

}

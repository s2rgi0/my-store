import { Routes } from '@angular/router';
import { Products } from './components/products/products';
import { Cart } from './components/cart/cart';

export const routes: Routes = [
    { path: '', redirectTo: 'products', pathMatch: 'full' },
    { path: 'products', component: Products },
    { path: 'cart', component: Cart }
];

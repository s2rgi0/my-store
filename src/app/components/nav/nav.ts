import { Component, OnInit } from '@angular/core';
import { Store } from '../../services/store';

@Component({
  selector: 'app-nav',
  imports: [],
  templateUrl: './nav.html',
  styleUrl: './nav.scss',
})
export class Nav implements OnInit {

  activeMenu = false;
  counter = 0;

  constructor(private storeService: Store) {

  }


  ngOnInit(): void {
    this.storeService.myCart$.subscribe(products => {
      this.counter = products.length;
    })
  }

  toggleMenu() {
    this.activeMenu = !this.activeMenu;
  }

}

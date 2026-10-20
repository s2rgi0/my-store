import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Products } from './components/products/products';
import { Nav } from './components/nav/nav';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Products, FormsModule, Nav],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = 'my-store';
  imgParent = 'https://i.pravatar.cc/300';
  showImg = true;




  onLoaded(img: string) {
    console.log('load padre', img);
  }

  toggleImg() {
    this.showImg = !this.showImg
  }

}

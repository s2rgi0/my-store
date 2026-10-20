import { Component, Input, Output, EventEmitter, OnInit, signal, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-img',
  imports: [],
  templateUrl: './img.html',
  styleUrl: './img.scss',
})

export class Img implements OnInit, OnDestroy{
  
/*   counter = signal(0);
  counterFn: number | undefined; */

  ngOnDestroy(): void {
    console.log('ng OnDestoryu')  
   // window.clearInterval(this.counterFn)
  }

 

  ngOnInit(): void {
   /*  console.log('ngOnInit')
    this.counterFn = window.setInterval(() => {
      this.counter.update(valorActual => valorActual + 1);
      console.log('counter');
    }, 1000) */
  }


  

  @Input()  img: string | undefined = '';
  @Output() loaded = new EventEmitter <string>();
  imageDefault = './assets/images/placeholder.png';

  imgError(){
    this.img = this.imageDefault;
  }

  imgLoaded(){
    console.log('hijo loaaded');
    this.loaded.emit(this.img);
  }

}

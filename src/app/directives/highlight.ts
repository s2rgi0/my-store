import { Directive, ElementRef, inject, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class Highlight {

  private element = inject(ElementRef);

  @HostListener('mouseenter') onMouseEnter() {
    this.element.nativeElement.style.backgroundColor = 'red';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.element.nativeElement.style.backgroundColor = '';
  }


  constructor() {
    //logic using this element
    //this.element.nativeElement.style.backgroundColor = 'red';
  }
}

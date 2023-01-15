import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective {
  @Input() Highlight : string = 'yellow';
  constructor(private el:ElementRef ) {this.changeColorProduct(el);}

  // changeColorProduct
  private changeColorProduct(el : ElementRef){
      el.nativeElement.style.color = this.Highlight
  }

}


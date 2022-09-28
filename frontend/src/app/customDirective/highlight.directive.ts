import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  host:{
    '(click)':'applyLogic()'
  }
})
export class HighlightDirective {

  @Input() number=0;
  @Input() divisibleBy=1;

  constructor(private el:ElementRef) { }

  applyLogic(){
    if(this.number% this.divisibleBy==0){
      if (this.el) {
        this.el.nativeElement.style.color='green';
      }
    }
    else{
      if (this.el) {
        this.el.nativeElement.style.color='red';
      }
    }

  }

}

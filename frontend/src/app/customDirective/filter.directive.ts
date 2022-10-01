import { Directive, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2 } from '@angular/core';
import { Filter } from '../util/filter';
@Directive({
  selector: '[appFilter]'
})
export class FilterDirective {

  constructor(private renderer: Renderer2, private targetElement: ElementRef) { }

  @Input() appFilter: Array<any>;
  @Input() filterHead: Array<any>;
  @Output() filteredData:EventEmitter<any>=new EventEmitter();

  @HostListener("keyup")
  onKeyupFilter(){
    const filter = new Filter();
    const elem = this.targetElement.nativeElement;

    let filterBy = elem.value.toLocaleLowerCase();

    let result= filter.doFilter(this.appFilter,filterBy,this.filterHead)
    this.filteredData.emit(result);
  }

}

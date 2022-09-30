import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
import { Filter } from '../util/filter';
@Directive({
  selector: '[appFilter]'
})
export class FilterDirective {

  constructor(private renderer: Renderer2, private targetElement: ElementRef) { }

  @Input() appFilter: Array<any>;

  @HostListener("keyup")
  filterData(){
    const filter = new Filter();
    const elem = this.targetElement.nativeElement;
    const dataList = elem.getAttribute("data-List");

    const filterBy = elem.getAttribute("filter-by");

    const filterHead = elem.getAttribute("filter-head");

    this.appFilter.filter(filter.doFilter(dataList,filterBy,filterHead));
  }

}

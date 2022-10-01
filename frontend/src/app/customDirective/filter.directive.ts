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

    // const filterBy = elem.getAttribute("filter-by");
    let filterBy = elem.value;

    let filterHead = elem.getAttribute("filter-head");

  //  let test= this.appFilter.filter(filter.doFilter(dataList,filterBy,filterHead));

  filterBy = filterBy.toLocaleLowerCase();

return this.appFilter.filter((data)=>{
      // let filterKeys =filterHead.length==0? Object.keys(data): filterHead;
      let filterKeys =Object.keys(data);
      return filterKeys.some((keys,i,arr)=>{
          console.log(data[keys])
          return String(data[keys]).toLocaleLowerCase().indexOf(filterBy)!==-1;
        })
    })

  }

}

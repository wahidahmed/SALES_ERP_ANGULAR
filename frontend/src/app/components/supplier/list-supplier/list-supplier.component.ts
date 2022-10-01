import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { filter } from 'rxjs';
import { Supplier } from 'src/app/Models/Supplier';
import { SupplierService } from 'src/app/services/supplier.service';

@Component({
  selector: 'app-list-supplier',
  templateUrl: './list-supplier.component.html',
  styleUrls: ['./list-supplier.component.css']
})
export class ListSupplierComponent implements OnInit {

  constructor(private supplierService:SupplierService) { }

@Output() supplierDataEvent=new EventEmitter<Supplier>();

  supplierList=new Array<Supplier>();
  _listFilter = '';
  filteredsupplierList: Array<Supplier> = [];

  ngOnInit(): void {
    this.getSupplierList();
  }

  getSupplierList(){
    this.supplierService.getSupplierList().subscribe((data)=>{
      this.supplierList=data;

      this.filteredsupplierList=this.supplierList;
    })
  }

  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
      this._listFilter = value;
      this.filteredsupplierList = this.listFilter ? this.doFilter(this.listFilter) : this.supplierList;
  }

  doFilter(filterBy: string): Supplier[] {
    filterBy = filterBy.toLocaleLowerCase();

      return  this.supplierList.filter((data)=>{
      //     let filterKeys = Object.keys(data);
      //     console.log(filterKeys)
      // return filterKeys.some((keys,i,arr)=>{
      //     console.log(data[keys])
      //     return String(data[keys]).toLocaleLowerCase().indexOf(filterBy)!==-1;
      //   })

          return data.SupplierName.toLocaleLowerCase().indexOf(filterBy) !== -1
          || data.SupplierAddress.toLocaleLowerCase().indexOf(filterBy)!==-1
          || data.SupplierPhone.toLocaleLowerCase().indexOf(filterBy)!==-1
        })
  }

  onEdit(item: any){
    console.log('send edit data form child',item);
    this.supplierDataEvent.emit(item);
  }
  onFilteredData(event: Array<Supplier>){
    console.log('event',event);
    this.filteredsupplierList = event;
  }
}

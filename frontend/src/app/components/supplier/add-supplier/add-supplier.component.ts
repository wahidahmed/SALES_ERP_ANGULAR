import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Supplier } from 'src/app/Models/Supplier';
import { SupplierService } from 'src/app/services/supplier.service';

@Component({
  selector: 'app-add-supplier',
  templateUrl: './add-supplier.component.html',
  styleUrls: ['./add-supplier.component.css']
})
export class AddSupplierComponent implements OnInit {

  constructor(private fb:FormBuilder,private supplierService:SupplierService) {

  }

  supplier=new Supplier();
  supplierList=new Array<Supplier>();
  _listFilter = '';
  filteredsupplierList: Array<Supplier> = [];

  saveForm:FormGroup;
  ngOnInit(): void {

  this.createSupplierForm();
  this.getSupplierList();

  }

  createSupplierForm(){
    this.saveForm=this.fb.group({
      SupplierId:[this.supplier.SupplierId],
      SupplierName:[this.supplier.SupplierName,Validators.required],
      SupplierAddress:[this.supplier.SupplierAddress],
      SupplierPhone:[this.supplier.SupplierPhone]
    })
  }
  get getSupplierId(){
    return this.saveForm.get('SupplierId') as FormControl;
  }
  get getSupplierName(){
    return this.saveForm.get('SupplierName') as FormControl;
  }
  get getSupplierAddress(){
    return this.saveForm.get('SupplierAddress') as FormControl;
  }
  get getSupplierPhone(){
    return this.saveForm.get('SupplierPhone') as FormControl;
  }
  onSubmit(){
    console.log(this.saveForm);
  }
  getSupplierList(){
    this.supplierService.getSupplierList().subscribe((data)=>{
      this.supplierList=data;
      let filterKeys = Object.keys(data);
      console.log(data);
      console.log(filterKeys);
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
  return this.supplierList.filter((data: Supplier) =>
        data.SupplierName.toLocaleLowerCase().indexOf(filterBy) !== -1
        || data.SupplierAddress.toLocaleLowerCase().indexOf(filterBy)!==-1
        || data.SupplierPhone.toLocaleLowerCase().indexOf(filterBy)!==-1
      );
}

}

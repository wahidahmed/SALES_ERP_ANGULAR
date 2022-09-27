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

  saveForm:FormGroup;
  ngOnInit(): void {

  this.createSupplierForm();

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


  getEditData(event: any){
    console.log('parent get edit data',event);
    this.saveForm.patchValue({
      SupplierId:event.SupplierId,
      SupplierName:event.SupplierName,
      SupplierAddress:event.SupplierAddress,
      SupplierPhone:event.SupplierPhone,
    })
  }

}

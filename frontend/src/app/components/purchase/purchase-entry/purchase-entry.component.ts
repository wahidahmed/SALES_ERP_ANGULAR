import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IProduct } from 'src/app/interfaces/IProduct';
import { ISupplier } from 'src/app/interfaces/ISupplier';
import { ProdcutService } from 'src/app/services/prodcut.service';
import { SupplierService } from 'src/app/services/supplier.service';

@Component({
  selector: 'app-purchase-entry',
  templateUrl: './purchase-entry.component.html',
  styleUrls: ['./purchase-entry.component.css']
})
export class PurchaseEntryComponent implements OnInit {


  constructor(private productService:ProdcutService,private fb:FormBuilder,private supplierService:SupplierService) { }

  perRow={
    productId:0,
    itemPrice:null,
    qty:null,
    otherCost:null,
    discount:null,
    total:null
  }

productList:IProduct[];
supplierList:ISupplier[];
saveForm:FormGroup;

   ngOnInit() {
       this.getProductList();
      this.getSupplierList();
      this.saveForm= this.fb.group({
        supplier:'',
        itemList:this.fb.array([])
      })
      this.onAddNewRow();
  }


get getItemList():FormArray{
  return this.saveForm.get('itemList') as FormArray;
}


newItem():FormGroup{
  return this.fb.group(this.perRow)
}



   getProductList(){
    this.productService.getProductList().subscribe(data=>{
        this.productList=data;
      })

  }


  getSupplierList(){
    this.supplierService.getSupplierList().subscribe(data=>{
        this.supplierList=data;
      })

  }

   onAddNewRow(){
    this.getItemList.push(this.newItem());
    // this.tableRowList.push(this.perRow);
  }
  deleteRow(i:number){
    this.getItemList.removeAt(i);
    // this.tableRowList.splice(i,1);
  }

  onSubmit(){
    console.log(this.saveForm.value)
  }
}

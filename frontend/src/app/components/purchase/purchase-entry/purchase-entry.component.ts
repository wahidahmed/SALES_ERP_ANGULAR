import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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



productList:IProduct[];
supplierList:ISupplier[];
saveForm:FormGroup;

   ngOnInit() {
       this.getProductList();
      this.getSupplierList();
     this.createForm();
      this.onAddNewRow();

      console.log('getItemList',this.getItemList)
  }


  createForm(){
    this.saveForm= this.fb.group({
      supplier:['',[Validators.required]],
      itemList:this.fb.array([])
    })
  }

get getItemList():FormArray{
  return this.saveForm.get('itemList') as FormArray;
}


newItem():FormGroup{
  return this.fb.group(
    {
      productId:['',[Validators.required]],
      itemPrice:[null,[Validators.required]],
      qty:[null,[Validators.required]],
      otherCost:[0],
      discount:[null,[]],
      total:[null,[Validators.required]],
    }
  )
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
    console.log(this.saveForm)
  }
}

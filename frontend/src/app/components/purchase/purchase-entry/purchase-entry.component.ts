import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IProduct } from 'src/app/interfaces/IProduct';
import { ProdcutService } from 'src/app/services/prodcut.service';

@Component({
  selector: 'app-purchase-entry',
  templateUrl: './purchase-entry.component.html',
  styleUrls: ['./purchase-entry.component.css']
})
export class PurchaseEntryComponent implements OnInit {


  constructor(private productService:ProdcutService,private fb:FormBuilder) { }

  tableRowList=[
  ];
  perRow={
    productId:null,
    itemPrice:null,
    qty:null,
    otherCost:null,
    discount:null,
    total:null
  }

productList:IProduct[];
saveForm:FormGroup;

   ngOnInit() {
       this.getProductList();
      // this.onAddNewRow();
      this.saveForm= this.fb.group({
        supplier:['test'],
        itemList:this.fb.array([])
      })

  }


get getItemList():FormArray{
  return this.saveForm.get('itemList') as FormArray;
}


newItem():FormGroup{
  return this.fb.group({
    productId:0,
    itemPrice:'',
    qty:0,
    otherCost:0,
    discount:0,
    total:0
  })
}



   getProductList(){
    this.productService.getProductList().subscribe(data=>{
        this.productList=data;
      })

  }

   onAddNewRow(){
    this.getItemList.push(this.newItem);
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

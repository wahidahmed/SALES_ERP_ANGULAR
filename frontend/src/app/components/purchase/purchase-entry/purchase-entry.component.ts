import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IProduct } from 'src/app/interfaces/IProduct';
import { ISupplier } from 'src/app/interfaces/ISupplier';
import { AlertifyService } from 'src/app/services/alertify.service';
import { ProdcutService } from 'src/app/services/prodcut.service';
import { SupplierService } from 'src/app/services/supplier.service';

@Component({
  selector: 'app-purchase-entry',
  templateUrl: './purchase-entry.component.html',
  styleUrls: ['./purchase-entry.component.css']
})
export class PurchaseEntryComponent implements OnInit {


  constructor(private productService:ProdcutService,private fb:FormBuilder,private supplierService:SupplierService,private alertifyService:AlertifyService) { }


isAddNew:boolean=false;
productList:IProduct[];
supplierList:ISupplier[];
saveForm:FormGroup;

   ngOnInit() {

       this.getProductList();
      this.getSupplierList();
     this.createForm();
      this.onAddNewRow();

  }


createForm(){
    this.saveForm= this.fb.group({
      SupplierId:['',[Validators.required]],
      PurchaseDate:['',[Validators.required]],
      itemList:this.fb.array([]),
      grandTotal:[null,[]]
    })
  }

get getSupplier(){
  return this.saveForm.get('SupplierId') as FormControl;
}
get getPurchaseDate(){
  return this.saveForm.get('PurchaseDate') as FormControl;
}

get getItemList():FormArray{
  return this.saveForm.get('itemList') as FormArray;
}

getPerItem(index:number):FormGroup{
  this.grandTotal();
   //https://www.samarpaninfotech.com/blog/angular-n-level-formarray-with-reactive-form-validation/
  return this.getItemList.controls[index] as FormGroup;
}


validation_message = {
  productId: [{ type: 'required', message: 'must select a product' }],
  itemPrice: [{ type: 'required', message: 'itemPrice is required' }],
  qty: [{ type: 'required', message: 'qty is required' },{ type: 'min', message: 'qty cannot 0' }],
  total: [{ type: 'required', message: 'total is required' }]
};
newItem():FormGroup{
  return this.fb.group(
    {

      productId:['',[Validators.required]],
      itemPrice:[null,[Validators.required,Validators.min(0)]],
      qty:[null,[Validators.required,Validators.min(1)]],
      otherCost:[null,Validators.min(0)],
      discount:[null,[Validators.min(0)]],
      total:[0,[Validators.min(0)]],
    }
  )
}

onAddNewRow(){
    if(this.getItemList.length==0){
      this.getItemList.push(this.newItem());
    }
    else if(this.saveForm.valid){
      this.getItemList.push(this.newItem());
      this.isAddNew=false;
    }
    else{
      this.isAddNew=true;
    }
  }
deleteRow(i:number){
    this.getItemList.removeAt(i);
    // this.tableRowList.splice(i,1);
  }


onChangeProduct(event:any,i:number){
    // console.log('saveform',this.saveForm.get('itemList'));
    // console.log('getItemList',this.saveForm.value);
    if(event.target.value){

      let arr=this.saveForm.get('itemList').value.filter((item,index:number)=>{

        return index!==i;
      })
      console.log('arr',arr)
      arr.forEach((element:any) => {

        if (event.target.value==element.productId) {
          this.getItemList.controls[i].patchValue({productId:'',itemPrice:null,qty:null,otherCost:null,discount:null});
          this.alertifyService.warning('This product has been already added');
        }

      });
    }
  }

grandTotal(){
   let total= this.saveForm.get('itemList').value.reduce((acc,{itemPrice,qty,otherCost,discount})=>{
      acc+= (Number(itemPrice|0)* Number(qty|0))+ Number(otherCost|0)- Number(discount|0) ;
      return acc;
    },0)
    // console.log('total',total)
    this.saveForm.get('grandTotal').setValue(total);
  }

onSubmit(){

    console.log(this.saveForm)
  }


selectFullContent($event){
    $event.target.select();
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


  //something is going on

}

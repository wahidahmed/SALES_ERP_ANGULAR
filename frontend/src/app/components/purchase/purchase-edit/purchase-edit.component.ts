import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interfaces/IProduct';
import { IpurchaseDetail } from 'src/app/interfaces/ipurchaseDetail';
import { ISupplier } from 'src/app/interfaces/ISupplier';
import { Purchase } from 'src/app/Models/purchase';
import { ProdcutService } from 'src/app/services/prodcut.service';
import { PurchaseService } from 'src/app/services/purchase.service';
import { SupplierService } from 'src/app/services/supplier.service';

@Component({
  selector: 'app-purchase-edit',
  templateUrl: './purchase-edit.component.html',
  styleUrls: ['./purchase-edit.component.css']
})
export class PurchaseEditComponent implements OnInit {

  constructor(private purchaseService:PurchaseService,private supplierService:SupplierService,private acRoute:ActivatedRoute,private fb:FormBuilder,private productService:ProdcutService) { }
  supplierList:ISupplier[];
  productList:IProduct[];

  editForm:FormGroup;
  ngOnInit() {

    this.createForm();
    this.getSupplierList();
    this.editData();
    this.getProductList();
      this.editForm.valueChanges.subscribe(v=>{

        // console.log('v',v.itemList);
        if(v.itemList){
          v.itemList.reduce((acc:number,{discount,itemPrice,otherCost,productId,qty,total})=>{
          //   console.log('acc',acc)
          //   console.log('cur',{discount,itemPrice,otherCost,productId,qty,total});
          //  acc+= (Number(itemPrice)*Number(qty));
          //  total=(Number(itemPrice)*Number(qty));
          },0)
        }
      })
  }

  getProductList(){
    this.productService.getProductList().subscribe(data=>{
        this.productList=data;
      })
  }

  createForm(){
    this.editForm= this.fb.group({
      SupplierId:['',[Validators.required]],
      PurchaseDate:['',[Validators.required]],
      itemList:this.fb.array([ this.addNewItemList()]),
      grandTotal:[null,[]]
    })
  }

  addNewItemList():FormGroup{
    return this.fb.group(
      {
        productId:['',[Validators.required]],
        itemPrice:[null,[Validators.required,Validators.min(0)]],
        qty:[null,[Validators.required,Validators.min(1)]],
        otherCost:[null,Validators.min(0)],
        discount:[null,[Validators.min(0)]],
        total:[0,[Validators.min(0)]],
      }
    );
  }


  get itemListFormArray():FormArray{
    return this.editForm.get('itemList') as FormArray;
  }

  get purchaseDateControl():FormControl{
    return this.editForm.get('PurchaseDate') as FormControl;
  }



  editData(){

    const id= +this.acRoute.snapshot.paramMap.get('id');
    this.purchaseService.getPurchaseById(id).subscribe((data:Purchase)=>{
      this.editForm.patchValue(
        {
          SupplierId:data.SupplierId,
          PurchaseDate:data.PurchaseDate,
          grandTotal:data.GrandTotal
        }
      )
      this.editForm.setControl('itemList',this.setExistItemList(data.ItemList))
    })
  }
    setExistItemList(data:IpurchaseDetail[]){
      const formArray=new FormArray([]);
    data.forEach((item)=>{
      let result=this.fb.group({
        productId:[item.ProductId,[Validators.required]],
        itemPrice:[item.ItemPrice,[Validators.required,Validators.min(1)]],
        qty:[item.Qty,[Validators.required,Validators.min(1)]],
        otherCost:[item.OtherCost,Validators.min(0)],
        discount:[item.Discount,[Validators.min(0)]],
        total:[(Number(item.ItemPrice)*Number(item.Qty)+Number(item.OtherCost|0)-Number(item.Discount|0)),[Validators.min(0)]]
      })
      formArray.push(result);
    });

      return formArray;

    }

  getSupplierList(){
    this.supplierService.getSupplierList().subscribe(data=>{
        this.supplierList=data;
      })
  }

  onAddNewRow(){
    // this.itemListFormArray.push(this.addNewItemList());
    (<FormArray>this.editForm.get('itemList')).push(this.addNewItemList());
  }
  deleteRow(i:number){
      this.itemListFormArray.removeAt(i);
  }
  onSubmit(){
    console.log(this.editForm);
  }

}

import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
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
      itemList:this.fb.array([]),
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

  editData(){

    const id= +this.acRoute.snapshot.paramMap.get('id');
    this.purchaseService.getPurchaseById(id).subscribe((data:Purchase)=>{
      this.editForm.get('itemList').patchValue(data.ItemList)

      this.editForm.patchValue(
        {
          SupplierId:data.SupplierId,
          PurchaseDate:data.PurchaseDate,
          grandTotal:data.GrandTotal
        }
      )
      this.editForm.setControl('itemList',this.setExistItemList(data.ItemList))
      console.log('editForm',this.editForm);
    })
  }
    setExistItemList(data:IpurchaseDetail[]){
      const formArray=new FormArray([]);
    data.forEach((item)=>{
      let result=this.fb.group({
        productId:item.ProductId,
        itemPrice:item.ItemPrice,
        qty:item.Qty,
        otherCost:item.OtherCost,
        discount:item.Discount,
        total:item.Discount
      })
      formArray.push(result);
    })
return formArray;

    }

  getSupplierList(){
    this.supplierService.getSupplierList().subscribe(data=>{
        this.supplierList=data;
      })
  }

  onAddNewRow(){
    this.itemListFormArray.push(this.addNewItemList());
  }
  deleteRow(i:number){
      this.itemListFormArray.removeAt(i);
  }
  onSubmit(){
    console.log(this.editForm);
  }

}

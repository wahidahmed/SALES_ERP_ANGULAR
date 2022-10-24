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

  validation_message = {
    productId: [{ type: 'required', message: 'must select a product' }],
    itemPrice: [{ type: 'required', message: 'itemPrice is required' }],
    qty: [{ type: 'required', message: 'qty is required' },{ type: 'min', message: 'qty cannot 0' }],
    total: [{ type: 'required', message: 'total is required' }]
  };
  ngOnInit() {

    this.editForm= this.fb.group({
      SupplierId:['',[Validators.required]],
      PurchaseDate:['',[Validators.required]],
      itemList:this.fb.array([]),
      grandTotal:[null,[]]
    })

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
    console.log('test')

    this.itemListFormArray.push(this.addNewItemList());

  }
  deleteRow(i:number){
      this.itemListFormArray.removeAt(i);
  }
  onSubmit(){
    console.log(this.editForm);
  }

}

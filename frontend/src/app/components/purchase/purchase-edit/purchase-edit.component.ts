import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interfaces/IProduct';
import { IpurchaseDetail } from 'src/app/interfaces/ipurchaseDetail';
import { ISupplier } from 'src/app/interfaces/ISupplier';
import { Purchase } from 'src/app/Models/purchase';
import { AlertifyService } from 'src/app/services/alertify.service';
import { ProdcutService } from 'src/app/services/prodcut.service';
import { PurchaseService } from 'src/app/services/purchase.service';
import { SupplierService } from 'src/app/services/supplier.service';

@Component({
  selector: 'app-purchase-edit',
  templateUrl: './purchase-edit.component.html',
  styleUrls: ['./purchase-edit.component.css']
})
export class PurchaseEditComponent implements OnInit {

  constructor(private purchaseService:PurchaseService,private supplierService:SupplierService,private acRoute:ActivatedRoute,private fb:FormBuilder,private productService:ProdcutService,private alertifyService:AlertifyService) { }
  supplierList:ISupplier[];
  productList:IProduct[];
  editForm:FormGroup;
  isAddNew:boolean=false;
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


 private addNewItemList():FormGroup{
    return this.fb.group(
      {
        productId:['',[Validators.required]],
        itemPrice:[null,[Validators.required,Validators.min(0)]],
        qty:[null,[Validators.required,Validators.min(1)]],
        otherCost:[null,Validators.min(0)],
        discount:[null,[Validators.min(0)]],
        total:[null,[Validators.min(0)]],
      }
    );
  }


  get itemListFormArray():FormArray{
    return this.editForm.get('itemList') as FormArray;
  }

  get grandTotalControl():FormControl{
    return this.editForm.get('grandTotal') as FormControl;
  }
  get supplierControl():FormControl{
    return this.editForm.get('SupplierId') as FormControl;
  }

  get purchaseDateControl():FormControl{
    return this.editForm.get('PurchaseDate') as FormControl;
  }

private  editData(){

    const id= +this.acRoute.snapshot.paramMap.get('id');
    this.purchaseService.getPurchaseById(id).subscribe((data:Purchase)=>{
      this.editForm.get('itemList').patchValue(data.ItemList)

      this.editForm.patchValue(
        {
          SupplierId:data.SupplierId,
          PurchaseDate:[this.formatDate(new Date(data.PurchaseDate))],
          grandTotal:data.GrandTotal
        }
      )
      this.editForm.setControl('itemList',this.setExistItemList(data.ItemList))
      // console.log('editForm',this.editForm);
    })
  }

  private formatDate(date) {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
  }

  private setExistItemList(data:IpurchaseDetail[]){
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
    if(this.itemListFormArray.length==0){
      (<FormArray>this.editForm.get('itemList')).push(this.addNewItemList());
    }
    else if(this.editForm.valid){
      (<FormArray>this.editForm.get('itemList')).push(this.addNewItemList());
      this.isAddNew=false;
    }
    else{
      this.isAddNew=true;
    }

  }
  onChangeQty(item){

    this.getGrandTotal();
  }
  onChangePrice(item){

    this.getGrandTotal();
  }
  onChangeDiscount(item){

    this.getGrandTotal();
  }
  onChangeCost(item){

    this.getGrandTotal();
  }

  onChangeProduct(event:any,i:number){

    if(event.target.value){

      let arr=this.editForm.get('itemList').value.filter((item,index:number)=>{

        return index!==i;
      })
      console.log('arr',arr)
      arr.forEach((element:any) => {

        if (event.target.value==element.productId) {
          this.itemListFormArray.controls[i].patchValue({productId:'',itemPrice:null,qty:null,otherCost:null,discount:null});
          this.alertifyService.warning('This product has been already added');
        }

      });
    }
  }

  getGrandTotal(){

   let total =this.itemListFormArray.value.reduce((acc:number,{discount,itemPrice,otherCost,qty})=>{
      acc +=Number(itemPrice|0)*Number(qty|0)+Number(otherCost|0)-Number(discount | 0);
      return acc;
    },0);
    console.log('total',total)
    this.grandTotalControl.patchValue(total);
  }

  selectFullContent($event){
    $event.target.select();
  }
  deleteRow(i:number){
      this.itemListFormArray.removeAt(i);
  }
  onSubmit(){
    // console.log(this.editForm);
  }

}

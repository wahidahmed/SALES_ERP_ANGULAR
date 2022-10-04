import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
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
    pList:[],
    itemPrice:null,
    qty:null,
    otherCost:null,
    discount:null,
    total:null,
    remove:null
  }

productList:IProduct[];
saveForm:FormGroup;
public addresses: FormArray;
public addressForm: FormGroup;//https://prodevhub.com/add-remove-multiple-input-fields-dynamically-using-form-array-in-reactive-forms-angular/

   ngOnInit() {
       this.getProductList();
      this.onAddNewRow();
      this.saveForm=new FormGroup({

      })

      this.addressForm = this.fb.group({
        addresses: this.fb.array([ this.createAddress() ])
     });

  }

  get addressControls() {
    return this.addressForm.get('addresses')['controls'];
  }

  createAddress(): FormGroup {
    return this.fb.group({
      address: '',
      street: '',
      city: '',
      country: ''
    });
  }

  addAddress(): void {
    this.addresses = this.addressForm.get('addresses') as FormArray;
    this.addresses.push(this.createAddress());
  }

  removeAddress(i: number) {
    this.addresses.removeAt(i);
  }

  logValue() {
    console.log('test',this.addresses);
  }

   getProductList(){
    this.productService.getProductList().subscribe(data=>{
        this.productList=data;
      })

  }

   onAddNewRow(){
    this.tableRowList.push(this.perRow);
  }
  deleteRow(i:number){
    this.tableRowList.splice(i,1);
  }

  onSubmit(){

  }
}

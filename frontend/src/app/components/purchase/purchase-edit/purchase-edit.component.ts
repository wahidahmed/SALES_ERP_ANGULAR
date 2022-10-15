import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ISupplier } from 'src/app/interfaces/ISupplier';
import { Purchase } from 'src/app/Models/purchase';
import { PurchaseService } from 'src/app/services/purchase.service';
import { SupplierService } from 'src/app/services/supplier.service';

@Component({
  selector: 'app-purchase-edit',
  templateUrl: './purchase-edit.component.html',
  styleUrls: ['./purchase-edit.component.css']
})
export class PurchaseEditComponent implements OnInit {

  constructor(private purchaseService:PurchaseService,private supplierService:SupplierService,private acRoute:ActivatedRoute,private fb:FormBuilder) { }
  supplierList:ISupplier[];

  editForm:FormGroup;
  ngOnInit() {

    this.createForm();


    this.getSupplierList();


  }

  createForm(){
    this.editForm= this.fb.group({
      SupplierId:['',[Validators.required]],
      PurchaseDate:['',[Validators.required]],
      itemList:this.fb.array([]),
      grandTotal:[null,[]]
    })
  }

  editData(){

    const id= +this.acRoute.snapshot.paramMap.get('id');
    this.purchaseService.getPurchaseById(id).subscribe((data:Purchase)=>{
      this.editForm.get('itemList').patchValue(data.ItemList)

      this.editForm.patchValue(
        {
          SupplierId:data.SupplierId,
          //how to set obseravable data in formArray https://www.concretepage.com/angular/angular-formarray-setvalue-patchvalue
        }
      )

      console.log(this.editForm);
    })
  }

  get getItemList():FormArray{
    return this.editForm.get('itemList') as FormArray;
  }


  getSupplierList(){
    this.supplierService.getSupplierList().subscribe(data=>{
        this.supplierList=data;
      })
  }

  onSubmit(){
    console.log(this.editForm);
  }
}

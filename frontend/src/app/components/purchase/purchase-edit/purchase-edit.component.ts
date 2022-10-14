import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

    this.editForm=this.fb.group({
      SupplierId:['',[Validators.required]],
      PurchaseDate:['',[Validators.required]],
      itemList:this.fb.array([]),
      grandTotal:[null,[]]
   })

    const id= +this.acRoute.snapshot.paramMap.get('id');
    this.purchaseService.getPurchaseById(id).subscribe((data:Purchase)=>{
      this.editForm.patchValue(
        {
          SupplierId:data.SupplierId,

        }
      )
      console.log(this.editForm);
    })
    this.getSupplierList();


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

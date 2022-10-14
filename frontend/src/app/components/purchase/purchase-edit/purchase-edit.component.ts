import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Purchase } from 'src/app/Models/purchase';
import { PurchaseService } from 'src/app/services/purchase.service';

@Component({
  selector: 'app-purchase-edit',
  templateUrl: './purchase-edit.component.html',
  styleUrls: ['./purchase-edit.component.css']
})
export class PurchaseEditComponent implements OnInit {

  constructor(private purchaseService:PurchaseService,private acRoute:ActivatedRoute) { }

  public purchse=new Purchase();
  ngOnInit() {
   const id= +this.acRoute.snapshot.paramMap.get('id');
   this.purchaseService.getPurchaseById(id).subscribe((data:Purchase)=>{
    this.purchse=data;
    console.log(this.purchse)
   })
  }

}

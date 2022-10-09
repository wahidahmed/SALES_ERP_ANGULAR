import { Component, OnInit } from '@angular/core';
import { Purchase } from 'src/app/Models/purchase';
import { PurchaseService } from 'src/app/services/purchase.service';

@Component({
  selector: 'app-purchase-list',
  templateUrl: './purchase-list.component.html',
  styleUrls: ['./purchase-list.component.css']
})
export class PurchaseListComponent implements OnInit {

  constructor(private purchaseService:PurchaseService) { }

  public purchaseList:Array<Purchase>;
  ngOnInit() {

  }

  public getPurchaseList(){

    this.purchaseService.getPurchaseList().subscribe(
      (data:Purchase[])=>{
        this.purchaseList=data
      }
    )
  }

}

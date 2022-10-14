import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit, Output } from '@angular/core';
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
    this.getPurchaseList();
  }

  public getPurchaseList(){

    this.purchaseService.getPurchaseList().subscribe(
      (data:Purchase[])=>{
        this.purchaseList=data.map((obj)=>{
          let output=obj.ItemList.map((item)=>{
            item.Total= Number(item.Qty|0)*Number(item.ItemPrice|0);
            obj.Amount=(obj.Amount|0)+item.Total;
            obj.Cost=(obj.Cost|0)+item.OtherCost|0;
            obj.Discount=(obj.Discount|0)+item.Discount|0;
            return{...item};
          });

          return {
            ...obj,ItemList:output
          }
        })


      }
    )
  }

}

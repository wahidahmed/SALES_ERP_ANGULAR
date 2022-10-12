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
    this.getPurchaseList();
  }

  public getPurchaseList(){

    this.purchaseService.getPurchaseList().subscribe(
      (data:Purchase[])=>{

        this.purchaseList=data;
          this.purchaseList.forEach(item=>{
              item.ItemList.reduce((acc:number,{ItemPrice,Qty,OtherCost,Discount,Total})=>{
                acc+=(Number(Qty||0)*Number(ItemPrice||0))-Number(Discount||0);
                Total=acc;
                return Total
              },0)
          })
        console.log(this.purchaseList)
      }
    )
  }

}

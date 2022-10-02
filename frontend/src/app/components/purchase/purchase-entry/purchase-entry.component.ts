import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/interfaces/IProduct';
import { ProdcutService } from 'src/app/services/prodcut.service';

@Component({
  selector: 'app-purchase-entry',
  templateUrl: './purchase-entry.component.html',
  styleUrls: ['./purchase-entry.component.css']
})
export class PurchaseEntryComponent implements OnInit {

  constructor(private productService:ProdcutService) { }

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

   ngOnInit() {
       this.getProductList();
      this.onAddNewRow();

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

  }
}

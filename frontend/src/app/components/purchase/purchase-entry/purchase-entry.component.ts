import { Component, OnInit } from '@angular/core';
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
    item:[],
    itemPrice:null,
    qty:null,
    otherCost:null,
    discount:null,
    total:null,
    remove:null
  }

  ngOnInit() {
  this.productService.getProductList().subscribe(data=>{
    this.perRow.item=data;
    })
    this.tableRowList.push(this.perRow);
  }

  onAddNewRow(){
    this.tableRowList.push(this.perRow);
  }
  deleteRow(i){

  }
}

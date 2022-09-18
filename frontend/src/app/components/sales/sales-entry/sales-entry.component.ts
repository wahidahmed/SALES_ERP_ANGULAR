import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interfaces/IProduct';
import { ProdcutService } from 'src/app/services/prodcut.service';

@Component({
  selector: 'app-sales-entry',
  templateUrl: './sales-entry.component.html',
  styleUrls: ['./sales-entry.component.css']
})
export class SalesEntryComponent implements OnInit {
[x: string]: any;

  constructor(private productService:ProdcutService) { }

  productList:Array<IProduct>
  tableRowArray:Array<any>=[];
  private newAttribute: any =   {
      qty:null
      ,salePrice: null
      ,discount: null
      ,total:null
  }
  ngOnInit(): void {
    this.productService.getProductList().subscribe
    (
      (data)=>
      {
        this.productList= data
      }
    )

   this.addRow();

  }

  addRow() {
   this.newAttribute =   {
      qty:null
      ,salePrice: null
      ,discount: null
      ,total:null
  }
    this.tableRowArray.push(this.newAttribute);

  }
  deleteRow(index: number) {
    this.tableRowArray.splice(index, 1);
  }

  getGrandTotal(){

  //   return marks.reduce((acc:number,{qty,salePrice,discount}: any)=>{
  //     acc= (Number(qty)*Number(salePrice))-Number(discount);
  //     return acc;
  //  },0)
    return this.tableRowArray.reduce((acc: number, {total}: any) => acc += +(total || 0),0);

  //  this.tableRowArray.reduce((acc,{salePrice,discount,total})=>{
  //   console.log('acc',acc)
  //   console.log('salePrice',salePrice)
  //   console.log('discount',discount)
  //   console.log('total',total)
  // },0)
  }


}





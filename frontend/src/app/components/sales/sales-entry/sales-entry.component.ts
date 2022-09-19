import { Component, OnInit  } from '@angular/core';
import { NgModel } from '@angular/forms';
import { IProduct } from 'src/app/interfaces/IProduct';
import { ProdcutService } from 'src/app/services/prodcut.service';

@Component({
  selector: 'app-sales-entry',
  templateUrl: './sales-entry.component.html',
  styleUrls: ['./sales-entry.component.css']
})
export class SalesEntryComponent implements OnInit {

  constructor(private productService:ProdcutService) { }


  productList:Array<IProduct>
  tableRowArray:Array<any>=[];
  private newAttribute: any =   {
      qty:null
      ,minPrice:null
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
      ,minPrice:null
      ,salePrice: null
      ,discount: null
      ,total:null
  }
    this.tableRowArray.push(this.newAttribute);

  }
  deleteRow(index: number) {
    this.tableRowArray.splice(index, 1);
  }

   getGrandTotal(item: any[]){

    return item.reduce((acc,{qty, salePrice, discount})=>{
      acc+=(Number(qty||0)*Number(salePrice||0))-Number(discount||0);

      return acc;
    },0)
  }

  selectAllContent($event) {
    $event.target.select();
  }

  onChangeProduct(event,item){
    console.log('item',item);
    this.productService.getProduct(+(event.target.value)).subscribe((data)=>{
      console.log('data',data);
      item.minPrice=data.SalesPrice;
      // item.minPrice=data.SalesPrice;
    });
  }



}





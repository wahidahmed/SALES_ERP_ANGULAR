import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interfaces/IProduct';
import { ProdcutService } from 'src/app/services/prodcut.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

constructor(private prodService:ProdcutService) { }
productList:Array<IProduct>;
productFilteredList:Array<IProduct>;

  ngOnInit(): void {
    this.prodService.getProductList().subscribe(data=>{
      this.productList=data;
      this.productFilteredList=this.productList;
    });
  }

  onFilteredData(event:Array<IProduct>){
    console.log('event',event);
    this.productFilteredList=event;
  }

}

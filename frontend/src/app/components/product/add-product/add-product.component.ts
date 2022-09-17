import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/interfaces/IProduct';
import { ProdcutService } from 'src/app/services/prodcut.service';
import { Product } from 'src/models/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
//What are Route Parameters and details https://www.tektutorialshub.com/angular/angular-passing-parameters-to-route/
  constructor(private activateRoute:ActivatedRoute,private productService:ProdcutService,private router: Router) {
    this.router.onSameUrlNavigation = 'reload';
  }

  isSubmitted=false;

product=new Product();
//https://stackoverflow.com/questions/49738911/angular-5-routing-to-same-component-but-different-param-not-working
  ngOnInit(): void {
    // this.activateRoute.paramMap.subscribe(r=>this.product.Id=Number( r.get('id')))
    this.activateRoute.params.subscribe(param =>{
     let id= +this.activateRoute.snapshot.paramMap.get('id');
     this.product.Id=id;
     this.editData(id);
     console.log('id',id)
    });
    console.log(this.product)
  }

editData(id:number){
  if(id>0){

    this.productService.getProduct(this.product.Id)
                        .subscribe((data:IProduct)=>{

                          this.product=data
                        })
  }
  else{
    this.product.ProdcutCode='';
    this.product.ProdcutName='';
    this.product.ModelId=null;
    this.product.CostPrice=0;
    this.product.SalesPrice=0;
    this.product.VAT=null;
    this.product.CatagoryId=null;
    this.product.UnitId=0;
  }
}

  onSubmit(addProductForm:NgForm){
    this.isSubmitted=true;
    console.log(addProductForm);
  }
}

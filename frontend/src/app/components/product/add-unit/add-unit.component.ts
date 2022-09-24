
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IUnit } from 'src/app/interfaces/IUnit';
import { ProdcutService } from 'src/app/services/prodcut.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-add-unit',
  templateUrl: './add-unit.component.html',
  styleUrls: ['./add-unit.component.css']
})
export class AddUnitComponent implements OnInit   {


  constructor(private productService:ProdcutService) { }

 unitSaveForm:FormGroup;

  ngOnInit(): void {
    this.unitSaveForm=new FormGroup(
     {
      UnitId:new FormControl(0),
      UnitName:new FormControl(null,Validators.required),
      Status:new FormControl(null,Validators.required)
    }
    );
  }

  get getUnitId(){
    return this.unitSaveForm.get('UnitId') as FormControl
  }
  get getUnitName(){
    return this.unitSaveForm.get('UnitName') as FormControl
  }
  get getUnitStatus(){
    return this.unitSaveForm.get('Status') as FormControl
  }



  onSubmit(){
    console.log(this.unitSaveForm);
  }




}


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}




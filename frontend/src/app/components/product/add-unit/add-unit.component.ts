
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { IUnit } from 'src/app/interfaces/IUnit';
import { ProdcutService } from 'src/app/services/prodcut.service';



@Component({
  selector: 'app-add-unit',
  templateUrl: './add-unit.component.html',
  styleUrls: ['./add-unit.component.css']
})
export class AddUnitComponent implements OnInit {

  constructor(private productService:ProdcutService) { }

 unitSaveForm:FormGroup;
 ELEMENT_DATA: IUnit[];

  ngOnInit(): void {
    this.unitSaveForm=new FormGroup(
     {
      UnitId:new FormControl(0),
      UnitName:new FormControl(null,Validators.required),
      Status:new FormControl(null,Validators.required)
    }
    );

    this.getUnitList();

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
  // dataSource = new MatTableDataSource<IUnit>(this.ELEMENT_DATA);
  getUnitList(){
    this.productService.getUnitList().subscribe((data)=>{
      this.ELEMENT_DATA=data
    })
  }

  onSubmit(){
    console.log(this.unitSaveForm);
  }

}

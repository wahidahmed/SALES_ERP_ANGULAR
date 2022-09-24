
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IUnit } from 'src/app/interfaces/IUnit';
import { Unit } from 'src/app/Models/Unit';
import { ProdcutService } from 'src/app/services/prodcut.service';



@Component({
  selector: 'app-add-unit',
  templateUrl: './add-unit.component.html',
  styleUrls: ['./add-unit.component.css']
})
export class AddUnitComponent implements OnInit   {


  constructor(private productService:ProdcutService) { }

 unitSaveForm:FormGroup;
 public model: Unit = new Unit();
  ngOnInit(): void {
    this.unitSaveForm=new FormGroup(
     {
      UnitId:new FormControl(this.model.UnitId),
      UnitName:new FormControl(this.model.UnitName,Validators.required),
      Status:new FormControl(this.model.Status,Validators.required)
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


  getEditData(data:IUnit){
    console.log('got in parent',data);
    this.model=data;
  }

}



import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IUnit } from 'src/app/interfaces/IUnit';

@Component({
  selector: 'app-add-unit',
  templateUrl: './add-unit.component.html',
  styleUrls: ['./add-unit.component.css']
})
export class AddUnitComponent implements OnInit {

  constructor() { }

 unitSaveForm:FormGroup;

  ngOnInit(): void {
    this.unitSaveForm=new FormGroup(
     {
      UnitId:new FormControl(0),
      UnitName:new FormControl(null,Validators.required),
      IsActive:new FormControl(null,Validators.required)
    }
    );
  }

  onSubmit(){
    console.log(this.unitSaveForm);
  }

}


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
 unitListData: IUnit[]=[];
 unitDisplayedColumns: string[] = ['UnitId', 'UnitName', 'Status'];


 @ViewChild(MatPaginator) paginator: MatPaginator;
 dataSource = new MatTableDataSource<IUnit>(this.unitListData);
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

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

  getUnitList(){
    this.productService.getUnitList().subscribe((data)=>{
      this.unitListData=data
    })
  }

  onSubmit(){
    console.log(this.unitSaveForm);
  }




}




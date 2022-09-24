import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort, Sort} from '@angular/material/sort';
import { IUnit } from 'src/app/interfaces/IUnit';
import { ProdcutService } from 'src/app/services/prodcut.service';

@Component({
  selector: 'app-list-unit',
  templateUrl: './list-unit.component.html',
  styleUrls: ['./list-unit.component.css']
})
export class ListUnitComponent implements OnInit {


  constructor(private productService:ProdcutService) { }

 unitSaveForm:FormGroup;
 unitListData: IUnit[];

 unitDisplayedColumns: string[] = ['UnitId', 'UnitName', 'Status','action'];


 @ViewChild(MatPaginator) paginator: MatPaginator;
 @ViewChild(MatSort) sort: MatSort;
 dataSource: MatTableDataSource<IUnit>;

  ngAfterViewInit() {

    setTimeout(() => {
      this.dataSource = new MatTableDataSource(this.unitListData);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }, 0);

  }

  ngOnInit(): void {
    this.getUnitList();
  }
  getUnitList(){
    this.productService.getUnitList().subscribe((data)=>{
      this.unitListData= data
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
}


onEdit(element:any){
  console.log(element);
}

onDelete(id:number){
  console.log(id);
}
}

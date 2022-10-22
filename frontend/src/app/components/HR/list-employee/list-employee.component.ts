import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Iemployee } from 'src/app/interfaces/iemployee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css'],
})
export class ListEmployeeComponent implements OnInit {
  constructor(private employeeService: EmployeeService) {}
  employeeList: Iemployee[];

  ngOnInit() {
    this.employeeService.getPurchaseList().subscribe((data) => {
      this.employeeList = data;
    });
  }
  @Output() editEmployee = new EventEmitter<Iemployee>();
  edit(employee: Iemployee) {
    this.editEmployee.emit(employee);
  }
}

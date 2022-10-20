import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  employeeForm:FormGroup;

  ngOnInit() {
    this.employeeForm=this.fb.group({
      FullName:['',[Validators.required,Validators.minLength(5)]],
      Email:[null,[Validators.required]],
      Skills:this.fb.group({
        SkillName:[null],
        ExperienceYears:[],
        Proficiency:[]
      })
    })
  }


  get fullNameControl():FormControl{
    return this.employeeForm.get('FullName') as FormControl;
  }


  onSubmit(){
    console.log(this.employeeForm)
  }

}

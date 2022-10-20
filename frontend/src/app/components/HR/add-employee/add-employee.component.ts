import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  formErrors = {
    'FullName': '',
    'Email': '',
    'SkillName': '',
    'ExperienceYears': '',
    'Proficiency': ''
  };
  validationMessages = {
    'FullName': {
      'required': 'Full Name is required.',
      'minlength': 'Full Name must be greater than 2 characters.',
      'maxlength': 'Full Name must be less than 10 characters.'
    },
    'Email': {
      'required': 'Email is required.'
    },
    'SkillName': {
      'required': 'Skill Name is required.',
    },
    'ExperienceYears': {
      'required': 'Experience is required.',
    },
    'Proficiency': {
      'required': 'Proficiency is required.',
    },
  };

  employeeForm:FormGroup;
  isSubmitted:boolean=false;

  ngOnInit() {
    this.employeeForm=this.fb.group({
      FullName:[null,[Validators.required,Validators.minLength(5)]],
      Email:[null,[Validators.required]],
      Skills:this.fb.group({
        SkillName:[null,[Validators.required]],
        ExperienceYears:[null,[Validators.required]],
        Proficiency:[null,[Validators.required]]
      })
    });

    this.employeeForm.valueChanges.subscribe((v)=>{
      this.logValidationErrors(this.employeeForm);
    });
  }


  get fullNameControl():FormControl{
    return this.employeeForm.get('FullName') as FormControl;
  }

  get emailControl():FormControl{
    return this.employeeForm.get('Email') as FormControl;
  }

  get skillsGroup():FormGroup{
    return this.employeeForm.get('Skills') as FormGroup;
  }

  get skillNameControl():FormControl{
    return this.skillsGroup.get('SkillName') as FormControl;
  }

  logValidationErrors(group:FormGroup=this.employeeForm):void{
    Object.keys(group.controls).forEach((key)=>{
      const abstractControl=group.get(key);
      console.log('abstractControl = ', abstractControl);
      if (abstractControl instanceof FormGroup) {
        this.logValidationErrors(abstractControl);
      }
      else{
        console.log('Key = ' + key + ' && Value = ' + abstractControl.value);
        this.formErrors[key]='';
        if(abstractControl && abstractControl.invalid &&(abstractControl.touched || abstractControl.dirty || this.isSubmitted )){
          const message=this.validationMessages[key];
          console.log('message',message);
          console.log('abstractControl.errors',abstractControl.errors);
          for (const errorKey in abstractControl.errors) {
            if(errorKey){
              this.formErrors[key]+=message[errorKey]+' ';
            }
          }
        }
      }

    });
  }


  onSubmit(){
    this.isSubmitted=true;
    this.logValidationErrors();
    console.log(this.employeeForm)
  }

}

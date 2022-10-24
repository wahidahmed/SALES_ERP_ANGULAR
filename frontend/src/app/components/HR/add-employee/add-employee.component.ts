import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidatiors } from 'src/app/helpers/custom.validators';
import { Iemployee } from 'src/app/interfaces/iemployee';
import { IemployeeSkill } from 'src/app/interfaces/iemployeeSkill';

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
    'Phone':''
  };
  validationMessages = {
    'FullName': {
      'required': 'Full Name is required.',
      'minlength': 'Full Name must be greater than 2 characters.',
      'maxlength': 'Full Name must be less than 10 characters.'
    },
    'Email': {
      'required': 'Email is required.',
      'emailDomain': 'Email domian should be gmail.com'
    },
    'Phone': {
      'required': 'Phone is required.'
    }
  };

  employeeForm:FormGroup;
  isSubmitted:boolean=false;

  ngOnInit() {

    this.employeeForm=this.fb.group({
      FullName:[null,[Validators.required,Validators.minLength(5)]],
      contactPreference:['email'],
      Email:[null,[Validators.required,CustomValidatiors.emailDomain('gmail.com')]],
      Phone:[null],
      Skills:this.fb.array([
        this.addSkillFormGroup()
      ])
    });

    this.employeeForm.valueChanges.subscribe((v)=>{
      this.logValidationErrors(this.employeeForm);
    });

    this.contactPreferenceControl.valueChanges.subscribe((val)=>{
      this.onContactPrefernceChange(val);
    });

  }


  addSkillFormGroup():FormGroup{
   return this.fb.group({
      SkillName:[null,[Validators.required]],
      ExperienceYears:[null,[Validators.required]],
      Proficiency:[null,[Validators.required]]
    })
  }
  addSkillButtonClick(){

    (<FormArray>this.employeeForm.get('Skills')).push(this.addSkillFormGroup());
  }



  get fullNameControl():FormControl{
    return this.employeeForm.get('FullName') as FormControl;
  }

  get emailControl():FormControl{
    return this.employeeForm.get('Email') as FormControl;
  }
  get PhoneControl():FormControl{
    return this.employeeForm.get('Phone') as FormControl;
  }

  get skillsFormArray():FormArray{
    return this.employeeForm.get('Skills') as FormArray;
  }

  // get skillsGroup():FormGroup{
  //   return this.skillsFormArray.get('Skills') as FormGroup;
  // }

  // get skillNameControl():FormControl{
  //   return this.skillsGroup.get('SkillName') as FormControl;
  // }

  get contactPreferenceControl():FormControl{
    return this.employeeForm.get('contactPreference') as FormControl;
  }

  logValidationErrors(group:FormGroup=this.employeeForm):void{
    Object.keys(group.controls).forEach((key)=>{
      const abstractControl=group.get(key);
      // console.log('abstractControl = ', abstractControl);
      if (abstractControl instanceof FormGroup) {
        this.logValidationErrors(abstractControl);
      }
      else{
        // console.log('Key = ' + key + ' && Value = ' + abstractControl.value);
        this.formErrors[key]='';
        if(abstractControl && abstractControl.invalid &&(abstractControl.touched || abstractControl.dirty || this.isSubmitted )){
          const message=this.validationMessages[key];
          // console.log('message',message);
          // console.log('abstractControl.errors',abstractControl.errors);
          for (const errorKey in abstractControl.errors) {
            if(errorKey){
              this.formErrors[key]+=message[errorKey]+' ';
            }
          }
        }
      }

    });
  }

  onContactPrefernceChange(value: string){
    if(value=='phone'){
      this.PhoneControl.setValidators([Validators.required]);
      this.emailControl.clearValidators();
    }
    else{
      this.PhoneControl.clearValidators();
      this.emailControl.setValidators([Validators.required]);
    }

    this.PhoneControl.updateValueAndValidity();
    this.emailControl.updateValueAndValidity();
  }

  removeSkillButtonClick(i: number){
    this.skillsFormArray.removeAt(i);
  }

  getEditData(data:Iemployee){
    this.employeeForm.patchValue({
      FullName:data.FullName,
      contactPreference:data.contactPreference,
      Email:data.Email,
      Phone:data.Phone,
    })

    this.employeeForm.setControl('Skills',this.setExistingSkills(data.Skills))

  }
  setExistingSkills(skillSet:IemployeeSkill[]):FormArray{
    const formArray=new FormArray([]);
    skillSet.forEach((s)=>{
     let rr= this.fb.group({
        SkillName:s.SkillName,
        ExperienceYears:s.ExperienceYears,
        Proficiency:s.Proficiency
      })
      formArray.push(rr);
    })
    return formArray;
  }

  onSubmit(){
    this.isSubmitted=true;
    if(this.employeeForm.valid){
      this.isSubmitted=false;
    }
    else{
      this.logValidationErrors();
    }

    console.log(this.employeeForm)
  }

}

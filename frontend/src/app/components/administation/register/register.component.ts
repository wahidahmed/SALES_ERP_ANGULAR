import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidatiors } from 'src/app/helpers/custom.validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

registerForm:FormGroup;
validation_Messge={
  UserName:[{type:'required',message:'User Name is required'}]
  ,Email:[{type:'emailDomain',message:'email must be "gmail.com" domain'}]
  ,Password:[{type:'required',message:'Password is required'},{type:'minlength',message:'atleast 3 charachters are required'}]
  ,ConfirmPassword:[{type:'required',message:'ConfirmPassword is required'},{type:'misMatch',message:'ConfirmPassword is mismatched'}]
  // ,PasswordGroup:[{type:'misMatch',message:'ConfirmPassword is mismatched'}]
}
  ngOnInit() {
    this.registerForm=this.fb.group({
      UserName:[null,[Validators.required]],
      Email:[null,[CustomValidatiors.emailDomain('gmail.com')]],
      PasswordGroup:this.fb.group({
        Password:[null,[Validators.required,Validators.minLength(3)]],
        ConfirmPassword:[null,[Validators.required]]
      },{ validator: CustomValidatiors.passwordMatch })
    })
  }

  get userNameControl():FormControl{
    return this.registerForm.get('UserName') as FormControl;
  }
  get emailControl():FormControl{
    return this.registerForm.get('Email') as FormControl;
  }
  get pwControl():FormGroup{
    return this.registerForm.get('PasswordGroup') as FormGroup;
  }

  get passwordControl():FormControl{
    return this.pwControl.get('Password') as FormControl;
  }
  get conPasswordControl():FormControl{
    return this.pwControl.get('ConfirmPassword') as FormControl;
  }

  onSubmit(){
      console.log(this.registerForm);
  }

}

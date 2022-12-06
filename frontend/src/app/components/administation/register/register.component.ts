import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CustomValidatiors } from 'src/app/helpers/custom.validators';
import { Users } from 'src/app/Models/user';
import { UserRegisterService } from 'src/app/services/user-register.service';
import { IUsers } from 'src/app/interfaces/IUsers';
import { isFakeMousedownFromScreenReader } from '@angular/cdk/a11y';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(private fb: FormBuilder,private userRegisterService:UserRegisterService,private alertifyService:AlertifyService) {}

  registerForm: FormGroup;
  isSubmitted:boolean=false;
  validation_Messge = {
    UserName: [{ type: 'required', message: 'User Name is required' }],
    Email: [
      { type: 'emailDomain', message: 'email must be "gmail.com" domain' },
    ],
    Password: [
      { type: 'required', message: 'Password is required' },
      { type: 'minlength', message: 'atleast 3 charachters are required' },
    ],
    ConfirmPassword: [
      { type: 'required', message: 'ConfirmPassword is required' },
    ],
    PasswordGroup: [
      { type: 'misMatch', message: 'ConfirmPassword is mismatched' },
    ],
  };
  ngOnInit() {
    this.registerForm = this.fb.group({
      UserName: [null, [Validators.required]],
      Email: [null, [CustomValidatiors.emailDomain('gmail.com')]],
      PasswordGroup: this.fb.group(
        {
          Password: [null, [Validators.required, Validators.minLength(3)]],
          ConfirmPassword: [null, [Validators.required]],
        },
        { validator: CustomValidatiors.passwordMatch }
      ),
    });
  }

  get userNameControl(): FormControl {
    return this.registerForm.get('UserName') as FormControl;
  }
  get emailControl(): FormControl {
    return this.registerForm.get('Email') as FormControl;
  }
  get pwControl(): FormGroup {
    return this.registerForm.get('PasswordGroup') as FormGroup;
  }

  get passwordControl(): FormControl {
    return this.pwControl.get('Password') as FormControl;
  }
  get conPasswordControl(): FormControl {
    return this.pwControl.get('ConfirmPassword') as FormControl;
  }

  userData  =new  Users();
  onSubmit() {
    this.isSubmitted=true;
    if(this.registerForm.valid){

      console.log('registerForm',this.registerForm);
      this.userData.UserName=this.registerForm.value.UserName;
      this.userData.Password=this.registerForm.value.PasswordGroup.Password;
    this.alertifyService.confirm("are you sure to save?",r=>{
          this.userRegisterService.AddNewUser(this.userData).subscribe(
            (res:IUsers)=>{
              console.log('res',res);
              this.alertifyService.success('save successfull');
            },
            err=>{
              console.log('err',err);
              this.alertifyService.error(err.error)
            }
          )
    })


      this.isSubmitted=false;
    }
  }
}

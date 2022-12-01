import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertifyService } from 'src/app/services/alertify.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder,private alertifyService:AlertifyService,private authService:AuthService) { }

  type:string='password';
  isText:boolean=false;
  eye:string='fa-eye-slash';
  loginForm:FormGroup;

  ngOnInit() {
    this.loginForm=this.fb.group({
      userName:[null,[Validators.required]],
      password:[null,[Validators.required]]
    })

    this.getAllUsers();
  }

  get userNameControl():FormControl{
    return this.loginForm.get('userName') as FormControl;
  }

  get passwordControl():FormControl{
    return this.loginForm.get('password') as FormControl;
  }

  hideShowEye(){
    this.isText=!this.isText;
    console.log(this.isText);
    this.isText?this.eye='fa-eye':this.eye='fa-eye-slash';
    this.isText?this.type='text':this.type='password';
  }

  private validateAllFormsField(fg:FormGroup){
    Object.keys(fg.controls).forEach(fields=>{
      const control=fg.get(fields);
      if(control instanceof FormControl){
        control.markAsDirty({onlySelf:true});
      }
      else if(control instanceof FormGroup){
        this.validateAllFormsField(control);
      }
    })
  }

  getAllUsers(){
    return this.authService.getAllUsers().subscribe(x=>{
      console.log(x);
    })
  }

  onSubmit(){
   if(this.loginForm.valid){
   this.alertifyService.success('login successfull');
   }
   else{
    this.validateAllFormsField(this.loginForm);
    this.alertifyService.error('failed to login');
   }
  }
}

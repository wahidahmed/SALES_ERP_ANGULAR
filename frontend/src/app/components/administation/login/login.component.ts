import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Users } from 'src/app/Models/user';
import { AlertifyService } from 'src/app/services/alertify.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder,private alertifyService:AlertifyService,private authService:AuthService,private router:Router) { }

  type:string='password';
  isText:boolean=false;
  eye:string='fa-eye-slash';
  loginForm:FormGroup;

  ngOnInit() {
    this.loginForm=this.fb.group({
      UserName:[null,[Validators.required]],
      Password:[null,[Validators.required]]
    })


  }

  get userNameControl():FormControl{
    return this.loginForm.get('UserName') as FormControl;
  }

  get passwordControl():FormControl{
    return this.loginForm.get('Password') as FormControl;
  }

  hideShowEye(){
    this.isText=!this.isText;
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



  onSubmit(){
   if(this.loginForm.valid){
    this.authService.authUser(this.loginForm.value).subscribe((res:Users)=>{
      console.log(res);
      localStorage.setItem('token',res.Token);
      localStorage.setItem('userName',res.UserName)
      this.alertifyService.success('login successfull');
      this.router.navigate(['/']);
    },
    // err=>{ now it is handle by global error sevice in
    //   console.log('err',err);
    //   this.alertifyService.error('error:'+err.error+'');
    // }
    );

   }
   else{
    this.validateAllFormsField(this.loginForm);
    this.alertifyService.error('failed to login');
   }
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  ,Password:[{type:'required',message:'Password is required'},{type:'minlength',message:'atleast 3 charachters are required'}]
  ,ConfirmPassword:[{type:'required',message:'ConfirmPassword is required'}]
}
  ngOnInit() {
    this.registerForm=this.fb.group({
      UserName:[null,[Validators.required]],
      Email:[null,[]],
      PW:this.fb.group({
        Password:[null,[Validators.required,Validators.minLength(3)]],
        ConfirmPassword:[null,[Validators.required]]
      })
    })
  }

  onSubmit(){
      console.log(this.registerForm);
  }

}

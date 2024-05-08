import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/Services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private accounServ:AccountService ,private myRouter:Router){}
   myForm:FormGroup=new FormGroup({
    username:new FormControl(),
    password:new FormControl()
   })
   submit(e:Event){
     e.preventDefault();
     if(this.myForm.valid){
         this.accounServ.Login(this.myForm.value.username,this.myForm.value.password);
         this.myRouter.navigate(['/products'])
     }
   }
   redirectTologin(){
    this.myRouter.navigate(['/register'])
   }
}
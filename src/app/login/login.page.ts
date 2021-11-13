import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';
import {  Router }from '@angular/router';
import { AlertController,NavController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formularioLogin:FormGroup

  constructor(public formBuilder:FormBuilder,public alertController:AlertController,
    public navControl:NavController) { 
      this.formularioLogin=this.formBuilder.group({
        'email': new FormControl('',Validators.compose([
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
        ])),
        'password': new FormControl('',Validators.required)
      })
    }

  ngOnInit() {
  }

}

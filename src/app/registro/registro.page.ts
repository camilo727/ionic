import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';
import {  Router }from '@angular/router';
import { AlertController,NavController } from '@ionic/angular';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  formularioRetro:FormGroup;
  constructor(public formBuilder:FormBuilder,public alertController:AlertController,
    public navControl:NavController) {
      this.formularioRetro=this.formBuilder.group({
        'email': new FormControl('',Validators.compose([
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
        ])),
        'password': new FormControl('',Validators.required),
        'Confirmarpassword': new FormControl('',Validators.required)
      })
     }

  ngOnInit() {
  }
  async guardar(){
    if(this.formularioRetro.valid!=false){
      var formRegistro= this.formularioRetro.value;
      var user = {
        email:formRegistro.email,
        password:formRegistro.password,
        Confirmarpassword:formRegistro.Confirmarpassword
      }
      localStorage.setItem('user',JSON.stringify(user))
    }
    else{
      const alert= await this.alertController.create({
        message:'debe ingresar email y password',
        buttons:['Ok']
      });
      await alert.present();
    }
  }

}

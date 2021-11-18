import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { AlertController,NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formularioLogin: FormGroup;

  constructor(
    public fb: FormBuilder,
    public alertController: AlertController,
    public navController: NavController
  ) {
    this.formularioLogin = this.fb.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {}

  async ingresar() {
    const date = this.formularioLogin.value;

    const usuario = JSON.parse(localStorage.getItem('usuario'));

    if (usuario.email === date.email && usuario.password === date.password) {
      //alert('Has ingresado correctamente ✔');
      console.log('Has ingresado correctamente ✔');
      this.navController.navigateRoot('/home');
      localStorage.setItem('ingresado', 'true');
    } else {
      const alert = await this.alertController.create({
        header: 'Datos incorrectos',
        message: 'Los datos que ingresaste son incorrectos ❌',
        buttons: ['Aceptar'],
      });

      await alert.present();
    }
  }

}

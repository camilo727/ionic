import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  formularioRegistro: FormGroup;

  constructor(public fb: FormBuilder, public alertController: AlertController) {
    this.formularioRegistro = this.fb.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirmacionPassword: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {}

  async guardar() {
    // Obtener los valores de nuestro formulario
    const date = this.formularioRegistro.value;

    // Configuramos la alerta, lo que queremos mostrar y el tipo de alerta
    if (this.formularioRegistro.invalid) {
      const alert = await this.alertController.create({
        header: 'Datos incompletos',
        message: 'Tienes que llenar todos los datos',
        buttons: ['Aceptar'],
      });

      await alert.present();
      return;
    }

    // Si el formulario es valido, se crea un obeto usuario
    // Que sirve para guardar los atributos de los que
    // queremos obtener el valor (email y password).
    const usuario = {
      email: date.email,
      password: date.password,
    };

    localStorage.setItem('usuario', JSON.stringify(usuario));
  }
}

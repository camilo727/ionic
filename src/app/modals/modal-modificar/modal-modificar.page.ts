import { Component, OnInit } from '@angular/core';
import { api } from '../../interfaces/api';
import { ApiService } from '../../api.service';
import { Router } from '@angular/router';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { AlertController,NavController } from '@ionic/angular';


@Component({
  selector: 'app-modal-modificar',
  templateUrl: './modal-modificar.page.html',
  styleUrls: ['./modal-modificar.page.scss'],
})
export class ModalModificarPage implements OnInit {
  nombre = new FormControl('');
  form = new FormGroup({
    titulo: new FormControl(''),
  });
  constructor(private taskService: ApiService,  public navController: NavController) {
  }

  ngOnInit() {}

  Modificar(datos){
    const task = {
      id: datos.id,
      userId: '1',
      title: this.form.controls.titulo.value,
      completed: true
    };
    //const usuario = JSON.parse(task);
   // console.log(usuario);
   this.taskService.updateTask(task)
   .subscribe(todo => {
     console.log(todo);
     this.navController.navigateRoot('home');
   });
  }
  cambiarNombre(){
    this.nombre.setValue('Ornitorrinco');
    //console.log(.value);
  }
}

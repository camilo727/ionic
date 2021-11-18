import { Component } from '@angular/core';
import { api } from './../interfaces/api';
import { ApiService } from '../api.service';
import { ModalController, NavController } from '@ionic/angular';
import { ModalDetallePage } from '../modals/modal-detalle/modal-detalle.page';
import { ModalModificarPage } from '../modals/modal-modificar/modal-modificar.page';
import {
  FormGroup,
  FormControl
} from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  form = new FormGroup({
    titulo: new FormControl(''),
  });
  constructor(
    private taskService: ApiService,
    public modalController: ModalController, 
    public navController: NavController
  ) {}
  tasks: api[] = [];
  ngOnInit() {
    this.taskService.getAllTasks().subscribe((tasks) => {
      console.log(tasks);
      this.tasks = tasks;
    });
  }
  moficarTitulo(data) {
    console.log(data.title);
    this.ModificarDetalle(data);
  }
  Guardar(){
    
  }
  elminar(data){
    console.log(data.id);
    const id =data.id
    this.taskService.deleteTask(id)
    .subscribe((data) => {
      console.log(data);
      this.navController.navigateRoot('/home');
    });
  }
  Verdealles(data) {
    const id =data.id;
    this.taskService.getTask(id)
    .subscribe((task) => {
      
      this.ModalDetalle(task);
    });
    
  }
  async ModalDetalle(task) {
    const modal = await this.modalController.create({
      component: ModalDetallePage,
      componentProps: {
        data: task,
      },
    });
    return await modal.present();
  }
  async ModificarDetalle(data) {
    const modal = await this.modalController.create({
      component: ModalModificarPage,
      componentProps: {
        datos: data,
      },
    });
    return await modal.present();
  }
}

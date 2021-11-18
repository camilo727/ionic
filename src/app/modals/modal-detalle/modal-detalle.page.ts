import { Component, OnInit } from '@angular/core';
import { ApiUser } from '../../interfaces/api-user';
import { ApiService } from '../../api.service';
@Component({
  selector: 'app-modal-detalle',
  templateUrl: './modal-detalle.page.html',
  styleUrls: ['./modal-detalle.page.scss'],
})
export class ModalDetallePage implements OnInit {

  constructor(private taskService: ApiService) { }

  ngOnInit() {
    
  }

}

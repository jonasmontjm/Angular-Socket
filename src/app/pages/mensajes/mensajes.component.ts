import { Component, OnInit } from '@angular/core';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent implements OnInit {

  public usuario_mensaje;

  constructor(public wsService: WebsocketService) {
    this.usuario_mensaje = this.wsService.usuario.nombre;

  }

  ngOnInit() {
  }

}

import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  public socketStatus = false;

  constructor(
    private socket: Socket
    ) {
    this.checkStatus();
  }

  checkStatus() {
    this.socket.on('connect', () => {
      console.log('Conectado al Servidor');
      this.socketStatus = true;
    });

    this.socket.on('disconnect', () => {
      console.log('desConectado al Servidor');
      this.socketStatus = false;
    });




  }

  emit(evento: string, payload?: any, callback?: Function) {
      this.socket.emit(evento, payload, callback);
  }

  listen(evento: string) {
    return this.socket.fromEvent( evento );
  }
}

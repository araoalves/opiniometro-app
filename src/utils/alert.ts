import {AlertController } from 'ionic-angular';
import {Injectable} from '@angular/core';

@Injectable()
export class Alert {

    public constructor(public alerta: AlertController){

    }

 showAlert(mensagem: string) {
    let alert = this.alerta.create({
      title: 'Mensagem!',
      subTitle: mensagem,
      buttons: ['OK']
    });
    alert.present();
  }

}
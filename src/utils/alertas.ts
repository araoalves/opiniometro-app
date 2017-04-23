import {AlertController, ToastController} from 'ionic-angular';
import {Injectable} from '@angular/core';

@Injectable()
export class Alertas {

    public constructor(public alerta: AlertController, public toastCtrl: ToastController){

    }

 showAlert(mensagem: string) {
    let alert = this.alerta.create({
      title: 'Mensagem!',
      subTitle: mensagem,
      buttons: ['OK']
    });
    alert.present();
  }

  showToast(position: string, mensagem: string) {
    let toast = this.toastCtrl.create({
      message: mensagem,
      duration: 5000,
      position: position
    });

    toast.present(toast);
  }

}
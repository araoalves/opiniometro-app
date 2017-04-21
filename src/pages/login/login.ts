import { Component } from '@angular/core';
import {AlertController } from 'ionic-angular';
import {Alert} from '../../utils/alert';
import {Utils} from '../../utils/utils';
import {LoginService} from '../../services/LoginService';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [Alert,LoginService,Utils]
})

export class Login {

  private user: string = '';
  private senha: string = '';

  constructor(
        public alert: AlertController, 
        public alerta: Alert, 
        public loginService: 
        LoginService, 
        public utils: Utils) {
          
        }

  logar( alert: AlertController){
    if(this.user == ''){
        this.alerta.showAlert("Favor digitar o usuário");
    }else if(this.senha == ''){
        this.alerta.showAlert("Favor digitar a senha");
    }else{         
        this.loginService.recuperarUsuario(this.user, this.senha);
    }
  } 

}

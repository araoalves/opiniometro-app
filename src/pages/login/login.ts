import { Component } from '@angular/core';
import {AlertController } from 'ionic-angular';
import {Alert} from '../../utils/alert';
import {LoginService} from '../../services/LoginService';
import {Usuario} from '../../models/Usuario';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [Alert,LoginService]
})

export class Login {

  private user: string = '';
  private senha: string = '';
  //public usuario: Usuario;
  returnUrl: string;

  constructor(public alert: AlertController, public alerta: Alert, public loginService: LoginService) {

  }

  logar( alert: AlertController){
    if(this.user == ''){
        this.alerta.showAlert("Favor digitar o usuário");
    }else if(this.senha == ''){
        this.alerta.showAlert("Favor digitar a senha");
    }else{         

        

         this.loginService.recuperarUsuario(this.user);


        var retrievedObject = localStorage.getItem('usuario');

        console.log('usuario: ', JSON.parse(retrievedObject)); 


        var usuario = JSON.parse(retrievedObject);

        console.log(usuario[0]['empresa_cnpj']+" Usuário: "+usuario[0]['usuario']);

    }
  }

}

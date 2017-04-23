import { Component } from '@angular/core';
import {AlertController } from 'ionic-angular';
import {Alert} from '../../utils/alert';
import {Utils} from '../../utils/utils';
import {LoginService} from '../../services/services_pages/LoginService';
import 'rxjs/add/operator/catch';
import { FormBuilder, FormGroup, Validators, AbstractControl } from "@angular/forms";
import { CustomValidators } from "../../services/validacoes/custom-validators";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [Alert,LoginService,Utils]
}) 

export class Login {

  private usuario: AbstractControl;
  private senha: AbstractControl;
  
  loginForm: FormGroup;

  constructor(
        public alert: AlertController, 
        public alerta: Alert, 
        public loginService: 
        LoginService, 
        public utils: Utils,
        public fb: FormBuilder) {

  this.loginForm = fb.group({
      'usuario': [
        '',
        Validators.compose([Validators.required, CustomValidators.usernameValidator])
      ],

      'senha': [
        '',
        Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(16),
          CustomValidators.passwordValidator, CustomValidators.noEmptyWhiteSpace])
      ]
    });

    this.usuario = this.loginForm.controls['usuario'];
    this.senha = this.loginForm.controls['senha'];
          
  }

  signin(form: any) {
    this.loginService.recuperarUsuario(form.usuario, form.senha);
  }

}

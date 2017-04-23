import {Services} from '../../services/configuracoes/Services';
import {Injectable} from '@angular/core';
import {Http, URLSearchParams} from '@angular/http';
import {Usuario} from '../../models/Usuario';
import {Alert} from '../../utils/alert';
import {Utils} from '../../utils/utils';
import {md5} from '../../utils/md5';
import {Principal} from '../../pages/principal/principal';
import { NavController, LoadingController } from 'ionic-angular';

@Injectable()
export class LoginService extends Services<Usuario>{
    
    constructor(_http:Http, public alerta: Alert, public utils: Utils, public navCtrl: NavController, public loadingCtrl: LoadingController){
        super(_http);
    }

    recuperarUsuario(user: string, senha: string){   
         let loading = this.loadingCtrl.create({
        content: 'Carregando...'
      });                 
        
        let param = new URLSearchParams();       
        param.set("token","e10adc3949ba59abbe56e057f20f883e");
        param.set("user",user);

        loading.present().then(() =>{

         return this.postObject(this.RECUPERAR_USUARIO, param)
            .subscribe(result => {
                
               localStorage.removeItem('usuario');

                if(result){
                    localStorage.setItem('usuario',JSON.stringify(result))

                    var retrievedObject = localStorage.getItem('usuario');

                    var usuario = JSON.parse(retrievedObject);

                    if(this.utils.isEmpty(usuario)){
                         this.alerta.showAlert("Usuário não encontrado.");
                    }else{
                         if(usuario[0]['usuario_senha'] == md5(senha)){
                            if(usuario[0]['usuario_permissao'] == '3'){
                                if(usuario[0]['empresa_status'] == '1'){
                                    this.navCtrl.push(Principal);
                                }else{
                                    this.alerta.showAlert("A licença da Empresa "+usuario[0]['empresa_descricao']+" para acesso ao aplicativo esta expirada...");       
                                }
                            }else{
                                this.alerta.showAlert("Este usuário não tem permissão para acessar o aplicativo, favor entrar em contato com seu supervisor para liberar acesso.");
                            }
                         }else{
                             this.alerta.showAlert("Senha incorreta.");
                         }
                    }

                }
                loading.dismiss();
            });  
        });
        
    }
    
} 
import {Services} from '../../services/configuracoes/Services';
import {Injectable} from '@angular/core';
import {Http, URLSearchParams} from '@angular/http';
import {Usuario} from '../../models/Usuario';
import { NavController, LoadingController } from 'ionic-angular';
import { Alertas } from '../../utils/alertas';

@Injectable()
export class PrincipalService extends Services<Usuario>{
    
    constructor(_http:Http, public navCtrl: NavController, public loadingCtrl: LoadingController, public alertas: Alertas){
        super(_http);
    }

    cadastrarOpiniao(opiniaoUsuario: string, opiniaoTipo: string, opiniaoEmpresa: string){   
        let loading = this.loadingCtrl.create({
            content: 'Carregando...'
        });                 
        
        let param = new URLSearchParams();       
        param.set("token","e10adc3949ba59abbe56e057f20f883e");
        param.set("opiniao_usuario", opiniaoUsuario);
        param.set("opiniao_tipo", opiniaoTipo);
        param.set("opiniao_empresa", opiniaoEmpresa);

        loading.present().then(() =>{

         return this.postObject(this.CADASTRAR_OPINIAO, param)
            .subscribe(result => {
                console.log(result['scalar']);
                if(result['scalar'] == true){
                    this.alertas.showToast('middle','Obrigado por sua opinião, ela é muito importante para nós. Opinião cadastrada com sucesso.');
                }else{
                    this.alertas.showToast('middle','Erro ao cadastrar Opinião.');
                }
                loading.dismiss();
            });  
        });

    }
   
} 
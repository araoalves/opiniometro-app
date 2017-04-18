import {Services} from '../services/Services';
import {Injectable} from '@angular/core';
import {Http, URLSearchParams} from '@angular/http';
import {Usuario} from '../models/Usuario';

@Injectable()
export class LoginService extends Services<Usuario>{
    
    constructor(_http:Http){
        super(_http);
    }

    recuperarUsuario(user: string): Usuario[]{      
        debugger;
        let usuario: Usuario[] = [];

        let param = new URLSearchParams();       
        param.set("token","e10adc3949ba59abbe56e057f20f883e");
        param.set("user",user);

        this.postObject(this.RECUPERAR_USUARIO, param).subscribe(result => usuario.push(result)); 
        return usuario;
    }
}
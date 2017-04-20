import {Services} from '../services/Services';
import {Injectable} from '@angular/core';
import {Http, URLSearchParams} from '@angular/http';
import {Usuario} from '../models/Usuario';

@Injectable()
export class LoginService extends Services<Usuario>{
    
    private usuario: Usuario;

    constructor(_http:Http){
        super(_http);
    }

    recuperarUsuario(user: string){                    
        
        //localStorage.removeItem('usuario');

        let param = new URLSearchParams();       
        param.set("token","e10adc3949ba59abbe56e057f20f883e");
        param.set("user",user);

         return this.postObject(this.RECUPERAR_USUARIO, param)
            .subscribe(result => {
                localStorage.removeItem('usuario');
                localStorage.setItem('usuario',JSON.stringify(result))
            });                 
    }

    recuperarUsuariosPost(){        


        let param = new URLSearchParams();       
        param.set("id","1");

       return this.postObject(this.RECUPERAR_USUARIO, param)
            .subscribe(/*result => usuario = result result => console.log(result)*/ result => localStorage.setItem('usuario',JSON.stringify(result))); 
            //var testObject = { 'one': 1, 'two': 2, 'three': 3 };
            //localStorage.setItem('lol',JSON.stringify(testObject))
        //console.log(usuario);

    }
} 
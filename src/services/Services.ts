import {ServiceConfiguration} from './ServiceConfiguration';
import { Injectable } from '@angular/core';
import {Http, Response, Headers, URLSearchParams,RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

/**
 * @author - Arão Alves de Farias
 * @since - 07/03/2017
 * @class - Service.ts
 * @see - ServiceConfiguration
 * 
 * CLASSE GENÉRICA PARA CONSUMO DE SERVIÇOS EXTERNOS, AQUI SERÁ ENCONTRADO DOIS MÉTODOS ESPECIAIS (getResult() e postObject())
 * QUE SÃO RESPONSÁVEIS POR REALIZAR AS REQUISIÇÕES GET E POST PARA A URL CONFIGURADA NO ServiceConfiguration.
 */

@Injectable()
export class Services<T> extends ServiceConfiguration{
    
    constructor(public _http: Http){
        super();
    }

    getResult(serviceRequested:string):Observable<any[]>{        
        return this._http.get(this.getRequestURL(serviceRequested)).map(this._extractData).catch(this._handleError);
    }

     postObject(serviceRequested:string,urlSearchParams: URLSearchParams): Observable<any>{
         return this._http.post(this.getRequestURL(serviceRequested),urlSearchParams, this.getRequestOptions())   
         .map(this._extractData)
         .catch(this._handleError);
    }

     postObject2(serviceRequested:string,urlSearchParams: URLSearchParams){
         return this._http.post(this.getRequestURL(serviceRequested),urlSearchParams, this.getRequestOptions())
            .toPromise()
		 	.then(this._extractData)
		 	.catch(this._handleError);
    }

     private _extractData(res:Response){
        let data = res.json();
        return data;
    }

     private _handleError (error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
            console.error(errMsg);
            return Observable.throw(errMsg);
    }

   private getRequestOptions() {
        const headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded', 'X-XSRF-TOKEN': this.getXsrfToken()});
        return new RequestOptions({headers: headers});
  }

  getXsrfToken () {
    var cookies = document.cookie.split(';');
    var token = '';
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].split('=');
        if(cookie[0] == 'XSRF-TOKEN') {
            token = decodeURIComponent(cookie[1]);
        }
    }
    return token;
}

}
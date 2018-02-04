export class ServiceConfiguration{
    
    //private _url:string = "http://localhost/";
    //private _url:string = "http://www.nodeti.com.br/";
    //private _api:string = "BIT/opiniometro/api/";
    //private _api:string = "opiniometro/api/";
    private _url:string = "http://opiniometro.nodeti.com.br/";
    private _api:string = "api/";

    public RECUPERAR_USUARIO: string = "login"
    public CADASTRAR_OPINIAO: string = 'cadastro/cadastrarOpiniao';

    getRequestURL(service: string):string{
      console.log("Requested URI: "+this._url+this._api+service);
      return this._url+this._api+service;
  }
}
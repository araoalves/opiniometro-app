export class ServiceConfiguration{
    
    //private _url:string = "http://localhost:85/";
    private _url:string = "http://www.nodeti.com.br/";
    //private _api:string = "GIT/opiniometro/api/";
    private _api:string = "opiniometro/api/";

    public RECUPERAR_USUARIO: string = "login"
    public CADASTRAR_OPINIAO: string = 'cadastro/cadastrarOpiniao';

    getRequestURL(service: string):string{
      console.log("Requested URI: "+this._url+this._api+service);
      return this._url+this._api+service;
  }
}
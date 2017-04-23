export class ServiceConfiguration{
    
    //private _url:string = "http://localhost:85/";
    private _url:string = "http://www.nodeti.com.br/";
    //private _api:string = "GIT/opiniometro/";
    private _api:string = "opiniometro/";
    //private _tokenApplication:string = "1234567890";

    public SISTEMA_GERENCIADOR_API_LOGAR: string = "recuperarEmpresasPost";
    public SISTEMA_GERENCIADOR_API_RECUPERAR_EMPRESAS: string = "recuperarEmpresas?id=1";

    public RECUPERAR_USUARIO: string = "api/login/logar"

    getRequestURL(service: string):string{
      console.log("Requested URI: "+this._url+this._api+service);
      return this._url+this._api+service;
  }
}
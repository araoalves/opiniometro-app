import { Component } from '@angular/core';

@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html'
})

export class Principal {
  private usuario: string = '';
  private empresa:string = '';

  constructor(){
     var retrievedObject = localStorage.getItem('usuario');
     var usuario = JSON.parse(retrievedObject);
     this.usuario = usuario[0]['usuario'];
     this.empresa = usuario[0]['empresa_descricao']; 
  }
}

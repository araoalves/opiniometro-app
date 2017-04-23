import { Component } from '@angular/core';
import { PrincipalService } from '../../services/services_pages/PrincipalService';

@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
  providers: [PrincipalService]
})

export class Principal {
  
  private user: any;

  constructor(public principalService: PrincipalService){
     var retrievedObject = localStorage.getItem('usuario');
     this.user = JSON.parse(retrievedObject);
  }

  cadastrarOpiniaoOtimo(){    
    this.principalService.cadastrarOpiniao(this.user[0]['usuario_id'],'1',this.user[0]['empresa_id']);
  }

  cadastrarOpiniaoBom(){    
    this.principalService.cadastrarOpiniao(this.user[0]['usuario_id'],'2',this.user[0]['empresa_id']);
  }

  cadastrarOpiniaoRegular(){    
    this.principalService.cadastrarOpiniao(this.user[0]['usuario_id'],'3',this.user[0]['empresa_id']);
  }

  cadastrarOpiniaoRuim(){    
    this.principalService.cadastrarOpiniao(this.user[0]['usuario_id'],'4',this.user[0]['empresa_id']);
  }

  cadastrarOpiniaoPessimo(){    
    this.principalService.cadastrarOpiniao(this.user[0]['usuario_id'],'5',this.user[0]['empresa_id']);
  }

}

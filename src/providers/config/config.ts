import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

//configura constante para acesso local ao nome do objeto
let configKeyName = "config";
  

@Injectable()
export class ConfigProvider {
  
  //objeto config com parametros
  private config = {
    showSlide: false,
    name: "",
    userName: ""
  }

  constructor(public http: Http) {
    
  }

  //getters and setters do config data

  //configura os dados do local storage
  getConfigData():any{
    //acessa dados gravados em setConfig
    //busca na localStorage item registrado com o nome config
    return localStorage.getItem(configKeyName);
  }

  //grava os dados da localstorage
  setConfigData(showSlide?: boolean, name?: string, userName?: string){
    let config = {
      showSlide: false,
      name: "",
      userName: ""
    };

    //verifica se showSlide está sendo enviado
    if (showSlide){
      config.showSlide = showSlide;
    }

    //verifica se name está sendo enviado
    if (name){
      config.name = name;
    }

    //verifica se userName está sendo enviado
    if (userName){
      config.userName = userName;
    }

    //grava dados na localStorage
    //converte obj JSON em string para a gravação de dados, localStore, 
    //não permite gravar dados que não sejam String

    localStorage.setItem(configKeyName, JSON.stringify(config));
  }

}

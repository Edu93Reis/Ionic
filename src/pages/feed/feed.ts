import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MovieProvider
  ]
})
export class FeedPage {
  /** **/
  public feed = {
    titulo: "Salvador Dali",
    data: "5 de Novembro de 2017",
    descricao: "Este é o meu primeiro app =D",
    qtLikes: 999,
    qtComments: 1,
    timeComment: "1 hora atrás",
  }

  //
  public listaFilmes = new Array<any>();

  //propriedade (método) que retorna nome do usuário
  public nomeUsuario:String = "Teste";

  public somaNumero(num1:number, num2:number):void{
    alert(num1+num2);
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private MovieProvider: MovieProvider) {
  }

  //executa as funções desejadas
  ionViewDidLoad() {
    this.MovieProvider.getLatestMovies().subscribe(
      //avisa caso solicitação de dados de um site tenha sido efetuada com sucesso
      data => {
        // converte objeto data para qualque tipo
        const response = (data as any);
        //JSON.parse --> converte o texto em JSON
        const obj_retorno = JSON.parse(response._body);
        //obj_retorno acessa listagem de filmes populares do site e lista com .results
        this.listaFilmes = obj_retorno.results;

        console.log(obj_retorno);
      },
      //alerta de erros
      error => {
        console.log(error);
      }

    )
  }

}

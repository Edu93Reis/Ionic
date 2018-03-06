import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {

  private baseApiPath = "https://api.themoviedb.org/3";
  private api = "6094e324e5ccbac844e07862ba287d13";

  constructor(public http: Http) {
    console.log('Hello MovieProvider Provider');
  }

  public getLatestMovies() {
    return this.http.get(this.baseApiPath + "/movie/popular?api_key=" + this.getApiKey());
  }

  getApiKey(): String{    
    return this.api;
  }
}

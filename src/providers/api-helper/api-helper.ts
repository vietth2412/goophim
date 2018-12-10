import { API_URL } from './../../config/constant';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApiHelperProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiHelperProvider {

  constructor(public http: HttpClient) {

  }
  getDetailFilm(href: string) {
    let url = `${API_URL}/get.php?url=${href}`;
    return new Promise((resolve, reject) => {
      this.http.get(url).subscribe(res => {
        resolve(res);
      }, err => {
        reject(err);
      })
    })
  }
  getHome(server) {
    let url = `${API_URL}/gethome.php?sv=${server}`;
    return new Promise((resolve, reject) => {
      this.http.get(url).subscribe(res => {
        resolve(res);
      }, err => {
        reject(err);
      })
    })
  }

}

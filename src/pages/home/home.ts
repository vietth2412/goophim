import { DetailsPage } from './../details/details';
import { SERVER_FILM } from './../../config/constant';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
const test: any = [{ "api": "goophimv1.0", "data": [{ "href": "bilutv-phim-song-the-sung-phi-the-eternal-love-2017-5567", "title": "Song Th\u1ebf S\u1ee7ng Phi", "title-vn": "Song Th\u1ebf S\u1ee7ng Phi", "title-en": "The Eternal Love (2017)", "image": "http:\/\/media.bilutv.net\/uploads\/2017\/07\/150\/song-the-sung-phi-201707150.jpg", "server": "Bilutv" }, { "href": "bilutv-phim-song-the-sung-phi-2-the-eternal-love-2-2018-7424", "title": "Song Th\u1ebf S\u1ee7ng Phi 2", "title-vn": "Song Th\u1ebf S\u1ee7ng Phi 2", "title-en": "The Eternal Love 2 (2018)", "image": "http:\/\/media.bilutv.net\/uploads\/2018\/10\/150\/song-the-sung-phi-2-2018-201810576.jpg", "server": "Bilutv" }], "server": "Bilutv" }]
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  keySearch: string = '';
  SERVER_FILM = SERVER_FILM;
  serverPicked: string = 'PM';
  listFilm: any = [];
  constructor(public navCtrl: NavController) {
    this.listFilm = test[0].data;
    console.log(this.listFilm);

  }
  clearSearch() {
    this.keySearch = '';
  }
  gotoDetail(film) {
    this.navCtrl.push(DetailsPage, { data: film });
  }

}

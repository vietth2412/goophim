import { ApiHelperProvider } from './../../providers/api-helper/api-helper';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
  filmInfo: any = {
    title: null
  };
  constructor(public navCtrl: NavController, public navParams: NavParams, private _api: ApiHelperProvider) {
  }

  ionViewDidLoad() {
    this.filmInfo = this.navParams.get('data');
    console.log(this.filmInfo);
    this.getContentFilm(this.filmInfo.href);
  }
  getContentFilm(href) {
    this._api.getDetailFilm(href).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    })
  }
}

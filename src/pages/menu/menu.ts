import { LoginPage } from './../login/login';
import { SobrePage } from './../sobre/sobre';
import { ImcPage } from './../imc/imc';
import { ExerciciosPage } from './../exercicios/exercicios';
import { CronometroPage } from './../cronometro/cronometro';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RotaPage } from '../rota/rota';
import { CronometroInicioPage } from '../cronometro-inicio/cronometro-inicio';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }
  rota(){
    this.navCtrl.push(RotaPage);
  }
  exercicios(){
    this.navCtrl.push(ExerciciosPage);
  }
  imc(){
    this.navCtrl.push(ImcPage);
  }
  sobre(){
    this.navCtrl.push(SobrePage);
  }
  sair(){
    this.navCtrl.push(LoginPage);
  }
  cronometro(){
    this.navCtrl.push(CronometroInicioPage);
  }
}


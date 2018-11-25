import { MenuPage } from './../menu/menu';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {UsuarioServiceProvider} from '../../providers/usuario-service/usuario-service';


import { HomePage } from './../home/home';

/**
 * Generated class for the ResultadoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
export class Exercicio{
  exercicio: string;
  tempo: string;
}

@IonicPage()
@Component({
  selector: 'page-resultado',
  templateUrl: 'resultado.html',
})
export class ResultadoPage {

  exercicio: Exercicio = new Exercicio();

  constructor(public navCtrl: NavController, public navParams: NavParams, public service : UsuarioServiceProvider) {
    this.exercicio.exercicio=this.navParams.get('exercicio');
    this.exercicio.tempo=this.navParams.get('tempo');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultadoPage');
  }

  salvar(){
    this.service.atualizar(this.exercicio);
    this.navCtrl.setRoot(MenuPage);
  }
  abreHome(){
    this.navCtrl.setRoot(MenuPage);
  }
}

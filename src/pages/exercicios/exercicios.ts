import { MenuPage } from './../menu/menu';
import { CronometroPage } from './../cronometro/cronometro';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the ExerciciosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-exercicios',
  templateUrl: 'exercicios.html',
})
export class ExerciciosPage {
  lista:any[]=[
    {titulo:"abdominal",imagem:"assets/imgs/abdominal.png"},
    {titulo:"corrida",imagem:"assets/imgs/correr.png"},
    {titulo:"agachamento",imagem:"assets/imgs/agachamento.png"},
    {titulo:"flexao",imagem:"assets/imgs/flexao.png"},
    {titulo:"pular",imagem:"assets/imgs/pular.png"},
    {titulo:"barra",imagem:"assets/imgs/barra.png"},
    {titulo:"bambole",imagem:"assets/imgs/bambole.png"},
    {titulo:"natacao",imagem:"assets/imgs/natacao.png"},
    {titulo:"box",imagem:"assets/imgs/Box.png"},
    {titulo:"afundo",imagem:"assets/imgs/afundo.png"}
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExerciciosPage');
  }
  teste(){
    this.navCtrl.setRoot(HomePage);
  }

  comecarTreino(){
    this.navCtrl.push(HomePage);
  }

  abreTreino(item:any){
    this.navCtrl.push(CronometroPage,{exercicio:item});
  }
voltar(){
  this.navCtrl.pop();
}
}

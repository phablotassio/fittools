import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

/**
 * Generated class for the ImcPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-imc',
  templateUrl: 'imc.html',
})
export class ImcPage {
  altura: number;
  peso: number;
  imcValor: number;
  imcMenssagem: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public calculoImc(){
    if(this.peso > 0 && this.altura > 0){
      let finalImc = this.peso / (this.altura * this.altura);
      this.imcValor = parseFloat(finalImc.toFixed(2));
      this.setIMCMenssagem();
    }
  }

  private setIMCMenssagem(){
    if(this.imcValor < 18.5){
      this.imcMenssagem = "abaixo do peso"
    }else{
      if(this.imcValor > 18.5 && this.imcValor <25){
      this.imcMenssagem = "Normal"
  }else{
   if(this.imcValor > 25 && this.imcValor < 30){
      this.imcMenssagem = "Acima do peso"
    }else{
    if(this.imcValor > 30){
      this.imcMenssagem = "Obeso"
    }
  }
  }
  }
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad ImcPage');
  }
  voltar(){
    this.navCtrl.pop();
  }

}

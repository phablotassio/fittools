import { MenuPage } from './../menu/menu';
import { HomePage } from './../home/home';
import { ResultadoPage } from './../resultado/resultado';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the CronometroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cronometro',
  templateUrl: 'cronometro.html',
})
export class CronometroPage {
  static sprint: number;
  dateSprint: string;
  choiceSprint: string;
  static tempo: string = '00:00';
  static intervalo: any;
  static acao: string = 'Pausar';
  static segundos: number = 0;
  static minutos: number = 0;
  static isenabled = true;
  exercicio:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    CronometroPage.sprint = this.navParams.get('sprint');
    this.dateSprint = this.navParams.get('dateSprint');
    this.choiceSprint = this.navParams.get('choiceSprint');
    this.exercicio = this.navParams.get('exercicio');
    }

  start(): void {
    console.log(CronometroPage.sprint);

    CronometroPage.isenabled = false;
    CronometroPage.intervalo = setInterval(function () {
      CronometroPage.segundos += 1;
      if (CronometroPage.segundos===60){
        CronometroPage.minutos++;
        CronometroPage.segundos=0;
      }
      if (CronometroPage.sprint == CronometroPage.minutos) {
        CronometroPage.clean();
      }
      if (CronometroPage.minutos < 10) {
        if (CronometroPage.segundos < 10) {
          CronometroPage.setTempo('0' + CronometroPage.minutos + ':' + '0' + CronometroPage.segundos);
        } else {
          CronometroPage.setTempo('0' + CronometroPage.minutos + ':' + CronometroPage.segundos);
        }
      } else {
        if (CronometroPage.segundos < 10) {
          CronometroPage.setTempo(CronometroPage.minutos + ':' + '0' + CronometroPage.segundos);
        }else{
          CronometroPage.setTempo(CronometroPage.minutos+':'+CronometroPage.segundos);
        }
      }
      console.log(CronometroPage.tempo);
    }, 1000)
  }

  pause(): void {
    switch (CronometroPage.acao) {
      case 'Pausar':
        console.log('pausando');
        clearInterval(CronometroPage.intervalo);
        CronometroPage.acao = 'Continuar';
        break;
      case 'Continuar':
        console.log('continuando');
        CronometroPage.acao = 'Pausar';
        this.start();
        break;
    }

  }

  static clean(): void {
    clearInterval(this.intervalo);
    this.limpaCampos();
    CronometroPage.tempo = '00:00';
    this.isenabled = true;
    CronometroPage.acao = 'Pausar';
  }

  stopAndClean(): void {
    CronometroPage.clean();
  }

  static setTempo(x: string) {
    CronometroPage.tempo = x;
  }

  get tempo(): string {
    return CronometroPage.tempo;
  }

  static limpaCampos() {
    CronometroPage.minutos = 0;
    CronometroPage.segundos = 0;
  }

  get isenabled(){
    return CronometroPage.isenabled;
  }

  get acao(){
    return CronometroPage.acao;
  }

  ionViewDidLeave(){
    CronometroPage.clean();
  }

  abreResultado(){
    this.navCtrl.push(ResultadoPage);
  }
  voltar(){
    this.navCtrl.pop();
  }
}

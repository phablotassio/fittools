import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CronometroInicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cronometro-inicio',
  templateUrl: 'cronometro-inicio.html',
})
export class CronometroInicioPage {

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
    CronometroInicioPage.sprint = this.navParams.get('sprint');
    this.dateSprint = this.navParams.get('dateSprint');
    this.choiceSprint = this.navParams.get('choiceSprint');
    this.exercicio = this.navParams.get('exercicio');
    }

  start(): void {
    console.log(CronometroInicioPage.sprint);

    CronometroInicioPage.isenabled = false;
    CronometroInicioPage.intervalo = setInterval(function () {
      CronometroInicioPage.segundos += 1;
      if (CronometroInicioPage.segundos===60){
        CronometroInicioPage.minutos++;
        CronometroInicioPage.segundos=0;
      }
      if (CronometroInicioPage.sprint == CronometroInicioPage.minutos) {
        CronometroInicioPage.clean();
      }
      if (CronometroInicioPage.minutos < 10) {
        if (CronometroInicioPage.segundos < 10) {
          CronometroInicioPage.setTempo('0' + CronometroInicioPage.minutos + ':' + '0' + CronometroInicioPage.segundos);
        } else {
          CronometroInicioPage.setTempo('0' + CronometroInicioPage.minutos + ':' + CronometroInicioPage.segundos);
        }
      } else {
        if (CronometroInicioPage.segundos < 10) {
          CronometroInicioPage.setTempo(CronometroInicioPage.minutos + ':' + '0' + CronometroInicioPage.segundos);
        }else{
          CronometroInicioPage.setTempo(CronometroInicioPage.minutos+':'+CronometroInicioPage.segundos);
        }
      }
      console.log(CronometroInicioPage.tempo);
    }, 1000)
  }

  pause(): void {
    switch (CronometroInicioPage.acao) {
      case 'Pausar':
        console.log('pausando');
        clearInterval(CronometroInicioPage.intervalo);
        CronometroInicioPage.acao = 'Continuar';
        break;
      case 'Continuar':
        console.log('continuando');
        CronometroInicioPage.acao = 'Pausar';
        this.start();
        break;
    }

  }

  static clean(): void {
    clearInterval(this.intervalo);
    this.limpaCampos();
    CronometroInicioPage.tempo = '00:00'
    this.isenabled = true;
    CronometroInicioPage.acao = 'Pausar';
  }

  stopAndClean(): void {
    CronometroInicioPage.clean();
  }

  static setTempo(x: string) {
    CronometroInicioPage.tempo = x;
  }

  get tempo(): string {
    return CronometroInicioPage.tempo;
  }

  static limpaCampos() {
    CronometroInicioPage.minutos = 0;
    CronometroInicioPage.segundos = 0;
  }

  get isenabled(){
    return CronometroInicioPage.isenabled;
  }

  get acao(){
    return CronometroInicioPage.acao;
  }

  ionViewDidLeave(){
    CronometroInicioPage.clean();
  }

  voltar(){
    this.navCtrl.pop();
  }
}

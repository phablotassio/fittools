import { ExerciciosPage } from './../exercicios/exercicios';
import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { CronometroPage } from '../cronometro/cronometro';

import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public formBuilder: FormBuilder) {
    this.sprintForm = formBuilder.group({
      sprint: ['', Validators.required],
      dateSprint: ['', Validators.required],
      choiceSprint: ['', Validators.min(1)]
    });
  }

  public sprintForm: any;
  sprint: number;
  dateSprint: string;
  choiceSprint: string;

  burn(): void {
    if (this.sprintForm.valid) {
      let toast = this.toastCtrl.create({
        message: "Hora de se exercitar! ;)",
        duration: 2000
      });
      toast.present();
      this.navCtrl.push(CronometroPage, {
        sprint: this.sprint,
        dateSprint: this.dateSprint,
        choiceSprint: this.choiceSprint
      });
    }else{
      let toast = this.toastCtrl.create({
        message: "Preencha todos os campos corretamente!",
        duration: 2000
      });
      toast.present();
    }
  }

  limpaCampos(){
    this.choiceSprint='0';
    this.dateSprint='';
    this.sprint=null;
  }

  ionViewDidLeave(){
    this.limpaCampos();
  }
  voltar(){
    this.navCtrl.pop();
  }
}

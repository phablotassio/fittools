import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';

/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public toastCtrl: ToastController) {
    this.sprintForm = formBuilder.group({
      fNome: ['', Validators.required],
      fSenha: ['', Validators.required],
      fEmail: ['', Validators.min(1)]
    });
  }

  public sprintForm: any;
  nome:string;
  senha:string;
  email:string;

  fCadastrar(): void {
    if (this.sprintForm.valid) {
      let toast = this.toastCtrl.create({
        message: "Validação OK! ;)",
        duration: 2000
      });
      toast.present();      
    }else{
      let toast = this.toastCtrl.create({
        message: "Preencha todos os campos corretamente!",
        duration: 2000
      });
      toast.present();
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }
  voltar(){
    this.navCtrl.pop();
  }
}

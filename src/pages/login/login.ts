import { MenuPage } from './../menu/menu';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { EventEmitter } from 'events';
import { IonicPage, MenuController, NavController, NavParams, List } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';
import { ExerciciosPage } from '../exercicios/exercicios';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, AngularFireList,} from 'angularfire2/database';
import {UsuarioServiceProvider} from '../../providers/usuario-service/usuario-service';
import { from } from 'rxjs';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


export class Exercicio{
  exercicio: string;
  tempo: string;
}

export class Usuario{
  id: number;
  nome: string;
  email: string;
  login: boolean;
  senha: string;
  exercicios: Array<Exercicio>;
}

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  isenabled:boolean = false;
  lista: AngularFireList<any>;
  usuario: Usuario;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController,private fb: Facebook,private fire: AngularFireAuth,public af: AngularFireDatabase, public service : UsuarioServiceProvider) {
    this.lista = this.af.list('/usuarios');
    this.usuario = new Usuario();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    this.menuCtrl.enable(false,'myMenu');
  }

  ionViewWillLeave(){
    this.menuCtrl.enable(true,'myMenu');
  }

  Entrar(){
    this.navCtrl.setRoot(MenuPage);
  }
    
  loginFb(){

     this.service.loginFb();

     alert("Dentro do Login" +JSON.stringify(this.service.buscarUsuarioLogado()));

   
    // this.fb.login(['public_profile', 'user_photos', 'email', 'user_birthday'])
    //    .then( response => {
    //      const facebookCredential = firebase.auth.FacebookAuthProvider
    //        .credential(response.authResponse.accessToken);
   
    //      firebase.auth().signInAndRetrieveDataWithCredential(facebookCredential)
    //        .then( success => { 
    //          let userAtual;
    //          let usuario = new Usuario();
    //          usuario.nome = success.additionalUserInfo.profile["name"];
    //          usuario.email = success.additionalUserInfo.profile["email"];
    //          usuario.id = success.additionalUserInfo.profile["id"];
    //         this.service.usuarioCadastrado(usuario.id).then(us =>{
    //           this.usuario=us;
    //         });

    //         //alert("pedacaozera"+JSON.stringify(this.usuario));

    //          //alert("Login Efetuado com sucesso: " + JSON.stringify(success.additionalUserInfo.profile)); 
    //        });
   
    //    }).catch((error) => { console.log(JSON.stringify(error)) });

       this.Entrar()
   }  

   

}

import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList,} from 'angularfire2/database';
import { Facebook } from '@ionic-native/facebook';
import firebase from 'firebase/app';
/*
  Generated class for the UsuarioServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
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
  exercicios: Array<Exercicio> = new Array();
}


@Injectable()
export class UsuarioServiceProvider {

  lista: AngularFireList<any>;
  public usuario = new Usuario();

  constructor(public af : AngularFireDatabase,private fb: Facebook) {
    this.lista = this.af.list('/usuarios');
    this.loginFb();
    this.usuario = this.buscarUsuarioLogado();

    console.log('Hello UsuarioServiceProvider Provider');
  }

  public atualizar(exercicio){
    this.usuario.exercicios.push(exercicio);
    firebase.database().ref('/usuarios/' + this.usuario.id)
    .update(this.usuario); 

}

  usuarioCadastrado(id){

    let userAtual;
    firebase.database().ref('usuarios/' + id)
    .once('value')        
    .then(snapshot => snapshot.val())    
    .then(user => userAtual = user);

    return userAtual?userAtual:null;
  }

  

  cadastrar(usuario){
    this.lista.set(usuario.id, usuario).then(() => {
     // this.usuario = new Usuario();
    });
  }

  
   loginFb(){

    let usuario = new Usuario();
    this.fb.login(['public_profile', 'user_photos', 'email', 'user_birthday'])
       .then( response => {
         const facebookCredential = firebase.auth.FacebookAuthProvider
           .credential(response.authResponse.accessToken);
   
         firebase.auth().signInAndRetrieveDataWithCredential(facebookCredential)
           .then( success => { 

             usuario.nome = success.additionalUserInfo.profile["name"];
             usuario.email = success.additionalUserInfo.profile["email"];
             usuario.id = success.additionalUserInfo.profile["id"];
      
             if(!this.usuarioCadastrado(usuario.id)){
              this.cadastrar(usuario);
             }

            this.usuario = usuario;
            alert("Dentro do metodo da service" +JSON.stringify(this.usuario));

          //  alert("ddd"+ JSON.stringify(this.usuario));
           
             //alert("Login Efetuado com sucesso: " + JSON.stringify(success.additionalUserInfo.profile)); 
           });
   
       }).catch((error) => { console.log(JSON.stringify(error))
       });   
    }

    buscarUsuarioLogado(){
      return this.usuario;
    }
 

}

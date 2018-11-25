import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { Facebook } from '@ionic-native/facebook';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';


/**import { stringify } from '@angular/core/src/render3/util';

 * Generated class for the FbPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fb',
  templateUrl: 'fb.html',
})
export class FbPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: Facebook,private fire: AngularFireAuth ) {
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FbPage');
    //  this.fire.auth.getRedirectResult().then(function(result) {
    //   if (result.credential) {
  
    //     // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    //    // var token = result.credential.accessToken;
    //     // ...
    //     result.user != null ? alert("ata" + JSON.stringify(result.additionalUserInfo.profile)) : "";
      
    //   } 
    //   // The signed-in user info.
  
    // }).catch(function(error) {
    //   // Handle Errors here.
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
    //   // The email of the user's account used.
    //   var email = error.email;
    //   // The firebase.auth.AuthCredential type that was used.
    //   var credential = error.credential;
    //   // ...
    // });
    
  }

  loginFb(){


     this.fb.login(['public_profile', 'user_photos', 'email', 'user_birthday'])
        .then( response => {
          const facebookCredential = firebase.auth.FacebookAuthProvider
            .credential(response.authResponse.accessToken);
    
          firebase.auth().signInAndRetrieveDataWithCredential(facebookCredential)
            .then( success => { 
              console.log("Firebase success: " + JSON.stringify(success.additionalUserInfo.profile)); 
            });
    
        }).catch((error) => { console.log(JSON.stringify(error)) });
    }

    // let provider = new firebase.auth.FacebookAuthProvider();
    // provider.addScope('user_birthday, email, public_profile');

    // this.fire.auth
    // .signInWithRedirect(provider);

   

    // this.fire.auth.signInWithRedirect(provider);
    //   this.fire.auth().getRedirectResult().then((result) => {
    //     alert("atazzzzzz" + JSON.stringify(result));
    //   }).catch(function (error) {
    //     alert(JSON.stringify(error));
    //   });


    // this.facebook.login(["email"]).then((loginResponse) => {

    // let credential =  firebase.auth.FacebookAuthProvider.credential(loginResponse.authResponse.accessToken);
    //   firebase.auth().signInWithCredential(credential).then((info) => {
    //     alert(JSON.stringify(info));

    //   });

    // });

    // this.fb.login(['public_profile', 'user_photos', 'email', 'user_birthday'])
    // .then( (res ) => {
     

    //     // The connection was successful
    //     if(res.status == "connected") {
         


    //         // Get user ID and Token
    //         var fb_id = res.authResponse.userID;
    //         var fb_token = res.authResponse.accessToken;

    //         // Get user infos from the API
    //         this.fb.api("/me?fields=name,gender,birthday,email", []).then((user) => {
    //           // alert("Pedacaozera");

    //             // Get the connected user details
    //             var gender    = user.gender;
    //             var birthday  = user.birthday;
    //             var name      = user.name;
    //             var email     = user.email;
    //             alert(email);

    //             console.log("=== USER INFOS ===");
    //             console.log("Gender : " + gender);
    //             console.log("Birthday : " + birthday);
    //             console.log("Name : " + name);
    //             console.log("Email : " + email);

    //             // => Open user session and redirect to the next page

    //         });

    //     } 
    //     // An error occurred while loging-in
    //     else {

    //         console.log("An error occurred...");

    //     }

    // })
    // .catch((e) => {
    //     console.log('Error logging into Facebook', e);
    // });
  //} 

  // test(){
  //   // this.fire.auth.getRedirectResult().then(function(result) {
  //   //   if (result.credential) {
  //   //     // This gives you a Facebook Access Token. You can use it to access the Facebook API.
  //   //     var token = result.credential.accessToken;
  //   //     // ...
  //   //   }
  //   //   // The signed-in user info.
  //   //   var user = result.user;
  //   //   alert(user);
  //   // }).catch(function(error) {
  //   //   // Handle Errors here.
  //   //   var errorCode = error.code;
  //   //   var errorMessage = error.message;
  //   //   // The email of the user's account used.
  //   //   var email = error.email;
  //   //   // The firebase.auth.AuthCredential type that was used.
  //   //   var credential = error.credential;
  //   //   // ...
  //   // });

  // }

  logoutFb(){

    this.fb.logout().then((response) =>{
      console.log(response);
    }).catch((error) => { console.log(JSON.stringify(error)) });
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
    }).catch(function(error) {
      // An error happened.
    });
  }

}

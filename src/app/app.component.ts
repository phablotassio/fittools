import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, MenuController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import firebase from 'firebase';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { FbPage } from '../pages/fb/fb';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;
  @ViewChild(Nav) nav: Nav;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public menuCtrl : MenuController) {
    platform.ready().then(() => {
      
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

    });
  }
  
  openPage(page:string){    
    this.nav.push(page);
    this.menuCtrl.close();
  }

  setRootPage(page:string){    
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }

  openHome(){
    this.nav.push(HomePage);
    this.menuCtrl.close();
  }

  closeMenu(){
    this.menuCtrl.close();
  }
}


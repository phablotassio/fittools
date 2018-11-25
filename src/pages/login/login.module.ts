import { CadastroPageModule } from './../cadastro/cadastro.module';
import { CadastroPage } from './../cadastro/cadastro';

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';

@NgModule({
  declarations: [
    LoginPage,
    CadastroPage

  ],
  imports: [
    IonicPageModule.forChild(LoginPage)
  ],
})
export class LoginPageModule {}


import { HomePage } from './../home/home';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResultadoPage } from './resultado';

@NgModule({
  declarations: [
    ResultadoPage,
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(ResultadoPage),

  ],
})
export class ResultadoPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CronometroInicioPage } from './cronometro-inicio';

@NgModule({
  declarations: [
    CronometroInicioPage,
  ],
  imports: [
    IonicPageModule.forChild(CronometroInicioPage),
  ],
})
export class CronometroInicioPageModule {}

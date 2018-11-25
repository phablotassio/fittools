import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ImcPage } from './imc';
import { BrMaskerModule } from 'brmasker-ionic-3';

@NgModule({
  declarations: [
    ImcPage,
  ],
  imports: [
    IonicPageModule.forChild(ImcPage),
    BrMaskerModule,
  ],
})
export class ImcPageModule {}

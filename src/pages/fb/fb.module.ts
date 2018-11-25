import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FbPage } from './fb';

@NgModule({
  declarations: [
    FbPage,
  ],
  imports: [
    IonicPageModule.forChild(FbPage),
  ],
})
export class FbPageModule {}

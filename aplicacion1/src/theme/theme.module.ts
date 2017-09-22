import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { themePage } from './theme';

@NgModule({
  declarations: [
    themePage,
  ],
  imports: [
    IonicPageModule.forChild(theme),
  ],
})
export class themePageModule {}
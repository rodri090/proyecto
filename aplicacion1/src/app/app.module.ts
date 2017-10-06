import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Pagina2Page } from '../pages/pagina2/pagina2';
import { Pagina3Page }from '../pages/pagina3/pagina3';
import { Pagina4Page }from '../pages/pagina4/pagina4';
import { TabsPage } from '../pages/tabs/tabs';
//import { Storage } from '@ionic/storage';
//import { DataTestProvider } from '../providers/data-test/data-test';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Pagina2Page,
    Pagina3Page,
    Pagina4Page,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Pagina2Page,
    Pagina3Page,
    Pagina4Page,
    TabsPage
    
  ],

  providers: [
    
    StatusBar,
    SplashScreen,
    
  ]
})
export class AppModule {}

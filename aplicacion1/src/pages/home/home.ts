import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Pagina2Page } from '../pagina2/pagina2';
import { Pagina3Page}from '../pagina3/pagina3';
import { Pagina4Page}from '../pagina4/pagina4';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }
login(){
  this.navCtrl.push(Pagina4Page);
  }
}


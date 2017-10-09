import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { Storage } from '@ionic/storage';
import { Http } from '@angular/http';


/**
 * Generated class for the Pagina4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pagina4',
  templateUrl: 'pagina4.html',
 
})
export class Pagina4Page {
  nuevoRegistro = {};
  Registros: any=[{
    
         Nombre:"",
         Apellidos:"",
         CorreoElectronico:"",
         Telefono:"",
         Direccion:""
        
      }];
  
  constructor(private navParams: NavParams) {
    
  
   }

   Registrar(){
     
    this.Registros.push(this.nuevoRegistro);
    this.nuevoRegistro = {};
   }
  
  
}

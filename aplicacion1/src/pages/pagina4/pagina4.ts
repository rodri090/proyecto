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
    
         Nombre:"jose",
         Apellidos:"lopez",
         CorreoElectronico:"jose@gmail.com",
         Telefono:"1234567",
         Direccion:"av.nn"
        
      }];
  
  constructor(private navParams: NavParams) {
    
  
   }
    
   /*alertaBasica(){
    
   let miAlerta= this.alerta.create({
    title:'mi alerta',
    message:'Registrese para hacer efectiva su reserva',
    buttons:['Registrar']
   });
   
   miAlerta.present()
    //this.nuevoRegistro=this.data.load();
    //this.data.saveData("hola");
    //this.Registros=[
     // {Nombre:"jose",Apellidos:"lopez",CorreoElectronico:"jose@gmail.com",Telefono:"1234567",Direccion:"av.nn"},
      
    //]
   
  }
 Registrar(){
  this.Registros.push(this.nuevoRegistro);
  this.nuevoRegistro = {};
 }

  /*GuardarDatos(Nombre,Apellidos,CorreoElectronico,Telefono,Direccion ){
  window.localStorage.setItem("Nombre", Nombre);
  window.localStorage.setItem("Apellidos", Apellidos);
  window.localStorage.setItem("Correo Electronico",CorreoElectronico);
  window.localStorage.setItem("Telefono", Telefono);
  window.localStorage.setItem("Direccion", Direccion);

 }

 ObtenerDatos(){

  window.localStorage.getItem("Nombre");
  window.localStorage.getItem("Apellidos");
  window.localStorage.getItem("correo Elctronico");
  window.localStorage.getItem("Telefono");
  window.localStorage.getItem("Direccion");


  }*/

  
}

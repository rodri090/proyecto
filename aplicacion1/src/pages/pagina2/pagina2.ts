import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Pagina4Page}from '../pagina4/pagina4';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the Pagina2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {
  auto:any={
    titulo:"TOYOTA YARIS ",
    Imagen:"assets/img/yaris.jpg",
    Precio: 15000 ,
    Anio: 2014 ,
    Transmision: "Mecanica",
    color: "blanco",
    Traccion: "4x2",
    Combustible: "Gasolina",
    reservado: "jose"
  }
    autos: any[]=[
      {
        titulo:"SUZUKI ALTO K10 ",
        Imagen:"assets/img/suzuki.jpg",
        Precio: 12000 ,
        Anio: 2013 ,
        Transmision: "Mecanica",
        color: "Guindo",
        Traccion: "4x2",
        Combustible: "Gasolina",
      },
    {
      titulo:" HONDA ACCORD FULL ",
      Imagen:"assets/img/honda.jpg",
      Precio: 12000 ,
      Anio: 2010 ,
      Transmision: "Mecanica",
      color: "Plateado",
      Traccion: "4x2",
      Combustible: "Gasolina",

    },
        
    {
      titulo:"FORD FIESTA TITANIUM ",
      Imagen:"assets/img/fordfiesta.jpg",
      Precio: 10000 ,
      Anio: 2014 ,
      Transmision: "Mecanica",
      color: "Rojo",
      Traccion: "4x2",
      Combustible: "Gasolina",

    },

    {
      titulo:"CHEVROLET CRUZE",
      Imagen:"assets/img/chevrolet.jpg",
      Precio: 12000 ,
      Anio: 2012 ,
      Transmision: "Mecanica",
      color: "Plomo",
      Traccion: "4x2",
      Combustible: "Gasolina",

    },
    {
      titulo:"NISSAN QASHQAI ",
      Imagen:"assets/img/nissan.jpg",
      Precio: 15.000,
      Anio: 2013,
      Transmision: "Mecanica",
      color: "Rojo",
      Traccion: "4x2",
     Combustible:"Gasolina" ,
    }
    ];

  constructor(public navCtrl: NavController, public navParams: NavParams,public alerta1:AlertController) {
    
  }
  alertaBasica(){
    
   let miAlerta= this.alerta1.create({
    title:'RESERVAR AUTOMOVIL',
    message:'Registrese para hacer efectiva su reserva',
    buttons:['Registrar']
   });
   
   miAlerta.present()
  }
  reservar(){
    
    this.navCtrl.push(Pagina4Page);
  
  }
  
  

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Pagina3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pagina3',
  templateUrl: 'pagina3.html',
})
export class Pagina3Page {

  moto:any ={
    titulo:"BMW HP4 RACE",
    imagen:"assets/img/bmw.jpg",
    precio: "15.000 $",
    anio:2014,
    Cilindrada: "999 cc",
    color: "blanco,",
    modelo: "hp4",
    Combustible:"gasolina"
 }
 

  motos: any[]=[
    {
      titulo:"HONDA",
      imagen:"assets/img/hondam.jpg",
      precio: "18.000 $",
      anio: 2016,
      Cilindrada: "999 cc",
      color: "Rojo",
      modelo: " HONDA CBR 1000 RR Fireblade",
      Combustible: "gasolina"

    },
  {
    titulo:"KAWASAKI",
    imagen:"assets/img/kawasaki.jpg",
    precio: "5.000 $",
    anio:2015,
    Cilindrada: "999 cc",
    color: "Negro,",
    modelo: "NINJA 300 ABS",
    Combustible: "gasolina"

  },
  {
    titulo:"YAMAHA",
    imagen:"assets/img/yamaha.jpg",
    precio: "10.000 $",
    anio:2016,
    Cilindrada: "599 cc",
    color: "Azul,",
    modelo: "YZF R6",
    Combustible: "gasolina"

  },
  {
    titulo:"SUZUKI",
    imagen:"assets/img/suzukim.jpg",
    precio: "15.000 $",
    anio:2015,
    Cilindrada: "999 cc",
    color: "Negro,",
    modelo: "GSX-R1000R",
    Combustible: "gasolina"

  },
  {
    titulo:"HARLEY DAVIDSON",
    imagen:"assets/img/harley.jpg",
    precio: "20.000 $",
    anio: 2016,
    Cilindrada: "1.801cc",
    color: "Azul,",
    modelo: "Softail Fat Boy S",
    Combustible: "gasolina"

  }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.motos.push(this.moto);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Pagina3Page');
  }

}

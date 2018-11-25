import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder';


declare var google;

/**
 * Generated class for the RotaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rota',
  templateUrl: 'rota.html',
})
export class RotaPage {

   options: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5
  };

  directionsService = new google.maps.DirectionsService();
  directionsDisplay = new google.maps.DirectionsRenderer();
  map: any;
  startPosition: any;
  originPosition: string;
  destinationPosition: string;


  constructor(public navCtrl: NavController, public navParams: NavParams, private geolocation: Geolocation,private nativeGeocoder: NativeGeocoder) {
    this.ionViewDidLoad();
  }

  ionViewDidLoad() {
    this.initializeMap();
  }

  voltar(){
    this.navCtrl.pop();
  }

  initializeMap() {
    this.geolocation.getCurrentPosition()
    .then((resp) => {
      this.startPosition = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);

      const mapOptions = {
        zoom: 18,
        center: this.startPosition,
        disableDefaultUI: true
      }

      this.map = new google.maps.Map(document.getElementById('map'), mapOptions);
      this.directionsDisplay.setMap(this.map);

      
    const marker = new google.maps.Marker({
      position: this.startPosition,
      map: this.map,
      });

      this.nativeGeocoder.reverseGeocode(resp.coords.latitude, resp.coords.longitude, this.options)
      .then((result: NativeGeocoderReverseResult[]) => this.originPosition = JSON.stringify(result[1]).split(",")[5].split(":")[1].replace(/[\"}]/g,"")) 
      .catch((error: any) => console.log(error));
      

    }).catch((error) => {
      console.log('Erro ao recuperar sua posição', JSON.stringify(error));
    });
  }

  calculateRoute() {
    if (this.destinationPosition && this.originPosition) {
      const request = {
        // Pode ser uma coordenada (LatLng), uma string ou um lugar
        origin: this.originPosition,
        destination: this.destinationPosition,
        travelMode: 'DRIVING'
      };

      this.traceRoute(this.directionsService, this.directionsDisplay, request);
    }
  }

  traceRoute(service: any, display: any, request: any) {
    service.route(request, function (result, status) {
      if (status == 'OK') {
        display.setDirections(result);
      }
    });
  }
}
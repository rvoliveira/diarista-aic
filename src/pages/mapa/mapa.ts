import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

declare var google;

/**
 * https://developers.google.com/maps/documentation/javascript/adding-a-google-map
 * https://ionicframework.com/docs/native/geolocation/
 */
@IonicPage()
@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html',
})
export class MapaPage {
  map: any;

  constructor(private geolocation: Geolocation) { }

  ionViewDidLoad() {
    this.geolocation.getCurrentPosition()
      .then((resp) => {
        const position = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
        const mapOptions = {
          zoom: 14,
          center: position
        }
        this.map = new google.maps.Map(document.getElementById('map'), mapOptions);
        new google.maps.Marker({position: position, map: this.map});
        var locations = [
            ['Dona Maid', resp.coords.latitude+ 0.01, resp.coords.longitude],
            ['Dona Clo', resp.coords.latitude- 0.01, resp.coords.longitude+0.01],
            ['Dona Mara', resp.coords.latitude- 0.01, resp.coords.longitude-0.01],
        ];
        var i;
        for (i = 0; i < locations.length; i++) {          
          new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            title: locations[i][0],
            map: this.map,
            icon: './assets/icon/icon.png'       
          });
        } 
      }).catch((error) => {
        console.log('Erro ao recuperar sua posição', error);
      });
  }
}

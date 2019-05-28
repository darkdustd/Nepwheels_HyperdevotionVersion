import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { DataApiService } from '../services/data-api.service';
import { PuntosAsociados } from '../models/puntos-asociados';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})
export class GoogleMapComponent implements OnInit {

  lat: number;
    lng: number;

  constructor(private dataApi: DataApiService) { }
  public puntosAsociados = [];
  public puntoAsociado = '';

  ngOnInit() {
      this.getUserLocation();
      this.getListPuntosAsociados();

    }


    getListPuntosAsociados(){
      this.dataApi.getAllPuntosAsociados().subscribe(puntoAsociado => {console.log('VEHICULOS',puntoAsociado);
      this.puntosAsociados = puntoAsociado;
    });
    }

    private getUserLocation() {
     /// locate the user
     if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
         this.lat = position.coords.latitude;
         this.lng = position.coords.longitude;

       });
     }
   }
 }

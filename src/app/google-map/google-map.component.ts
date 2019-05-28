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


  // google maps zoom level
  zoom: number = 15;
  // initial center position for the map
  lat: number = 7.116046;
  lng: number = -73.105552;


  constructor(private dataApi: DataApiService) { }
  public puntosAsociados = [];
  public puntoAsociado = '';


  ngOnInit() {
      this.getListPuntosAsociados();
    }


    getListPuntosAsociados(){
      this.dataApi.getAllPuntosAsociados().subscribe(puntosAsociados => {console.log('VEHICULOS',puntosAsociados);
      this.puntosAsociados = puntosAsociados;

      for (let i of puntosAsociados) {

        this.markers.push({
          lat: i.latitud,
          lng: i.longitud,
          draggable: false,
          label: 'A'
        });
      }
    });
    }

    clickedMarker(label: string, index: number) {
      console.log(`clicked the marker: ${label || index}`);
      //this.moverMarker(index, 0);
    }

    mapClicked($event: MouseEvent) {
      this.markers.push({
        lat: $event.coords.lat,
        lng: $event.coords.lng,
        draggable: false
      });
    }

    markerDragEnd(m: marker, $event: MouseEvent) {
      console.log('dragEnd', m, $event);
    }

    markers: marker[] = []
  }

  // just an interface for type safety.
  interface marker {
  	lat: number;
  	lng: number;
  	label?: string;
  	draggable: boolean;
  }

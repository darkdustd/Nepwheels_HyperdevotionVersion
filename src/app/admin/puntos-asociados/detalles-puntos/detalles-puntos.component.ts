import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';
import {DataApiService} from '../../../services/data-api.service';
import { PuntosAsociados } from '../../../models/puntos-asociados';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-detalles-puntos',
  templateUrl: './detalles-puntos.component.html',
  styleUrls: ['./detalles-puntos.component.css']
})
export class DetallesPuntosComponent implements OnInit {

  // google maps zoom level
  zoom: number = 15;
  // initial center position for the map
  lat: number = 7.116046;
  lng: number = -73.105552;

  constructor(private dataApi: DataApiService, private route: ActivatedRoute) { }
  private puntoAsociado: PuntosAsociados;

  ngOnInit() {
    const idPuntoAsociado = this.route.snapshot.params['id'];
    this.getDetalles(idPuntoAsociado);
  }

  getDetalles(idPuntoAsociado: string): void{
    this.dataApi.getOnePuntosAsociados(idPuntoAsociado).subscribe(puntoAsociado =>{
      this.puntoAsociado = puntoAsociado;

      this.markers.push({
        lat: puntoAsociado.latitud,
        lng: puntoAsociado.longitud,
        draggable: false
      });

    });


  }

  /*moverMarker(index: number, cont: number) {
    this.markers[index].lat = this.latitudes[cont];
    this.markers[index].lng = this.longitudes[cont];
    if (cont < this.latitudes.length - 1) {
      cont++;
      //setTimeout(this.moverMarker, 1000, index, cont);
      var txtaux = "this.moverMarker(" + index + ", " + cont + ")"
      setTimeout(txtaux, 1000);

    }
  }*/

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

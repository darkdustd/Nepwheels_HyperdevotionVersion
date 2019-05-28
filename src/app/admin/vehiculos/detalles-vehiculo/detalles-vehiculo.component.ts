import { Component, OnInit } from '@angular/core';
import {DataApiService} from '../../../services/data-api.service';
import { Vehiculos } from '../../../models/vehiculos';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-detalles-vehiculo',
  templateUrl: './detalles-vehiculo.component.html',
  styleUrls: ['./detalles-vehiculo.component.css']
})
export class DetallesVehiculoComponent implements OnInit {

  constructor(private dataApi: DataApiService, private route: ActivatedRoute) { }
  private vehiculo: Vehiculos;

  ngOnInit() {
    const idVehiculo = this.route.snapshot.params['id'];
    this.getDetalles(idVehiculo);
  }

  getDetalles(idVehiculo: string): void{
    this.dataApi.getOneVehiculo(idVehiculo).subscribe(vehiculo =>{
      this.vehiculo = vehiculo;
    });
  }

  

}

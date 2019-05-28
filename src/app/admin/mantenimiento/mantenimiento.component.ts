import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { Vehiculos } from '../../models/vehiculos';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mantenimiento',
  templateUrl: './mantenimiento.component.html',
  styleUrls: ['./mantenimiento.component.css']
})
export class MantenimientoComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }

  public vehiculos = [];
  public vehiculo = '';

  ngOnInit() {
    this.getListVehiculos();
  }

  getListVehiculos(){
    this.dataApi.getAllVehiculos().subscribe(vehiculos => {console.log('VEHICULOS',vehiculos);
    this.vehiculos = vehiculos;
  });
  }

  onMantenimientoVehiculo(vehiculo: Vehiculos){
    console.log('DELETE VEHICULO', vehiculo);

    Swal.fire({
      title: 'Estas seguro de quieres poner en mantenimiento este vehiculo?',
      text: "No seras capaz de revertir esto",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'A mantenimiento!'
    }).then((result) => {
      if (result.value) {
        vehiculo.rentado = 'No';
        vehiculo.estado = 'Inactivo';
        this.dataApi.updateVehiculo(vehiculo);
        console.log('DELETE VEHICULO', vehiculo);
        Swal.fire(
          'En mantenimiento!',
          'El vehiculo fue enviado a mantenimiento satisfactoriamente',
          'success'
        )
      }
    })}
}

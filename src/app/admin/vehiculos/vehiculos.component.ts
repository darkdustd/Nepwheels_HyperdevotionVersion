import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { Vehiculos } from '../../models/vehiculos';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.css']
})
export class VehiculosComponent implements OnInit {

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

  onDeleteVehiculo(idVehiculo: string){
    console.log('DELETE VEHICULO', idVehiculo);

    Swal.fire({
      title: 'Estas seguro de eliminar el vehiculo?',
      text: "No seras capaz de revertir esto",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminalo!'
    }).then((result) => {
      if (result.value) {
        this.dataApi.deleteVehiculo(idVehiculo);
        Swal.fire(
          'Eliminado!',
          'El vehiculo fue eliminado satisfactoriamente',
          'success'
        )
      }
    })}

    onPreUpdateVehiculo(vehiculo: Vehiculos){
      console.log('VEHICULO', vehiculo);
      this.dataApi.selectedVehiculo = Object.assign({}, vehiculo);
    }

}

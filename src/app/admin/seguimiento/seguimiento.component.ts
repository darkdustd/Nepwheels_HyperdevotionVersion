import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { PuntosAsociados } from '../../models/puntos-asociados';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-seguimiento',
  templateUrl: './seguimiento.component.html',
  styleUrls: ['./seguimiento.component.css']
})
export class SeguimientoComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }

  public puntosAsociados = [];
  public puntoAsociado = '';

  ngOnInit() {
    this.getListPuntosAsociados();
  }


  getListPuntosAsociados(){
    this.dataApi.getAllPuntosAsociados().subscribe(vehiculos => {console.log('VEHICULOS',vehiculos);
    this.puntosAsociados = vehiculos;
  });
  }

  onDeletePuntoAsociado(idPuntoAsociado: string){
    console.log('DELETE VEHICULO', idPuntoAsociado);

    Swal.fire({
      title: 'Estas seguro de eliminar este punto?',
      text: "No seras capaz de revertir esto",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminalo!'
    }).then((result) => {
      if (result.value) {
        this.dataApi.deletePuntosAsociados(idPuntoAsociado);
        Swal.fire(
          'Eliminado!',
          'El punto asociado fue eliminado satisfactoriamente',
          'success'
        )
      }
    })}

    onPreUpdatePuntoAsociado(puntoAsociado: PuntosAsociados){
      console.log('VEHICULO', puntoAsociado);
      this.dataApi.selectedPuntoAsociado = Object.assign({}, puntoAsociado);
    }

}

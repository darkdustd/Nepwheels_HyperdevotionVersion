import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { Vehiculos } from '../../models/vehiculos';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
  @ViewChild('btnClose') btnClose: ElementRef;
  ngOnInit() {
  }

  onSaveVehiculo(vehiculoForm: NgForm): void{
    //se imprime en consola el valor de la form (consola web f12)
    console.log('vehiculoForm.value.id',vehiculoForm.value);

    //se evalua el id del form para saber si se debe crear un vehiculo o simplemente actualizarlo
    if(vehiculoForm.value.id == null){
      console.log('vehiculoForm.value.id',vehiculoForm.value.id);

      this.dataApi.addVehiculo(vehiculoForm.value);
    }else{
      this.dataApi.updateVehiculo(vehiculoForm.value);
      Swal.fire(
        'Excelente!',
        'Se ha actualizado el vehiculo satisfactoriamente!',
        'success')
    }

    vehiculoForm.resetForm();
    this.btnClose.nativeElement.click();

  }



}

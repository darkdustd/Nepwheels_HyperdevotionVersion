import { Component, OnInit , ViewChild, ElementRef } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { PuntosAsociados } from '../../models/puntos-asociados';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-puntos',
  templateUrl: './modal-puntos.component.html',
  styleUrls: ['./modal-puntos.component.css']
})
export class ModalPuntosComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
  @ViewChild('btnClose') btnClose: ElementRef;
  ngOnInit() {
  }

  onSavePuntoAsociado(puntoAsociadoForm: NgForm): void{
    //se imprime en consola el valor de la form (consola web f12)
    console.log('puntoAsociadoForm.value.id',puntoAsociadoForm.value);

    //se evalua el id del form para saber si se debe crear un vehiculo o simplemente actualizarlo
    if(puntoAsociadoForm.value.id == null){
      console.log('puntoAsociadoForm.value.id',puntoAsociadoForm.value.id);

      this.dataApi.addPuntoAsociado(puntoAsociadoForm.value);
    }else{
      this.dataApi.updatePuntoAsociado(puntoAsociadoForm.value);
      Swal.fire(
        'Excelente!',
        'Se ha actualizado el punto satisfactoriamente!',
        'success')
    }

    puntoAsociadoForm.resetForm();
    this.btnClose.nativeElement.click();
  }

}

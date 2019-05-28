import { Component, OnInit } from '@angular/core';
import {DataApiService} from '../../services/data-api.service';

@Component({
  selector: 'app-rentas',
  templateUrl: './rentas.component.html',
  styleUrls: ['./rentas.component.css']
})
export class RentasComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
public rents = [];
public rent ='';

ngOnInit() {
this.dataApi.getAllRents().subscribe(rents =>{
console.log('Rents', rents);
this.rents =rents;
})

}


}

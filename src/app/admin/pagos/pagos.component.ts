import { Component, OnInit } from '@angular/core';
import {DataApiService} from '../../services/data-api.service';
@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.css']
})
export class PagosComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
  public pays = [];
  public pay ='';

  ngOnInit() {
    this.dataApi.getAllPays().subscribe(pays =>{
    console.log('Pays', pays);
    this.pays =pays;
    })
  }

}

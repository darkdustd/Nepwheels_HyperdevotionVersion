import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Vehiculos } from '../models/vehiculos';
import {RentInterface } from '../models/rent';
import {PayInterface} from '../models/pay';
import { PuntosAsociados } from '../models/puntos-asociados';
import { Observable } from 'rxjs/internal/Observable';
import Swal from 'sweetalert2';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor(private afs: AngularFirestore) {
    this.rentsCollections = afs.collection<RentInterface>('rents');
  this.rents = this.rentsCollections.valueChanges();
  this.paysCollections = afs.collection<PayInterface>('pays');
this.pays = this.paysCollections.valueChanges();
}

  private puntosAsociadosCollection: AngularFirestoreCollection<PuntosAsociados>;
  private PuntosAsociados: Observable<PuntosAsociados[]>;
  private puntoAsociadoDoc: AngularFirestoreDocument<PuntosAsociados>;
  private puntoAsociado: Observable<PuntosAsociados>;
  public selectedPuntoAsociado: PuntosAsociados = {id: null};

  private vehiculosCollection: AngularFirestoreCollection<Vehiculos>;
  private Vehiculos: Observable<Vehiculos[]>;
  private vehiculoDoc: AngularFirestoreDocument<Vehiculos>;
  private vehiculo: Observable<Vehiculos>;
  public selectedVehiculo: Vehiculos = {id: null};


  private rentsCollections: AngularFirestoreCollection<RentInterface>;
  private rents: Observable<RentInterface[]>;
  private rent: Observable<RentInterface>;
  public selectedRent: RentInterface={};


  private paysCollections: AngularFirestoreCollection<PayInterface>;
  private pays: Observable<PayInterface[]>;
  private pay: Observable<PayInterface>;
  public selectedPay: PayInterface={};

  getAllPuntosAsociados() {
    this.puntosAsociadosCollection = this.afs.collection<PuntosAsociados>('puntosAsociados');
    return this.PuntosAsociados = this.puntosAsociadosCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as PuntosAsociados;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
  }

  getOnePuntosAsociados(idPuntoAsociado: string) {
    this.puntoAsociadoDoc = this.afs.doc<PuntosAsociados>(`puntosAsociados/${idPuntoAsociado}`);
    return this.puntoAsociado = this.puntoAsociadoDoc.snapshotChanges().pipe(map(action => {
      if (action.payload.exists === false) {
        return null;
      } else {
        const data = action.payload.data() as PuntosAsociados;
        data.id = action.payload.id;
        return data;
      }
    }));
  }

  addPuntoAsociado(puntoAsociado: PuntosAsociados): void {
    this.puntosAsociadosCollection.add(puntoAsociado);
    Swal.fire(
      'Excelente!',
      'Se ha creado el punto de parqueo satisfactoriamente!',
      'success'
    )
  }
  updatePuntoAsociado(puntoAsociado: PuntosAsociados): void {
    let idPuntoAsociado = puntoAsociado.id;
    this.puntoAsociadoDoc = this.afs.doc<PuntosAsociados>(`puntosAsociados/${idPuntoAsociado}`);
    this.puntoAsociadoDoc.update(puntoAsociado);
  }
  deletePuntosAsociados(idPuntoAsociado: string): void {
    this.puntoAsociadoDoc = this.afs.doc<PuntosAsociados>(`puntosAsociados/${idPuntoAsociado}`);
    this.puntoAsociadoDoc.delete();
  }



  getAllVehiculos() {
    this.vehiculosCollection = this.afs.collection<Vehiculos>('vehiculos');
    return this.Vehiculos = this.vehiculosCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as Vehiculos;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
  }

  getOneVehiculo(idVehiculos: string) {
    this.vehiculoDoc = this.afs.doc<Vehiculos>(`vehiculos/${idVehiculos}`);
    return this.vehiculo = this.vehiculoDoc.snapshotChanges().pipe(map(action => {
      if (action.payload.exists === false) {
        return null;
      } else {
        const data = action.payload.data() as Vehiculos;
        data.id = action.payload.id;
        return data;
      }
    }));
  }

  addVehiculo(vehiculo: Vehiculos): void {
    this.vehiculosCollection.add(vehiculo);
    Swal.fire(
      'Excelente!',
      'Se ha creado el vehiculo satisfactoriamente!',
      'success'
    )

  }

  getAllRents(){
    return this.rents =this.rentsCollections.snapshotChanges()
    .pipe(map(changes=>{
      return changes.map(action=>{
        const data =action.payload.doc.data() as RentInterface;
        data.id =action.payload.doc.id;
        return data;
      })
    }))
  }

  addRent(rent: RentInterface): void{
    this.rentsCollections.add(rent);
  }


  getAllPays(){
    return this.pays =this.paysCollections.snapshotChanges()
    .pipe(map(changes=>{
      return changes.map(action=>{
        const data =action.payload.doc.data() as PayInterface;
        data.id =action.payload.doc.id;
        return data;
      })
    }))
  }

  addPay(pay: PayInterface): void{
    this.paysCollections.add(pay);
  }

  updateVehiculo(vehiculo: Vehiculos): void {
    let idVehiculos = vehiculo.id;
    this.vehiculoDoc = this.afs.doc<Vehiculos>(`vehiculos/${idVehiculos}`);
    this.vehiculoDoc.update(vehiculo);
  }

  deleteVehiculo(idVehiculos: string): void {
    this.vehiculoDoc = this.afs.doc<Vehiculos>(`vehiculos/${idVehiculos}`);
    this.vehiculoDoc.delete();
  }
}

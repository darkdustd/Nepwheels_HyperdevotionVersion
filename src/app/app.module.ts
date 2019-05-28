import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NerrpComponent } from './nerrp/nerrp.component';
import { FormsModule } from '@angular/forms';
import { NaviationComponent } from './naviation/naviation.component';
import { RentComponent } from './rent/rent.component';
import { AdminComponent } from './admin/admin.component';
import { ReserveComponent } from './reserve/reserve.component';
import { MapComponent } from './map/map.component';
import { VehiculosComponent } from './admin/vehiculos/vehiculos.component';
import { DetallesVehiculoComponent } from './admin/vehiculos/detalles-vehiculo/detalles-vehiculo.component';
import { SeguimientoComponent } from './admin/seguimiento/seguimiento.component';
import { PuntosAsociadosComponent } from './admin/puntos-asociados/puntos-asociados.component';
import { DetallesPuntosComponent } from './admin/puntos-asociados/detalles-puntos/detalles-puntos.component';
import { ModalComponent } from './admin/modal/modal.component';
import { MantenimientoComponent } from './admin/mantenimiento/mantenimiento.component';
import { HelloComponent } from './admin/puntos-asociados/hello.component';

import { AgmCoreModule } from '@agm/core';
import { PaymentComponent } from './payment/payment.component';

import { HttpClientModule } from '@angular/common/http';
import { MessageService } from './services/message.service';

import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore'
import { GoogleMapComponent } from './google-map/google-map.component';
import { SigninComponent } from './signin/signin.component';
import { ModalPuntosComponent } from './admin/modal-puntos/modal-puntos.component';
export const firebaseConfig = environment.firebaseConfig;
import { CoreModule } from './core/core.module';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { RentasComponent } from './admin/rentas/rentas.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NerrpComponent,
    NaviationComponent,
    RentComponent,
    AdminComponent,
    ReserveComponent,
    MapComponent,
    PaymentComponent,
    GoogleMapComponent,
    VehiculosComponent,
    DetallesVehiculoComponent,
    DetallesVehiculoComponent,
    SeguimientoComponent,
    PuntosAsociadosComponent,
    DetallesPuntosComponent,
    ModalComponent,
    MantenimientoComponent,
    HelloComponent,
    SigninComponent,
    ModalPuntosComponent,
    UserProfileComponent,
    RentasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CoreModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDq4c_ubweF2Oilne6EDr5wsQpHGZ1mI0k'
    })
  ],
  providers: [MessageService, AngularFireAuth, AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }

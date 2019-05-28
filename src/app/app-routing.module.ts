import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {NerrpComponent} from './nerrp/nerrp.component';
import {RentComponent} from './rent/rent.component';
import {AdminComponent} from './admin/admin.component';
import {ReserveComponent} from './reserve/reserve.component';
import {MapComponent} from './map/map.component';
import {PaymentComponent} from './payment/payment.component';
import {GoogleMapComponent} from './google-map/google-map.component';
import {SigninComponent} from './signin/signin.component';
import { VehiculosComponent} from './admin/vehiculos/vehiculos.component';
import { DetallesVehiculoComponent } from './admin/vehiculos/detalles-vehiculo/detalles-vehiculo.component';
import { SeguimientoComponent } from './admin/seguimiento/seguimiento.component';
import { PuntosAsociadosComponent } from './admin/puntos-asociados/puntos-asociados.component';
import { DetallesPuntosComponent } from './admin/puntos-asociados/detalles-puntos/detalles-puntos.component';
import { ModalComponent } from './admin/modal/modal.component';
import { MantenimientoComponent } from './admin/mantenimiento/mantenimiento.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import { RentasComponent } from './admin/rentas/rentas.component';
import { PagosComponent } from './admin/pagos/pagos.component';

const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'Home', component: HomeComponent},
  {path: 'Login', component: LoginComponent},
  {path: 'Rent', component: RentComponent},
  {path: 'Reserve', component: ReserveComponent},
  {path: 'Map', component: MapComponent},
  {path: 'Pay', component: PaymentComponent},
  {path: 'GM', component: GoogleMapComponent},
  {path: 'Admin', component: AdminComponent},
  {path: 'Admin/Vehiculos', component: VehiculosComponent},
  {path: 'Admin/Vehiculos/:id', component: DetallesVehiculoComponent},
  {path: 'Admin/Seguimiento', component: SeguimientoComponent},
  {path: 'Admin/PuntosAsociados', component: PuntosAsociadosComponent},
  {path: 'Admin/PuntosAsociados/:id', component: DetallesPuntosComponent},
  {path: 'Admin/Mantenimiento', component: MantenimientoComponent},
  {path: 'Admin/Rentas', component: RentasComponent},
  {path: 'Admin/Pagos', component: PagosComponent},
  {path: 'User', component: UserProfileComponent},
  {path: '**', component: NerrpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

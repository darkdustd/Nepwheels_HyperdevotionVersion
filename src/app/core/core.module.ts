import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthService2 } from './auth.service';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

@NgModule({
  imports: [
    AngularFireAuthModule,
    AngularFirestoreModule,
    CommonModule
  ],
  providers: [AuthService2]
})
export class CoreModule { }

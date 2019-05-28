import { Component, OnInit } from '@angular/core';
import { AuthService2 } from '../core/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
 userTipe:string;


  constructor(public auth: AuthService2) {

}
first(){

}

}

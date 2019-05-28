import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth, private router: Router, private authService: AuthService) { }
public email: string='';
public password: string='';
  ngOnInit() {
  }

  onLogin(): void{
    this.authService.loginEmailUser(this.email, this.password)
    .then((res)=>{
      this.onLoginRedirect();
    }).catch (err => console.log('Email pudding doesnt work', err));
  }

  onLoginGoogle(): void{
    //this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    this.authService.loginGooleUser()
    .then((res)=>{
      this.onLoginRedirect();
    }).catch (err => console.log('Google pudding doesnt work', err));

  }

  onLogout(){
    this.authService.logoutUser();
  }

  onLoginRedirect(): void{
      this.router.navigate(['Home']);
  }


}

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router} from '@angular/router'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }
public email: string = '';
public password: string = '';
  ngOnInit() {
  }

  onAddUser(){
    this.authService.registerUser(this.email, this.password)
    .then((res)=>{
      this.router.navigate(['Home']);
    }).catch(err =>console.log('Adding pudding err', err));
  }

}

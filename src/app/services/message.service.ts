import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient, private router: Router) { }

  sendMessage(body) {
    this.router.navigate(['Home']);
    return this.http.post('http://localhost:3000/formulario', body);

  }
}

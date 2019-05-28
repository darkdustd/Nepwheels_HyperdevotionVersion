import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';
import { DataApiService } from '../services/data-api.service';
import { RentInterface } from '../models/rent';
import { PayInterface } from '../models/pay';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(public _MessageService: MessageService, private dataApi: DataApiService) {


  }
  contactForm(form) {
    this._MessageService.sendMessage(form).subscribe(() => {

    });
  }

  ngOnInit(){

  }
  onSaveRent(rentForm: NgForm): void{
    this.dataApi.addRent(rentForm.value);
  }

  onSavePay(payForm: NgForm): void{
    this.dataApi.addPay(payForm.value);
  }


}

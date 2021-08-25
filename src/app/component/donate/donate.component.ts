import { Component, OnInit } from '@angular/core';
import { render } from 'creditcardpayments/creditCardPayments';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent implements OnInit {

  constructor() {
    render(
      {
      id: '#myPaypalButtons',
      currency: 'USD',
      value: '100.00',
      onApprove: (details) => {
        alert('transaction Successfull');
      }
    }
    );
  }

  ngOnInit(): void {
  }

}

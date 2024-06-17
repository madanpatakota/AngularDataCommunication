import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  @Input() customerRecord:any;

  constructor() { }

  customerName = "";
  customerEmail = "";

  ngOnInit(): void {
    this.customerName = this.customerRecord.Name;
    this.customerEmail = this.customerRecord.Email;
    console.log("Input data is " , this.customerRecord);
  }

}

import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit , OnChanges {

  @Input() customerRecord:any;

  constructor() { }

  customerName = "";
  customerEmail = "";


  //If any input changes will be happen from parent... 
  // this life cycel hook automatically fired.
  // updates | notifications if any one change the customerRecord
  ngOnChanges(): void {
    //console.log("ng onchanges From Customer details comp " , this.customerRecord);
    this.customerName = this.customerRecord.Name;
    this.customerEmail = this.customerRecord.Email;
  }


  //its fired automatically when your comp initlization
  ngOnInit(): void {
    this.customerName = this.customerRecord.Name;
    this.customerEmail = this.customerRecord.Email;
    //console.log("ng oninit Input data is " , this.customerRecord);
  }

}

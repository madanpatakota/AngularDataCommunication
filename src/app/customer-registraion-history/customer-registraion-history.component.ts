import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-customer-registraion-history',
  templateUrl: './customer-registraion-history.component.html',
  styleUrls: ['./customer-registraion-history.component.css']
})
export class CustomerRegistraionHistoryComponent implements OnInit, OnChanges {

  constructor() { }


  @Input('historyCustomerRecord') ihistoryRecord: any;

  CustomerRecords: any = [];

  ngOnInit(): void {
  }


  //Monitor the input changes(if parent change input automatically it will trigger.)
  ngOnChanges() {
    //console.log(this.ihistoryRecord);

    //setTimeout(() => {
      this.CustomerRecords.push(this.ihistoryRecord);


      //Need to write the code for remove duplicate recordds.

      //console.log(this.CustomerRecords);
    //}, 1000);


  }

}

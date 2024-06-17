import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-registraion',
  templateUrl: './customer-registraion.component.html',
  styleUrls: ['./customer-registraion.component.css']
})
export class CustomerRegistraionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  evtPostClick(customerName:HTMLInputElement,
    customerpassword:HTMLInputElement,
    customeremail:HTMLInputElement){
      console.log("CustomerName is " ,customerName.value);
      console.log("Customer password is " ,customerpassword.value);
      console.log("Customer email is " , customeremail.value);
  }
}

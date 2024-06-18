import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-customer-registraion',
  templateUrl: './customer-registraion.component.html',
  styleUrls: ['./customer-registraion.component.css']
})
export class CustomerRegistraionComponent implements OnInit {


  // output
  // event emitter(you can emit | inject | add | insert | take )
  // initlize the event emitter with the output
  // then you have to pass the data to the parent
  



  //@Output() eventEmitter = new EventEmitter<any>();

    constructor() { }

  ngOnInit(): void {
    //var abc:string = "aadfa";
  }



  //View Child is a Property Decorator which provides a reference to element or component or 
  //Templates to define the view. We have to declare ViewChild with ‘@’ decorator. 

  //By using viewchild we take the ref of either element or component or template in .ts file




  @ViewChild('customerName') cCustomer: ElementRef;
  @ViewChild('customerpassword') cCustomerPassword: ElementRef;
  @ViewChild('customeremail') cCustomerEmail: ElementRef;



  @Output() customerEventEmitter = new EventEmitter<any>();

  evtPostClick() {
    
    //console.log("CustomerName is " ,customerName.value);
    // console.log("Customer password is " ,customerpassword.value);
    // console.log("Customer email is " , customeremail.value);
    //By viewchild

    console.log(this.cCustomer.nativeElement.value);
    console.log(this.cCustomerPassword.nativeElement.value);
    console.log(this.cCustomerEmail.nativeElement.value);


    console.log("post from child -customer registatin page......");
    this.customerEventEmitter.emit({
      "Name":this.cCustomer.nativeElement.value,
      "Password":this.cCustomerPassword.nativeElement.value,
      "Email":this.cCustomerEmail.nativeElement.value
    })




  }



}

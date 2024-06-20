import {
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  OnInit,
  AfterViewInit,
  AfterContentInit,
  OnChanges,
  SimpleChanges,
  OnDestroy,
  AfterViewChecked,
  AfterContentChecked
} from '@angular/core';

@Component({
  selector: 'app-customer-registraion',
  templateUrl: './customer-registraion.component.html',
  styleUrls: ['./customer-registraion.component.css']
})
export class CustomerRegistraionComponent implements
  OnInit,
  AfterViewInit,
  AfterContentInit, OnChanges,
  OnDestroy,
  AfterViewChecked,
  AfterContentChecked {


  // output
  // event emitter(you can emit | inject | add | insert | take )
  // initlize the event emitter with the output
  // then you have to pass the data to the parent




  //@Output() eventEmitter = new EventEmitter<any>();

  constructor() { }

  @Input('rcustomerRecord') customerRecord: any;
  
  ngOnChanges() {
    console.log("ngOnchanges Loaded");
    console.log(this.customerRecord);
  }

  //routing......
  ngOnInit(): void {
    //var abc:string = "aadfa";
    console.log("*************ngOninit load********");
    //subscriptions
  }

  ngAfterViewInit(): void {

    console.log("ngAfterViewinit Load");
    this.cCustomer.nativeElement.value = "Peter";
    this.cCustomerPassword.nativeElement.value = "Peter@#$#@!";
    this.cCustomerEmail.nativeElement.value = "Peter@gmail.com";



    //this.cPersonalMessageDetails.nativeElement.value = "Some messsage";

  }


  //Trigger automatically when you to the update the any value in the view of the comp
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked Loaded")
  }

  //Trigger automatically when you to the update the any value in the content of the comp
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked Loaded");
  }



  ngAfterContentInit() {
    console.log("ngAfterContentinit Load");
    // this.cCustomer.nativeElement.value = "Peter1";
    // this.cCustomerPassword.nativeElement.value = "Petekbhh1";
    // this.cCustomerEmail.nativeElement.value = "Peter122345@gmail.com";

    this.cPersonalMessageDetails.nativeElement.value = "Different message";
  }

  //View Child is a Property Decorator which provides a reference to element or component or 
  //Templates to define the view. We have to declare ViewChild with ‘@’ decorator. 

  //By using viewchild we take the ref of either element or component or template in .ts file




  @ViewChild('customerName') cCustomer: ElementRef;
  @ViewChild('customerpassword') cCustomerPassword: ElementRef;
  @ViewChild('customeremail') cCustomerEmail: ElementRef;
  @ContentChild('personalmessagedetails') cPersonalMessageDetails: ElementRef;



  @Output() customerEventEmitter = new EventEmitter<any>();

  evtPostClick() {

    //console.log("CustomerName is " ,customerName.value);
    // console.log("Customer password is " ,customerpassword.value);
    // console.log("Customer email is " , customeremail.value);
    //By viewchild

    console.log(this.cCustomer.nativeElement.value);
    console.log(this.cCustomerPassword.nativeElement.value);
    console.log(this.cCustomerEmail.nativeElement.value);
    console.log(this.cPersonalMessageDetails.nativeElement.value);


    console.log("post from child -customer registatin page......");
    this.customerEventEmitter.emit({
      "Name": this.cCustomer.nativeElement.value,
      "Password": this.cCustomerPassword.nativeElement.value,
      "Email": this.cCustomerEmail.nativeElement.value
    })




  }


  ngOnDestroy(): void {
    console.log("NOw you are navigating to the another componenent......");
    //unsubscribe
  }


}

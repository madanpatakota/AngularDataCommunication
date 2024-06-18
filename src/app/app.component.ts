import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularDataCommunication';



  // Change span to textbox like customer name

  Customer = {
    Name: "Madan",
    Password: "&*&^GYG*G",
    Email: "madan@gmail.com"
  }




  //click button 
  updateCustomerName(customerName: HTMLInputElement) {
    console.log(customerName.value);

    this.Customer = {
      Name: customerName.value,
      Password: "&*&^GYG*G",
      Email: "madan@gmail.com"
    }

    // this.Customer.Password 
  }


  evtCustomerReceiveInfo($event: any) {
    console.log("Now i receive the data in appcomponent  ", $event)

    this.Customer.Name = $event.Name;
    this.Customer.Email = $event.Email
    this.Customer.Password = $event.Password;


    // this.Customer = {
    //   Name: $event.Name,
    //   Password: $event.Password,
    //   Email: $event.Email
    // }
  }


}

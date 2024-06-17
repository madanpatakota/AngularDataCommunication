import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularDataCommunication';


  Customer = {
     Name : "Madan",
     Password : "&*&^GYG*G",
     Email : "madan@gmail.com"
  }


}

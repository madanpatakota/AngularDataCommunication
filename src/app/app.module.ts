import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomerRegistraionComponent } from './customer-registraion/customer-registraion.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerRegistraionHistoryComponent } from './customer-registraion-history/customer-registraion-history.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerRegistraionComponent,
    CustomerDetailsComponent,
    CustomerRegistraionHistoryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

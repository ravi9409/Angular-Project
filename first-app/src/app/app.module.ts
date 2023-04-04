import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {WarningAlertComponent} from "./WarningAlert/warningalert.component";
import { SucessAlertsComponent } from './sucess-alerts/sucess-alerts.component';


@NgModule({
  declarations: [
    AppComponent,
    WarningAlertComponent,
    SucessAlertsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './auth.service';
import { CoreModule } from './core/core.module';
import {TableModule} from 'primeng/table';
import { AdminService } from './services/admin.service';
import { ButtonModule } from 'primeng/button';
import {ConfirmPopupModule} from 'primeng/confirmpopup';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
  AdminDashboardComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    TableModule,
    ButtonModule,
    ConfirmPopupModule,
    BrowserAnimationsModule
    
    
   
  ],
  providers: [AuthService,AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }

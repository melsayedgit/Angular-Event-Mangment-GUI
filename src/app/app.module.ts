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
    TableModule
   
  ],
  providers: [AuthService,AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }

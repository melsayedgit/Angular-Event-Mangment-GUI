import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {SelectButtonModule} from 'primeng/selectbutton';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';



 


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SelectButtonModule,
    HttpClientModule,
    DialogModule,
    ButtonModule,

   
  ],
  exports:[
    RegisterComponent,
    LoginComponent,
    NavbarComponent
  ],
  providers:[]
  

})
export class CoreModule { }

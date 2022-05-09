import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {SelectButtonModule} from 'primeng/selectbutton';
import { HttpClientModule } from '@angular/common/http';



 


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SelectButtonModule,
    HttpClientModule


   
  ],
  exports:[
    RegisterComponent
  ],
  providers:[]
  

})
export class CoreModule { }

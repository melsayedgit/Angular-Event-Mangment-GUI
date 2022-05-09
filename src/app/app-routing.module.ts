import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashBoardComponent } from './admin-dash-board/admin-dash-board.component';
import { LoginComponent } from './core/login/login.component';
import { RegisterComponent } from './core/register/register.component';

const routes: Routes = [
  {path:"login",component: LoginComponent},
  {path:"register",component: RegisterComponent},
  {path:"admin",component:AdminDashBoardComponent},
  
// { path: '**', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

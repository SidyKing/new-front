import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AuthComponent} from './auth.component';
import {LoginComponent} from './login/login.component';
import { MotDePasseOublierComponent } from './mot-de-passe-oublier/mot-de-passe-oublier.component';
const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'MotDePasseOublier',
        component: MotDePasseOublierComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

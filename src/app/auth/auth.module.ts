import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { MotDePasseOublierComponent } from './mot-de-passe-oublier/mot-de-passe-oublier.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [LoginComponent, MotDePasseOublierComponent, RegisterComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class AuthModule { }

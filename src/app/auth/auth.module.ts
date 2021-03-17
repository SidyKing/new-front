import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
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
  ],
  schemas:[ ////// ------inclus dans ce module pour accepter les balises de ngx-bootstrap en cas de génération d'erreurs
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA 
  ]
})
export class AuthModule { }

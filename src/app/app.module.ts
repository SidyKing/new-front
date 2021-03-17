/**
 *@license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {
  NbChatModule,
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule,
} from '@nebular/theme';
import { AuthComponent } from './auth/auth.component';
import { AuthModule } from './auth/auth.module';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker'; // pour le format Date()
import { AlertModule } from 'ngx-bootstrap/alert';// pour les alerts ( non intégré en ce moment)
import { ModalModule } from 'ngx-bootstrap/modal';// pour les deux Modals de ala page register ( les 2 profils )
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';// a été ajouter/
import { AccordionModule } from 'ngx-bootstrap/accordion';//celui ci aussi pour dérouler un contenu de type hidden_caché (non intégré)

@NgModule({
  declarations: [AppComponent, AuthComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbChatModule.forRoot({
      messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
    }),
    CoreModule.forRoot(),
    ThemeModule.forRoot(),
    AuthModule,
    AccordionModule.forRoot(), //add
    ModalModule.forRoot(),//add
    AlertModule.forRoot(),// add
    //BsDatepickerModule.forRoot(),//add but not used
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}

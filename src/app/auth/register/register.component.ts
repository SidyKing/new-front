import { Component,TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal'; //add
import { AlertComponent } from 'ngx-bootstrap/alert/alert.component'; // pour les alerts de Bienvenue

@Component({
  selector: 'ngx-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent  {

  alerts: any[] = []; 
  add(): void {
    this.alerts.push({
      type: 'success',
      msg: `Votre compte a été crée aevc succes !!  (Inscript à : ${new Date().toLocaleTimeString()})`,
      timeout: 5000
    });
  }
  modalRef!: BsModalRef;
  constructor(private modalService: BsModalService) {}
  
  openModal(template: TemplateRef<any>) { //modal method
    this.modalRef = this.modalService.show(template);
  }
  onClosed(dismissedAlert: AlertComponent): void { //alert method
    this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
  }

}

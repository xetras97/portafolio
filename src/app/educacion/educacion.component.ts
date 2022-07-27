import { Component, OnInit } from '@angular/core';
import { ApiService } from '../servicios/api.service';
import { LoggedService } from '../servicios/logged.service';
import { AppComponent } from '../app.component';
import { EducacionModalComponent } from '../educacion-modal/educacion-modal.component';
import {NgbModal, ModalDismissReasons, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  myEducacionData:any;
  constructor(public educacionData:ApiService, public loggedService:LoggedService, public appComponent:AppComponent, private educacionModal:EducacionModalComponent, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.educacionData.obtenerDatosPersonales("estudios").subscribe(data =>{
      this.myEducacionData=data;
    });
  }

  setId(id:number){
    this.educacionData.obtenerId(id);
  }

  setModal(){
    this.educacionModal.setDefaultForm();
  }

  year:number = 2022;

  open() {
    const modalRef = this.modalService.open(EducacionModalComponent);
  }
}

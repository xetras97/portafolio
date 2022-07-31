import { Component, OnInit } from '@angular/core';
import { ApiService } from '../servicios/api.service';
import { LoggedService } from '../servicios/logged.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  myExperienciaData:any;
  constructor(public loggedService:LoggedService, private apiService:ApiService) { }

  ngOnInit(): void {
    this.apiService.obtenerDatosPersonales("experiencias").subscribe(data =>{
      this.myExperienciaData=data;
    });
  }

  setId(id:number){
    this.apiService.obtenerId(id);
  }

  setComponente(componente:string){
    this.apiService.obtenerComponente(componente);
  }
  actualizarExperiencia(){
    this.ngOnInit();
  }
}

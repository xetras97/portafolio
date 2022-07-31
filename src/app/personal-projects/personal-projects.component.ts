import { Component, OnInit } from '@angular/core';
import { DeleteModalComponent } from '../delete-modal/delete-modal.component';
import { ApiService } from '../servicios/api.service';
import { LoggedService } from '../servicios/logged.service';

@Component({
  selector: 'app-personal-projects',
  templateUrl: './personal-projects.component.html',
  styleUrls: ['./personal-projects.component.css']
})
export class PersonalProjectsComponent implements OnInit{

  myProjectsData:any;
  constructor(private projectsData:ApiService, public loggedService:LoggedService) { }

  ngOnInit(): void {
    this.projectsData.obtenerDatosPersonales("proyectos").subscribe(data =>{
      this.myProjectsData=data;
    });
  }

  setId(id:number){
    this.projectsData.obtenerId(id);
  }

  setComponente(componente:string){
    this.projectsData.obtenerComponente(componente);
  }

  actualizarProyectos(){
    this.ngOnInit();
  }
}

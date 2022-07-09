import { Component, OnInit } from '@angular/core';
import { ApiService } from '../servicios/api.service';

@Component({
  selector: 'app-personal-projects',
  templateUrl: './personal-projects.component.html',
  styleUrls: ['./personal-projects.component.css']
})
export class PersonalProjectsComponent implements OnInit {

  myProjectsData:any;
  constructor(private projectsData:ApiService ) { }

  ngOnInit(): void {
    this.projectsData.obtenerDatosPersonales("proyectos").subscribe(data =>{
      this.myProjectsData=data;
      console.log(this.myProjectsData);
    });
  }

}

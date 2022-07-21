import { Component, OnInit } from '@angular/core';
import { ApiService } from '../servicios/api.service';
import { LoggedService } from '../servicios/logged.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  myEducacionData:any;
  constructor(private educacionData:ApiService, public loggedService:LoggedService) { }

  ngOnInit(): void {
    this.educacionData.obtenerDatosPersonales("estudios").subscribe(data =>{
      this.myEducacionData=data;
    });
  }

  year:number = 2022;

}

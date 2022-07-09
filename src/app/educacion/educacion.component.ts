import { Component, OnInit } from '@angular/core';
import { ApiService } from '../servicios/api.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  myEducacionData:any;
  constructor(private educacionData:ApiService ) { }

  ngOnInit(): void {
    this.educacionData.obtenerDatosPersonales("estudios").subscribe(data =>{
      this.myEducacionData=data;
    });
  }

  year:number = 2022;

}

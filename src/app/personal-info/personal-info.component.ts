import { Component, OnInit } from '@angular/core';
import { ApiService } from '../servicios/api.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {
  miPersonalData:any;
  constructor(private personalData:ApiService ) { }

  ngOnInit(): void {
    this.personalData.obtenerDatosPersonales("desarrollador").subscribe(data =>{
      console.log("Desarrollador" + JSON.stringify(data));
      this.miPersonalData=data[0];
    });
  }
}

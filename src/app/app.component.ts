import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from './servicios/api.service';
import { LoggedService } from './servicios/logged.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'naon-frontend';
  prueba:FormGroup;
  desarrollador:any;
  constructor(private socialNet:ApiService, public logged:LoggedService, private formBuilder:FormBuilder) {
    this.prueba=this.formBuilder.group(
      {
        "titulo":[null, null],
        "año":[null, null],
        "institucion":[null, null],
        "imagen":[null, null],
        "periodo":[null, null],
      }
    )
   }

  ngOnInit(): void {
    this.socialNet.obtenerDatosPersonales("desarrollador").subscribe(data =>{
      this.desarrollador=data[0];
    });
    this.logged.isLoggedIn();
  }

  titulo:string = "";


  obtenerModal (id:number){
    this.socialNet.obtenerPorId("estudios", id).subscribe(data =>{
      this.titulo=data.titulo;
    });
    //ABRIR MODAL;
  }

  cambiarModal(){
    this.prueba.patchValue({
      "periodo": "DALE GATO"
    })
    console.log("se ejecuto");
    console.log(this.prueba.value);
  }
}

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

  afuConfig = {
    uploadAPI: {
      url:"http://localhost:8080/upload",
      headers: {
        "Authorization" : `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhcmdwcm9ncmFtYSIsImlhdCI6MTY1ODY4NjY5NSwiZXhwIjoxNjU4NzI5ODk1fQ.e3DqTd4o3ax2jhUWEX9HuMy4DiXnB2wZqSCWe-4Hl_Rzkw_pw-muPCKOuXgdk2K-Sm2zmvON-Ds0tk1BMZhRLQ`
         },
    },
    multiple: false,
    formatsAllowed: ".jpg,.png",
    maxSize: 1,
    hideProgressBar: false,
    hideResetBtn: true,
    hideSelectBtn: false,
    fileNameIndex: false,
    autoUpload: true,
    replaceTexts: {
      selectFileBtn: 'Seleccionar Imagenes',
      uploadBtn: 'Cargar',
      dragNDropBox: 'Arrastra aqui',
      afterUploadMsg_success: 'Cargado correctamente',
      afterUploadMsg_error: 'Fallo la carga',
      sizeLimit: 'Tamaño maximo'
    }
};

  multiple:boolean=false;
  single:boolean=false;

  filesNameList: string[] = [];
  filePic:string|undefined;
  fileBanner:string|undefined;

  resetFiles(){
    this.single = true;
    this.filePic=undefined;
    this.fileBanner=undefined;
    console.log(this.filePic);
    console.log(this.fileBanner);
  }

  picSelected(evento:any): void{
    this.single = false;
    this.filePic = evento.target.files[0].name;
    console.log(this.filePic);
  }

  bannerSelected(evento:any): void{
    this.single = false;
    this.fileBanner = evento.target.files[0].name;
    console.log(this.fileBanner);
  }
}

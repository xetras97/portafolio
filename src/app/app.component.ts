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
  desarrolladorForm:FormGroup;
  desarrollador:any;
  constructor(private socialNet:ApiService, public logged:LoggedService, private formBuilder:FormBuilder) {
    this.desarrolladorForm=this.formBuilder.group(
      {
        "nombreDesarrollador": [null, null],
        "apellido": [null, null],
        "titulo": [null, null],
        "descripcion": [null, null],
        "tituloSecundario": [null, null],
        "github": [null, null],
        "linkedin": [null, null],
        "instagram": [null, null],
      }
    )
   }

  ngOnInit(): void {
    this.socialNet.obtenerDatosPersonales("desarrollador").subscribe(data =>{
      this.desarrollador=data[0];
      this.rellenar()
    });
    this.logged.isLoggedIn();
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

  postEducacionBd(){
    let formData = this.desarrolladorForm.value;
    let data = {
      "idDesarrollador": 1,
      "nombre": formData.nombreDesarrollador,
      "apellido": formData.apellido,
      "titulo": formData.titulo,
      "img": this.desarrollador.img,
      "descripcion": formData.descripcion,
      "tituloSecundario": formData.tituloSecundario,
      "github": formData.github,
      "linkedin": formData.linkedin,
      "instagram": formData.instagram,
      "banner": this.desarrollador.banner
    };
    if(this.filePic!=undefined){
      data.img = 'http://localhost:8080/files/'+this.filePic;
    }
    if(this.fileBanner!=undefined){
      data.banner = 'http://localhost:8080/files/'+this.fileBanner;
    }
    let dataToSend = data;
    console.log(dataToSend);
    return this.socialNet.enviarDatos("desarrollador", dataToSend).subscribe(xd=>console.log(xd));
  }

  rellenar(){
    this.desarrolladorForm.setValue({
      "nombreDesarrollador": this.desarrollador.nombre,
      "apellido": this.desarrollador.apellido,
      "titulo": this.desarrollador.titulo,
      "descripcion": this.desarrollador.descripcion,
      "tituloSecundario": this.desarrollador.tituloSecundario,
      "github": this.desarrollador.github,
      "linkedin": this.desarrollador.linkedin,
      "instagram": this.desarrollador.instagram
  })
  }
}

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
  multiple:boolean=false;
  single:boolean=false;
  filesDeletePic:string[] = [];
  filesDeleteBanner:string[] = [];
  filePic:string|undefined;
  fileBanner:string|undefined;
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

  constructor(private socialNet:ApiService, public logged:LoggedService, private formBuilder:FormBuilder) {
    this.desarrolladorForm=this.formBuilder.group(
      {
        "nombreDesarrollador": [null, [Validators.required]],
        "apellido": [null, [Validators.required]],
        "titulo": [null, [Validators.required]],
        "descripcion": [null, [Validators.required]],
        "tituloSecundario": [null, [Validators.required]],
        "github": [null, [Validators.required]],
        "linkedin": [null, [Validators.required]],
        "instagram": [null, [Validators.required]],
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

  get NombreDesarrollador(){
    return this.desarrolladorForm.get("nombreDesarrollador");
  }
  get Apellido(){
    return this.desarrolladorForm.get("apellido");
  }
  get Titulo(){
    return this.desarrolladorForm.get("titulo");
  }
  get Descripcion(){
    return this.desarrolladorForm.get("descripcion");
  }
  get TituloSecundario(){
    return this.desarrolladorForm.get("tituloSecundario");
  }
  get Github(){
    return this.desarrolladorForm.get("github");
  }
  get Linkedin(){
    return this.desarrolladorForm.get("linkedin");
  }
  get Instagram(){
    return this.desarrolladorForm.get("instagram");
  }


  deletePic(){
    if (this.filesDeletePic.length>0){
      this.filesDeletePic.forEach(file => {
        this.socialNet.deleteFiles(file).subscribe();
      });
      this.filesDeletePic = [];
    }
  }

  deleteBanner(){
    if (this.filesDeleteBanner.length>0){
      this.filesDeleteBanner.forEach(file => {
        this.socialNet.deleteFiles(file).subscribe();
      });
      this.filesDeleteBanner = [];
    }
  }
  resetFiles(){
    this.single = true;
    this.resetPic();
    this.resetBanner();
  }

  resetPic(){
    this.filePic=undefined;
  }

  resetBanner(){
    this.fileBanner=undefined;
  }

  picSelected(evento:any): void{
    this.single = false;
    this.deletePic();
    this.filePic = evento.target.files[0].name;
    this.filesDeletePic.push(evento.target.files[0].name);
    console.log(this.filePic);
  }

  bannerSelected(evento:any): void{
    this.single = false;
    this.deleteBanner();
    this.fileBanner = evento.target.files[0].name;
    this.filesDeleteBanner.push(evento.target.files[0].name);
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
    this.filesDeleteBanner = [];
    this.filesDeletePic = []
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

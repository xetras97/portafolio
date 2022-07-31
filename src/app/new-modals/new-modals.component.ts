import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../servicios/api.service';

@Component({
  selector: 'app-new-modals',
  templateUrl: './new-modals.component.html',
  styleUrls: ['./new-modals.component.css']
})
export class NewModalsComponent implements OnInit {
  experienciaNewModal:FormGroup;
  skillsNewModal:FormGroup;
  softSkillsNewModal:FormGroup;
  languagesNewModal:FormGroup;
  projectsNewModal:FormGroup;
  estudiosNewModal:FormGroup;

  multiple:boolean=false;
  single:boolean=false;

  filesNameList: string[] = [];
  fileName:string|undefined;
  filesDeleteList: string[] = [];
  filesMultipleDeleteList: string[] = [];

  idExperiencia:number = 0;
  idHabilidad:number = 0;
  idProyecto:number = 0;
  idEstudios:number = 0;

  multipleConfig = {
    uploadAPI: {
      url:"https://portfolio-arg-programa-backend.herokuapp.com/upload"
    },
    multiple: true,
    formatsAllowed: ".jpg,.png",
    maxSize: 5,
    hideProgressBar: false,
    hideResetBtn: true,
    hideSelectBtn: false,
    fileNameIndex: false,
    autoUpload: true,
    replaceTexts: {
      selectFileBtn: 'Seleccionar Imagenes',
      afterUploadMsg_success: 'Cargado correctamente',
      afterUploadMsg_error: 'Fallo la carga',
      sizeLimit: 'Tamaño maximo'
    }
  }
  afuConfig = {
    uploadAPI: {
      url:"https://portfolio-arg-programa-backend.herokuapp.com/upload"
    },
    theme: "dragNDrop",
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

  constructor(private apiService:ApiService, private formBuilder:FormBuilder) {
    this.experienciaNewModal=this.formBuilder.group({
      "empresa": [null, [Validators.required]],
      "cargo": [null, [Validators.required]],
      "periodo": [null, [Validators.required]],
      "funcion": [null, [Validators.required]],
    })

    this.skillsNewModal=this.formBuilder.group(
      {
        "nombre": [null, [Validators.required]],
        "nivel": [null, [Validators.required]]
      }
    )

    this.softSkillsNewModal=this.formBuilder.group(
      {
        "nombre": [null, [Validators.required]],
      }
    )

    this.languagesNewModal=this.formBuilder.group(
      {
        "nombre": [null, [Validators.required]],
        "nivel": [null, [Validators.required]]
      }
    )

    this.projectsNewModal=this.formBuilder.group(
      {
        "nombre": [null, [Validators.required]],
        "descripcion": [null, [Validators.required]],
        "stack": [null, [Validators.required]],
        "web": [null, [Validators.required]],
        "github": [null, [Validators.required]],
        "año": [null, [Validators.required]],
        "observaciones": [null, null]
      }
    )
    this.estudiosNewModal=this.formBuilder.group(
      {
        "title":[null, [Validators.required]],
        "year":[null, [Validators.required]],
        "institute":[null, [Validators.required]],
        "time":[null, null],
      }
    )
   }

  ngOnInit(): void {
    this.apiService.obtenerDatosPersonales("experiencias").subscribe(data =>{
      this.idExperiencia=data.length;
    });
    this.apiService.obtenerDatosPersonales("habilidades").subscribe(data =>{
      this.idHabilidad=data.length;
    });
    this.apiService.obtenerDatosPersonales("proyectos").subscribe(data =>{
      this.idProyecto=data.length;
    });
    this.apiService.obtenerDatosPersonales("estudios").subscribe(data =>{
      this.idEstudios=data.length;
    });
  }

  get Empresa(){
    return this.experienciaNewModal.get("empresa");
  }
  get Cargo(){
    return this.experienciaNewModal.get("cargo");
  }
  get Periodo(){
    return this.experienciaNewModal.get("periodo");
  }
  get Funcion(){
    return this.experienciaNewModal.get("funcion");
  }

  get NombreSkill(){
    return this.skillsNewModal.get("nombre");
  }
  get NivelSkill(){
    return this.skillsNewModal.get("nivel");
  }
  get NombreSoft(){
    return this.softSkillsNewModal.get("nombre");
  }
  get NombreLanguages(){
    return this.languagesNewModal.get("nombre");
  }
  get NivelLanguages(){
    return this.languagesNewModal.get("nivel");
  }

  get NombreProject(){
    return this.projectsNewModal.get("nombre");
  }
  get Descripcion(){
    return this.projectsNewModal.get("descripcion");
  }
  get Stack(){
    return this.projectsNewModal.get("stack");
  }
  get Web(){
    return this.projectsNewModal.get("web");
  }
  get Github(){
    return this.projectsNewModal.get("github");
  }
  get Anio(){
    return this.projectsNewModal.get("año");
  }
  get Title(){
    return this.estudiosNewModal.get("title");
  }
  get Year(){
    return this.estudiosNewModal.get("year");
  }
  get Institute(){
    return this.estudiosNewModal.get("institute");
  }

  resetFiles(){
    this.single = true;
    if (this.filesDeleteList.length>0){
      this.filesDeleteList.forEach(file => {
        this.apiService.deleteFiles(file).subscribe();
      });
      this.filesDeleteList = [];
    }
    this.fileName=undefined;
  }

  resetMultipleFiles() {
    this.multiple = true;
    if (this.filesMultipleDeleteList.length>0){
      this.filesMultipleDeleteList.forEach(file => {
        this.apiService.deleteFiles(file).subscribe();
      });
      this.filesMultipleDeleteList = [];
    }
    this.filesNameList=[];
  }

  fileSelected(evento:any): void{
    this.single = false;
    this.fileName = evento.target.files[0].name;
    this.filesDeleteList.push(evento.target.files[0].name);
  }

  multipleFileSelected(evento:any): void{
    this.multiple = false;

    for (let index = 0; index < evento.target.files.length; index++) {
      this.filesNameList.push(evento.target.files[index].name);
      this.filesMultipleDeleteList.push(evento.target.files[index].name);
    }
  }

  postNewExperienciaBd(){
    let formData = this.experienciaNewModal.value;
    let data = {
      "idExperiencia": this.idExperiencia,
      "empresa": formData.empresa,
      "cargo": formData.cargo,
      "periodo": formData.periodo,
      "funcion": formData.funcion,
      "img": ""
    };
    if(this.fileName!=undefined){
      data.img = 'https://portfolio-arg-programa-backend.herokuapp.com/files/'+this.fileName;
    }
    let dataToSend = data;
    return this.apiService.enviarDatos("experiencia", dataToSend).subscribe(data=>{
      this.idExperiencia++;
    });
  }

  postNewSkillsBd(){
    let formData = this.skillsNewModal.value;
    let data = {
      "idHabilidades": this.idHabilidad,
      "nombre": formData.nombre,
      "tipo": "Dura",
      "nivel": formData.nivel,
      "img": "",
      "otro": null
    };
    if(this.fileName!=undefined){
      data.img = 'https://portfolio-arg-programa-backend.herokuapp.com/files/'+this.fileName;
    }
    let dataToSend = data;
    return this.apiService.enviarDatos("habilidad", dataToSend).subscribe(data=>{
      this.idHabilidad++;
    });
  }

  postNewSoftBd(){
    let formData = this.softSkillsNewModal.value;
    let data = {
      "idHabilidades": this.idHabilidad,
      "nombre": formData.nombre,
      "tipo": "Blanda"
    };
    let dataToSend = data;
    return this.apiService.enviarDatos("habilidad", dataToSend).subscribe(data=>{
      this.idHabilidad++;
    });
  }

  postNewLanguagesBd(){
    let formData = this.languagesNewModal.value;
    let data = {
      "idHabilidades": this.idHabilidad,
      "nombre": formData.nombre,
      "tipo": "Idioma",
      "otro": formData.nivel
    };
    let dataToSend = data;
    return this.apiService.enviarDatos("habilidad", dataToSend).subscribe(data=>{
      this.idHabilidad++;
    });
  }

  postNewProjectsBd(){
    let formData = this.projectsNewModal.value;
    let data =  {
      "idProyectos": this.idProyecto,
      "nombre": formData.nombre,
      "imagen": "",
      "descripcion": formData.descripcion,
      "stack": formData.stack,
      "web": formData.web,
      "github": formData.github,
      "año": formData.año,
      "observaciones": formData.observaciones,
      "img2": "",
      "img3": "",
      "img4": "",
      "img5": "",
      "img6": "",
    }
    if(this.fileName!=undefined){
    data.imagen = 'https://portfolio-arg-programa-backend.herokuapp.com/files/'+this.fileName;
    }
    if(this.filesNameList.length!=0){
      if(this.filesNameList[0]!=undefined){
        data.img2='https://portfolio-arg-programa-backend.herokuapp.com/files/'+this.filesNameList[0]
      }
      if(this.filesNameList[1]!=undefined){
        data.img3='https://portfolio-arg-programa-backend.herokuapp.com/files/'+this.filesNameList[1]
      }
      if(this.filesNameList[2]!=undefined){
        data.img4='https://portfolio-arg-programa-backend.herokuapp.com/files/'+this.filesNameList[2]
      }
      if(this.filesNameList[3]!=undefined){
        data.img5='https://portfolio-arg-programa-backend.herokuapp.com/files/'+this.filesNameList[3]
      }
      if(this.filesNameList[4]!=undefined){
        data.img6='https://portfolio-arg-programa-backend.herokuapp.com/files/'+this.filesNameList[4]
      }
    }
    let dataToSend = data;
    return this.apiService.enviarDatos("proyectos", dataToSend).subscribe(data=>{
      this.idProyecto++;
    });
  }

  postNewEducacionBd(){
    let formData = this.estudiosNewModal.value;
    let data = {
      "idEducacion": this.idEstudios,
      "titulo":formData.title,
      "anio": formData.year,
      "institucion": formData.institute,
      "img": "",
      "periodo": formData.time
    };
    if(this.fileName!=undefined){
      data.img = 'https://portfolio-arg-programa-backend.herokuapp.com/files/'+this.fileName;
    }
    let dataToSend = data;
    this.filesDeleteList = [];
    return this.apiService.enviarDatos("estudios", dataToSend).subscribe(data=>{
      this.idEstudios++;
    });
  }


  resetForms(){
    this.skillsNewModal.reset();
    this.softSkillsNewModal.reset();
    this.languagesNewModal.reset();
    this.projectsNewModal.reset();
    this.experienciaNewModal.reset();
    this.estudiosNewModal.reset();
    this.multiple = true;
    this.single = true;
  }
}

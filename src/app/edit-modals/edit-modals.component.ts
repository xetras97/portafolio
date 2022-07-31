import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AngularFileUploaderComponent } from 'angular-file-uploader';
import { ApiService } from '../servicios/api.service';

@Component({
  selector: 'app-edit-modals',
  templateUrl: './edit-modals.component.html',
  styleUrls: ['./edit-modals.component.css']
})
export class EditModalsComponent implements OnInit {

  skillsModals:FormGroup;
  softSkillsModal:FormGroup;
  languagesModal:FormGroup;
  projectsModal:FormGroup;
  experienciaModal:FormGroup;

  multiple:boolean=false;
  single:boolean=false;

  filesNameList: string[] = [];
  fileName:string|undefined;
  filesDeleteList: string[] = [];
  filesMultipleDeleteList: string[] = [];
  dataForm:any;
  projectsForm:any;
  experienciaForm:any;

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

  constructor(private apiService:ApiService, private formBuilder:FormBuilder, public activeModal:NgbActiveModal) {
    this.skillsModals=this.formBuilder.group(
      {
        "nombre": [null, [Validators.required]],
        "nivel": [null, [Validators.required]]
      }
    )

    this.softSkillsModal=this.formBuilder.group(
      {
        "nombre": [null, [Validators.required]],
      }
    )

    this.languagesModal=this.formBuilder.group(
      {
        "nombre": [null, [Validators.required]],
        "nivel": [null, [Validators.required]]
      }
    )

    this.projectsModal=this.formBuilder.group(
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

    this.experienciaModal=this.formBuilder.group({
      "empresa": [null, [Validators.required]],
      "cargo": [null, [Validators.required]],
      "periodo": [null, [Validators.required]],
      "funcion": [null, [Validators.required]],
    })
   }

  ngOnInit(): void {
    this.apiService.obtenerDatosPersonales("habilidades").subscribe(data =>{
      this.dataForm=data;
    });
    this.apiService.obtenerDatosPersonales("proyectos").subscribe(data =>{
      this.projectsForm=data;
    });
    this.apiService.obtenerDatosPersonales("experiencias").subscribe(data =>{
      this.experienciaForm=data;
    });
  }

  get NombreSkill(){
    return this.skillsModals.get("nombre");
  }
  get NivelSkill(){
    return this.skillsModals.get("nivel");
  }
  get NombreSoft(){
    return this.softSkillsModal.get("nombre");
  }
  get NombreLanguages(){
    return this.languagesModal.get("nombre");
  }
  get NivelLanguages(){
    return this.languagesModal.get("nivel");
  }

  get NombreProject(){
    return this.projectsModal.get("nombre");
  }
  get Descripcion(){
    return this.projectsModal.get("descripcion");
  }
  get Stack(){
    return this.projectsModal.get("stack");
  }
  get Web(){
    return this.projectsModal.get("web");
  }
  get Github(){
    return this.projectsModal.get("github");
  }
  get Anio(){
    return this.projectsModal.get("año");
  }

  get Empresa(){
    return this.experienciaModal.get("empresa");
  }
  get Cargo(){
    return this.experienciaModal.get("cargo");
  }
  get Periodo(){
    return this.experienciaModal.get("periodo");
  }
  get Funcion(){
    return this.experienciaModal.get("funcion");
  }

  setDefaultForm (){
    let id = this.apiService.id;
    return this.setForm(this.dataForm[id].nombre, this.dataForm[id].nivel)
  }

  setLanguageForm (){
    let id = this.apiService.id;
    return this.setForm(this.dataForm[id].nombre, this.dataForm[id].otro)
  }

  setForm(nombre:string, nivel:string){
    this.skillsModals.setValue({
      "nombre":nombre,
      "nivel":nivel
    })
    this.languagesModal.setValue({
      "nombre":nombre,
      "nivel":nivel
    })
  }

  setSoft(nombre:string){
    this.softSkillsModal.setValue({
      "nombre":nombre
    })
  }

  setSoftDefaultForm (){
    let id = this.apiService.id;
    return this.setSoft(this.dataForm[id].nombre)
  }

  setProject (nombre:string, descripcion:string, stack:string, web:string,github:string, año:number, observaciones:string){
    this.projectsModal.setValue({
      "nombre": nombre,
      "descripcion": descripcion,
      "stack": stack,
      "web": web,
      "github": github,
      "año": año,
      "observaciones": observaciones
    })
  }

  setProjectDefaultForm (){
    let id = this.apiService.id;
    return this.setProject(this.projectsForm[id].nombre, this.projectsForm[id].descripcion, this.projectsForm[id].stack, this.projectsForm[id].web, this.projectsForm[id].github, this.projectsForm[id].año, this.projectsForm[id].observaciones)
  }

  setExperiencia (empresa:string, cargo:string, periodo:string, funcion:string){
    this.experienciaModal.setValue({
      "empresa": empresa,
      "cargo": cargo,
      "periodo": periodo,
      "funcion": funcion
    })
  }

  setExperienciaDefaultForm (){
    let id = this.apiService.id;
    return this.setExperiencia(this.experienciaForm[id].empresa, this.experienciaForm[id].cargo, this.experienciaForm[id].periodo, this.experienciaForm[id].funcion)
  }

  resetForm(){
    this.skillsModals.reset();
    this.softSkillsModal.reset();
    this.languagesModal.reset();
    this.projectsModal.reset();
    this.experienciaModal.reset();
    this.multiple = true;
    this.single = true;
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

  postSkillsBd(){
    let id = this.apiService.id;
    let formData = this.skillsModals.value;
    let data = {
      "idHabilidades": id,
      "nombre": formData.nombre,
      "tipo": "Dura",
      "nivel": formData.nivel,
      "img": this.dataForm[id].img,
      "otro": null
    };
    if(this.fileName!=undefined){
      data.img = 'https://portfolio-arg-programa-backend.herokuapp.com/files/'+this.fileName;
    }
    let dataToSend = data;
    return this.apiService.enviarDatos("habilidad", dataToSend).subscribe();
  }

  postSoftBd(){
    let id = this.apiService.id;
    let formData = this.softSkillsModal.value;
    let data = {
      "idHabilidades": id,
      "nombre": formData.nombre,
      "tipo": "Blanda"
    };
    let dataToSend = data;
    return this.apiService.enviarDatos("habilidad", dataToSend).subscribe();
  }

  postLanguagesBd(){
    let id = this.apiService.id;
    let formData = this.languagesModal.value;
    let data = {
      "idHabilidades": id,
      "nombre": formData.nombre,
      "tipo": "Idioma",
      "otro": formData.nivel
    };
    let dataToSend = data;
    return this.apiService.enviarDatos("habilidad", dataToSend).subscribe();
  }

  postProjectsBd(){
    let id = this.apiService.id;
    let formData = this.projectsModal.value;
    let data =  {
      "idProyectos": id,
      "nombre": formData.nombre,
      "imagen": this.projectsForm[id].imagen,
      "descripcion": formData.descripcion,
      "stack": formData.stack,
      "web": formData.web,
      "github": formData.github,
      "año": formData.año,
      "observaciones": formData.observaciones,
      "img2": this.projectsForm[id].img2,
      "img3": this.projectsForm[id].img3,
      "img4": this.projectsForm[id].img4,
      "img5": this.projectsForm[id].img5,
      "img6": this.projectsForm[id].img6,
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
    return this.apiService.enviarDatos("proyectos", dataToSend).subscribe();
  }

  postExperienciaBd(){
    let id = this.apiService.id;
    let formData = this.experienciaModal.value;
    let data = {
      "idExperiencia": id,
      "empresa": formData.empresa,
      "cargo": formData.cargo,
      "periodo": formData.periodo,
      "funcion": formData.funcion,
      "img": this.experienciaForm[id].img
    };
    if(this.fileName!=undefined){
      data.img = 'https://portfolio-arg-programa-backend.herokuapp.com/files/'+this.fileName;
    }
    let dataToSend = data;
    return this.apiService.enviarDatos("experiencia", dataToSend).subscribe();
  }

}

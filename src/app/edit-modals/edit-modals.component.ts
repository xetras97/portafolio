import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  constructor(private apiService:ApiService, private formBuilder:FormBuilder, public activeModal:NgbActiveModal) {
    this.skillsModals=this.formBuilder.group(
      {
        "nombre": [null, null],
        "nivel": [null, null]
      }
    )

    this.softSkillsModal=this.formBuilder.group(
      {
        "nombre": [null, null],
      }
    )

    this.languagesModal=this.formBuilder.group(
      {
        "nombre": [null, null],
        "nivel": [null, null]
      }
    )

    this.projectsModal=this.formBuilder.group(
      {
        "nombre": [null, null],
        "descripcion": [null, null],
        "stack": [null, null],
        "web": [null, null],
        "github": [null, null],
        "año": [null, null],
        "observaciones": [null, null]
      }
    )
   }


  dataForm:any;
  projectsForm:any;
  ngOnInit(): void {
    this.apiService.obtenerDatosPersonales("habilidades").subscribe(data =>{
      this.dataForm=data;
    });
    this.apiService.obtenerDatosPersonales("proyectos").subscribe(data =>{
      this.projectsForm=data;
    });
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
  resetForm(){
    this.skillsModals.reset();
    this.softSkillsModal.reset();
    this.languagesModal.reset();
    this.projectsModal.reset();
  }

  multipleConfig = {
    uploadAPI: {
      url:"http://localhost:8080/upload"
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
      url:"http://localhost:8080/upload"
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

multiple:boolean=false;
single:boolean=false;

filesNameList: string[] = [];
fileName:string|undefined;

resetFiles(){
  this.single = true;
  this.fileName=undefined;
  console.log(this.fileName);
}

resetMultipleFiles() {
  this.multiple = true;
  this.filesNameList=[];
  console.log(this.filesNameList);
}

fileSelected(evento:any): void{
  this.single = false;
  this.fileName = evento.target.files[0].name;
  console.log(this.fileName);
}

multipleFileSelected(evento:any): void{
  this.multiple = false;

  for (let index = 0; index < evento.target.files.length; index++) {
    this.filesNameList.push(evento.target.files[index].name);
  }
  console.log(this.filesNameList);
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
    data.img = 'http://localhost:8080/files/'+this.fileName;
  }
  let dataToSend = data;
  return this.apiService.enviarDatos("habilidad", dataToSend).subscribe(xd=>console.log(xd));
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
  return this.apiService.enviarDatos("habilidad", dataToSend).subscribe(xd=>console.log(xd));
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
  return this.apiService.enviarDatos("habilidad", dataToSend).subscribe(xd=>console.log(xd));
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
  data.imagen = 'http://localhost:8080/files/'+this.fileName;
  }
  if(this.filesNameList.length!=0){
    if(this.filesNameList[0]!=undefined){
      data.img2='http://localhost:8080/files/'+this.filesNameList[0]
    }
    if(this.filesNameList[1]!=undefined){
      data.img3='http://localhost:8080/files/'+this.filesNameList[1]
    }
    if(this.filesNameList[2]!=undefined){
      data.img4='http://localhost:8080/files/'+this.filesNameList[2]
    }
    if(this.filesNameList[3]!=undefined){
      data.img5='http://localhost:8080/files/'+this.filesNameList[3]
    }
    if(this.filesNameList[4]!=undefined){
      data.img6='http://localhost:8080/files/'+this.filesNameList[4]
    }
  }
  let dataToSend = data;
  console.log(dataToSend)
  console.log(this.filesNameList[4])
  return this.apiService.enviarDatos("proyectos", dataToSend).subscribe(xd=>console.log(xd));
}

}

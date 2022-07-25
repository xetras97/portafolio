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

  skillsModal:FormGroup;
  softSkillsModal:FormGroup;
  languagesModal:FormGroup;
  projectsModal:FormGroup;
  constructor(private educacion:ApiService, private formBuilder:FormBuilder, public activeModal:NgbActiveModal) {
    this.skillsModal=this.formBuilder.group(
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
    this.educacion.obtenerDatosPersonales("habilidades").subscribe(data =>{
      this.dataForm=data;
    });
    this.educacion.obtenerDatosPersonales("proyectos").subscribe(data =>{
      this.projectsForm=data;
    });
  }

  setDefaultForm (){
    let id = this.educacion.id;
    return this.setForm(this.dataForm[id].nombre, this.dataForm[id].nivel)
  }

  setLanguageForm (){
    let id = this.educacion.id;
    return this.setForm(this.dataForm[id].nombre, this.dataForm[id].otro)
  }

  setForm(nombre:string, nivel:string){
    this.skillsModal.setValue({
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
    let id = this.educacion.id;
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
    let id = this.educacion.id;
    return this.setProject(this.projectsForm[id].nombre, this.projectsForm[id].descripcion, this.projectsForm[id].stack, this.projectsForm[id].web, this.projectsForm[id].github, this.projectsForm[id].año, this.projectsForm[id].observaciones)
  }
  resetForm(){
    this.skillsModal.reset();
    this.softSkillsModal.reset();
    this.languagesModal.reset();
    this.projectsModal.reset();
  }

  multipleConfig = {
    uploadAPI: {
      url:"http://localhost:8080/upload",
      headers: {
        "Authorization" : `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhcmdwcm9ncmFtYSIsImlhdCI6MTY1ODY4NjY5NSwiZXhwIjoxNjU4NzI5ODk1fQ.e3DqTd4o3ax2jhUWEX9HuMy4DiXnB2wZqSCWe-4Hl_Rzkw_pw-muPCKOuXgdk2K-Sm2zmvON-Ds0tk1BMZhRLQ`
         },
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
      url:"http://localhost:8080/upload",
      headers: {
        "Authorization" : `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhcmdwcm9ncmFtYSIsImlhdCI6MTY1ODY4NjY5NSwiZXhwIjoxNjU4NzI5ODk1fQ.e3DqTd4o3ax2jhUWEX9HuMy4DiXnB2wZqSCWe-4Hl_Rzkw_pw-muPCKOuXgdk2K-Sm2zmvON-Ds0tk1BMZhRLQ`
         },
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
}

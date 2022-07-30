import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../servicios/api.service';

@Component({
  selector: 'app-educacion-modal',
  templateUrl: './educacion-modal.component.html',
  styleUrls: ['./educacion-modal.component.css']
})
export class EducacionModalComponent implements OnInit {
  test:FormGroup;
  constructor(private educacion:ApiService, private formBuilder:FormBuilder, public activeModal:NgbActiveModal) {
    this.test=this.formBuilder.group(
      {
        "title":[null, [Validators.required]],
        "year":[null, [Validators.required]],
        "institute":[null, [Validators.required]],
        "time":[null, null],
      }
    )
   }
   dataForm:any;
  ngOnInit(): void {
    this.educacion.obtenerDatosPersonales("estudios").subscribe(data =>{
      this.dataForm=data;
    });
  }

  get Title(){
    return this.test.get("title");
  }
  get Year(){
    return this.test.get("year");
  }
  get Institute(){
    return this.test.get("institute");
  }

  setDefaultForm (){
    let id = this.educacion.id;
    return this.setForm(this.dataForm[id].titulo, this.dataForm[id].anio, this.dataForm[id].institucion, this.dataForm[id].periodo)
  }

  setForm(titulo:string, año:number, institucion:string, periodo:string){
    this.test.setValue({
      "title":titulo,
      "year":año,
      "institute":institucion,
      "time":periodo,
    })
  }

  resetForm(){
    this.test.reset();
    this.single=true;
  }

//Imagen Upload
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

single:boolean=false;


fileName:string|undefined;
filesDeleteList: string[] = [];

resetFiles(){
  this.single = true;
  if (this.filesDeleteList.length>0){
    this.filesDeleteList.forEach(file => {
      this.educacion.deleteFiles(file).subscribe();
    });
    this.filesDeleteList = [];
  }
  this.fileName=undefined;
  console.log(this.fileName);
}

fileSelected(evento:any): void{
  this.single = false;
  this.fileName = evento.target.files[0].name;
  this.filesDeleteList.push(evento.target.files[0].name)
  console.log(this.filesDeleteList);
}

postEducacionBd(){
  let id = this.educacion.id;
  let formData = this.test.value;
  let data = {
    "idEducacion": id,
    "titulo":formData.title,
    "anio": formData.year,
    "institucion": formData.institute,
    "img": this.dataForm[id].img,
    "periodo": formData.time
  };
  if(this.fileName!=undefined){
    data.img = 'http://localhost:8080/files/'+this.fileName;
  }
  let dataToSend = data;
  this.filesDeleteList = [];
  console.log(dataToSend);
  return this.educacion.enviarDatos("estudios", dataToSend).subscribe();
}

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
        "title":[null, null],
        "year":[null, null],
        "institute":[null, null],
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

resetFiles(){
  this.single = true;
  this.fileName=undefined;
  console.log(this.fileName);
}

fileSelected(evento:any): void{
  this.single = false;
  this.fileName = evento.target.files[0].name;
  console.log(this.fileName);
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
  console.log(dataToSend);
  return this.educacion.enviarDatos("estudios", dataToSend).subscribe(xd=>console.log(xd));
}

}

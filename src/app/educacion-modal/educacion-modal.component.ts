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

  async setDefaultForm (){
    let id = this.educacion.id;
    return this.setForm(this.dataForm[id].titulo, this.dataForm[id].año, this.dataForm[id].institucion, this.dataForm[id].periodo)
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

}

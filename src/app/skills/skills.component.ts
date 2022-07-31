import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ApiService } from '../servicios/api.service';
import { LoggedService } from '../servicios/logged.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  mySkillsData:any;
  hardSkills:any[]= [];
  softSkills:any[]= [];
  languagesSkills:any[]= [];

  constructor(private skillsData:ApiService, public loggedService:LoggedService) { }

  ngOnInit(): void {
    this.skillsData.obtenerDatosPersonales("habilidades").subscribe(data =>{
      this.mySkillsData=data;
      for(let mySkillsData of this.mySkillsData){
        if(mySkillsData.tipo=="Dura"){
          this.hardSkills.push(mySkillsData);
        }
        if(mySkillsData.tipo=="Blanda"){
          this.softSkills.push(mySkillsData);
        }
        if(mySkillsData.tipo=="Idioma"){
          this.languagesSkills.push(mySkillsData);
        }
      }
    });
  }

  @ViewChild('circle')
  circle!: ElementRef;

  skills:string = "hard";
  isVisible(element:any) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  setId(id:number){
    this.skillsData.obtenerId(id);
  }

  setComponente(componente:string){
    this.skillsData.obtenerComponente(componente);
  }
  actualizarSkills(){
    this.hardSkills = [];
    this.softSkills = [];
    this.languagesSkills = [];
    return this.ngOnInit();
  }
}

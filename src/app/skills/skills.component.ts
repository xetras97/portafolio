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
  constructor(private skillsData:ApiService, public loggedService:LoggedService) { }

  ngOnInit(): void {
    this.skillsData.obtenerDatosPersonales("habilidades").subscribe(data =>{
      this.mySkillsData=data;
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
}

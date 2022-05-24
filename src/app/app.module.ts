import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { EducacionComponent } from './educacion/educacion.component';
import { SkillsComponent } from './skills/skills.component';
import { PersonalProjectsComponent } from './personal-projects/personal-projects.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalInfoComponent,
    EducacionComponent,
    SkillsComponent,
    PersonalProjectsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent, PersonalInfoComponent, EducacionComponent, SkillsComponent, PersonalProjectsComponent]
})
export class AppModule { }

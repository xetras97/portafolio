import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { EducacionComponent } from './educacion/educacion.component';
import { SkillsComponent } from './skills/skills.component';
import { PersonalProjectsComponent } from './personal-projects/personal-projects.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { EducacionModalComponent } from './educacion-modal/educacion-modal.component';
import {NgbModule, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { EditModalsComponent } from './edit-modals/edit-modals.component';
import { AngularFileUploaderModule } from "angular-file-uploader";


@NgModule({
  declarations: [
    AppComponent,
    PersonalInfoComponent,
    EducacionComponent,
    SkillsComponent,
    PersonalProjectsComponent,
    LoginComponent,
    EducacionModalComponent,
    EditModalsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    AngularFileUploaderModule
  ],
  providers: [AppComponent, EducacionModalComponent, NgbActiveModal],
  bootstrap: [AppComponent, PersonalInfoComponent, EducacionComponent, SkillsComponent, PersonalProjectsComponent, EducacionModalComponent]
})
export class AppModule { }

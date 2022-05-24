"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var personal_info_component_1 = require("./personal-info/personal-info.component");
var educacion_component_1 = require("./educacion/educacion.component");
var skills_component_1 = require("./skills/skills.component");
var personal_projects_component_1 = require("./personal-projects/personal-projects.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                personal_info_component_1.PersonalInfoComponent,
                educacion_component_1.EducacionComponent,
                skills_component_1.SkillsComponent,
                personal_projects_component_1.PersonalProjectsComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent, personal_info_component_1.PersonalInfoComponent, educacion_component_1.EducacionComponent, skills_component_1.SkillsComponent, personal_projects_component_1.PersonalProjectsComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

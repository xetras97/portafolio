"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __decorate = void 0 && (void 0).__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

exports.__esModule = true;
exports.AppModule = void 0;

var core_1 = require("@angular/core");

var platform_browser_1 = require("@angular/platform-browser");

var forms_1 = require("@angular/forms");

var http_1 = require("@angular/common/http");

var app_component_1 = require("./app.component");

var personal_info_component_1 = require("./personal-info/personal-info.component");

var educacion_component_1 = require("./educacion/educacion.component");

var skills_component_1 = require("./skills/skills.component");

var personal_projects_component_1 = require("./personal-projects/personal-projects.component");

var app_routing_module_1 = require("./app-routing.module");

var login_component_1 = require("./login/login.component");

var educacion_modal_component_1 = require("./educacion-modal/educacion-modal.component");

var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");

var AppModule =
/** @class */
function () {
  function AppModule() {}

  AppModule = __decorate([core_1.NgModule({
    declarations: [app_component_1.AppComponent, personal_info_component_1.PersonalInfoComponent, educacion_component_1.EducacionComponent, skills_component_1.SkillsComponent, personal_projects_component_1.PersonalProjectsComponent, login_component_1.LoginComponent, educacion_modal_component_1.EducacionModalComponent],
    imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpClientModule, app_routing_module_1.AppRoutingModule, forms_1.ReactiveFormsModule, ng_bootstrap_1.NgbModule],
    providers: [app_component_1.AppComponent, educacion_modal_component_1.EducacionModalComponent, ng_bootstrap_1.NgbActiveModal],
    bootstrap: [app_component_1.AppComponent, personal_info_component_1.PersonalInfoComponent, educacion_component_1.EducacionComponent, skills_component_1.SkillsComponent, personal_projects_component_1.PersonalProjectsComponent, educacion_modal_component_1.EducacionModalComponent]
  })], AppModule);
  return AppModule;
}();

exports.AppModule = AppModule;
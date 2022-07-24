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
exports.EducacionComponent = void 0;

var core_1 = require("@angular/core");

var educacion_modal_component_1 = require("../educacion-modal/educacion-modal.component");

var EducacionComponent =
/** @class */
function () {
  function EducacionComponent(educacionData, loggedService, appComponent, educacionModal, modalService) {
    this.educacionData = educacionData;
    this.loggedService = loggedService;
    this.appComponent = appComponent;
    this.educacionModal = educacionModal;
    this.modalService = modalService;
    this.year = 2022;
  }

  EducacionComponent.prototype.ngOnInit = function () {
    var _this = this;

    this.educacionData.obtenerDatosPersonales("estudios").subscribe(function (data) {
      _this.myEducacionData = data;
    });
  };

  EducacionComponent.prototype.setId = function (id) {
    this.educacionData.obtenerId(id);
  };

  EducacionComponent.prototype.open = function () {
    var modalRef = this.modalService.open(educacion_modal_component_1.EducacionModalComponent);
  };

  EducacionComponent = __decorate([core_1.Component({
    selector: 'app-educacion',
    templateUrl: './educacion.component.html',
    styleUrls: ['./educacion.component.css']
  })], EducacionComponent);
  return EducacionComponent;
}();

exports.EducacionComponent = EducacionComponent;
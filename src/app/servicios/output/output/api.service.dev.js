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
exports.ApiService = void 0;

var core_1 = require("@angular/core");

var ApiService =
/** @class */
function () {
  function ApiService(http) {
    this.http = http;
    this.url = "http://localhost:8080/ver/";
    this.id = 1;
  }

  ApiService.prototype.obtenerDatosPersonales = function (componente) {
    return this.http.get(this.url + componente);
  };

  ApiService.prototype.obtenerPorId = function (componente, id) {
    return this.http.get(this.url + componente + "/" + id);
  };

  ApiService.prototype.obtenerId = function (idNumber) {
    this.id = idNumber;
    console.log(this.id);
  };

  ApiService = __decorate([core_1.Injectable({
    providedIn: 'root'
  })], ApiService);
  return ApiService;
}();

exports.ApiService = ApiService;
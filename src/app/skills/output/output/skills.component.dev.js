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
exports.SkillsComponent = void 0;

var core_1 = require("@angular/core");

var SkillsComponent =
/** @class */
function () {
  function SkillsComponent(skillsData) {
    this.skillsData = skillsData;
    this.skills = "hard";
  }

  SkillsComponent.prototype.ngOnInit = function () {
    var _this = this;

    this.skillsData.obtenerDatosPersonales("habilidades").subscribe(function (data) {
      _this.mySkillsData = data;
    });
  };

  SkillsComponent.prototype.isVisible = function (element) {
    var rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
  };

  __decorate([core_1.ViewChild('circle')], SkillsComponent.prototype, "circle");

  SkillsComponent = __decorate([core_1.Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.css']
  })], SkillsComponent);
  return SkillsComponent;
}();

exports.SkillsComponent = SkillsComponent;
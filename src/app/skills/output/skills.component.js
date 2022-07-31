"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SkillsComponent = void 0;
var core_1 = require("@angular/core");
var SkillsComponent = /** @class */ (function () {
    function SkillsComponent(skillsData, loggedService) {
        this.skillsData = skillsData;
        this.loggedService = loggedService;
        this.hardSkills = [];
        this.softSkills = [];
        this.languagesSkills = [];
        this.skills = "hard";
    }
    SkillsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.skillsData.obtenerDatosPersonales("habilidades").subscribe(function (data) {
            _this.mySkillsData = data;
            for (var _i = 0, _a = _this.mySkillsData; _i < _a.length; _i++) {
                var mySkillsData = _a[_i];
                if (mySkillsData.tipo == "Dura") {
                    _this.hardSkills.push(mySkillsData);
                }
                if (mySkillsData.tipo == "Blanda") {
                    _this.softSkills.push(mySkillsData);
                }
                if (mySkillsData.tipo == "Idioma") {
                    _this.languagesSkills.push(mySkillsData);
                }
            }
        });
    };
    SkillsComponent.prototype.isVisible = function (element) {
        var rect = element.getBoundingClientRect();
        return (rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth));
    };
    SkillsComponent.prototype.setId = function (id) {
        this.skillsData.obtenerId(id);
    };
    SkillsComponent.prototype.setComponente = function (componente) {
        this.skillsData.obtenerComponente(componente);
    };
    SkillsComponent.prototype.actualizarSkills = function () {
        this.hardSkills = [];
        this.softSkills = [];
        this.languagesSkills = [];
        return this.ngOnInit();
    };
    __decorate([
        core_1.ViewChild('circle')
    ], SkillsComponent.prototype, "circle");
    SkillsComponent = __decorate([
        core_1.Component({
            selector: 'app-skills',
            templateUrl: './skills.component.html',
            styleUrls: ['./skills.component.css']
        })
    ], SkillsComponent);
    return SkillsComponent;
}());
exports.SkillsComponent = SkillsComponent;

"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var autenticacion_service_1 = require("./autenticacion.service");
describe('AutenticacionService', function () {
    var service;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(autenticacion_service_1.AutenticacionService);
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
});

"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var logged_service_1 = require("./logged.service");
describe('LoggedService', function () {
    var service;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(logged_service_1.LoggedService);
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
});

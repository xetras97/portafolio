"use strict";

exports.__esModule = true;

var testing_1 = require("@angular/core/testing");

var api_service_1 = require("./api.service");

describe('PersonalInfoService', function () {
  var service;
  beforeEach(function () {
    testing_1.TestBed.configureTestingModule({});
    service = testing_1.TestBed.inject(api_service_1.PersonalInfoService);
  });
  it('should be created', function () {
    expect(service).toBeTruthy();
  });
});
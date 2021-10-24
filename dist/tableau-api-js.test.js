"use strict";

var _tableauApiJs = require("./tableau-api-js");

test('Get latest version', function () {
  expect((0, _tableauApiJs.getLatestTableauVersion)()).toBe('2.8.0');
});
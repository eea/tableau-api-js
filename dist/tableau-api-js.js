'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var TIMEOUT = 2000;
var FREQUENCY = 10;

var tableauVersions = exports.tableauVersions = ['2.8.0', '2.7.0', '2.6.0', '2.5.0', '2.4.0', '2.3.0', '2.2.2', '2.1.2', '2.0.3'];

var getLatestTableauVersion = exports.getLatestTableauVersion = function getLatestTableauVersion() {
  return tableauVersions[tableauVersions.length - 1];
};

exports.default = function (version) {
  return new Promise(function (resolve, reject) {
    // TODO
    // Don't load tableau if current version is the
    // same as the new incomming version
    if (tableauVersions.indexOf(version) < 0) {
      return reject({ message: 'Wrong tableau version' });
    }
    window.tableau = undefined;
    require('./api/tableau-' + version);
    var clock = 0;
    var interval = setInterval(function () {
      if (window.tableau) {
        resolve({
          tableau: window.tableau,
          message: 'Current tableau api version: ' + version
        });
        clearInterval(interval);
      }
      if (clock >= TIMEOUT) {
        clearInterval(interval);
      }
      clock += FREQUENCY;
    }, FREQUENCY);
  });
};
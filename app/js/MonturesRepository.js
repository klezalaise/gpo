'use strict'

// Module contenant la gestion des données des Montures
let MONTURES_REPOSITORY = (function () {

  let module = {}

  let montures = [
    {
      id: 1,
      name: 'monture1'
    },
    {
      id: 2,
      name: 'monture2'
    },
    {
      id: 3,
      name: 'monture3'
    },
    {
      id: 4,
      name: 'monture4'
    }
  ];

  module.getListeMontures = function(callback) {
    callback(montures);
  }

  return module;

}());

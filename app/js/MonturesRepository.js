'use strict'

// Module contenant la gestion des données des Montures
let MONTURES_REPOSITORY = (function () {

  let module = {}

  // tableau des montures
  let montures = [
    {id: 1, name: 'monture 1'},
    {id: 2, name: 'monture 2'},
    {id: 3, name: 'monture 3'},
    {id: 4, name: 'monture 4'}
  ];

  // récupère la liste complète des montures
  module.getListeMontures = function(callback) {
    callback(montures);
  }

  // récupère une monture par son id
  module.getMontureById = function(id, callback) {
    callback(montures.filter(monture => monture.id == id)[0])
  }

  return module;

}());

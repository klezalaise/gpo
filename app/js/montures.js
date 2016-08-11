'use strict'

// Module contenant la vue des Montures
let MONTURES_VUE = (function () {

  let module = {}

  // vue des montures
  module.Vue = Vue.extend({
      template: '#template-montures',
      data: function() {
      	return {
  	    	montures: [] // tableau des montures
      	}
  	  },
      ready: function () { // à l'affichage du composant

        let listeMontures = [];

        // appel au repository
      	MONTURES_REPOSITORY.getListeMontures(function(resultat) {
          listeMontures = resultat;
        });

        // on remplit le tableau des montures
        this.$set('montures', listeMontures);
    	}
  })

	return module;

}());

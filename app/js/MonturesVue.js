'use strict'

// Module contenant la vue des Montures
let MONTURES_VUE = (function () {

  let module = {}

  // vue liste des montures
  module.Liste = Vue.extend({
      name:'ListeMonture',
      template: '#template-liste-montures',
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
  

  // vue fiche d'une monture
  module.Fiche = Vue.extend({
      name:'FicheMonture',
      template: '#template-fiche-montures',
      data: function() {
      	return {
  	    	monture: {} // la monture en question
      	}
  	  },
      ready: function () { // à l'affichage du composant

        let monture = {};

        // appel au repository
      	MONTURES_REPOSITORY.getMontureById(this.$route.params.idmonture, function(resultat) {
          monture = resultat;
        });

        // monture
        this.$set('monture', monture);
    	}
  })

	return module;

}());

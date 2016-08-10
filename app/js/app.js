'use strict'

// vue des clients
var ClientVue = Vue.extend({
    template: '<div id="clients">Liste des clients</p>'
})

// Vue App
var App = Vue.extend({})

// Vue Router
var router = new VueRouter()

// routes
router.map({
    '/': {
        component: Vue.extend({template: '<div id="accueil">Bienvenue sur GPO</div>'})
    },
    '/clients': {
        component: ClientVue
    },
    '/stock': {
        component: MODULE_MONTURES.MontureVue
    }
})

// démarrage de l'app
router.start(App, '#app')



// initialisation de firebase
let config = {
  apiKey: "AIzaSyA8JaAXms67CPMBFn17V6soZP1vLxKbqVM",
  authDomain: "projet-gpo.firebaseapp.com",
  databaseURL: "https://projet-gpo.firebaseio.com",
  storageBucket: "projet-gpo.appspot.com",
};
firebase.initializeApp(config);
//firebase.database().ref('montures/').push({
//  marque: "Rayban",
//  prix_affiche: 300,
//  prix_minimum : 200
//});

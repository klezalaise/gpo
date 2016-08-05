'use strict'

// vue des clients
var ClientVue = Vue.extend({
    template: '<div id="clients">Liste des clients</p>'
})

// vue des montures
var MontureVue = Vue.extend({
    template: '<div id="montures">Liste des montures</p>'
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
        component: MontureVue
    }
})

// démarrage de l'app
router.start(App, '#app')

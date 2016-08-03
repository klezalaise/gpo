'use strict'


// jour de la semaine avec le plus de visite
let ventes =
          [
            {nom:"lundi", ventes:33},
            {nom:"mardi", ventes:54},
            {nom:"mercredi", ventes:87},
            {nom:"jeudi", ventes:72},
            {nom:"vendredi", ventes:12},
            {nom:"samedi", ventes:34},
            {nom:"dimanche", ventes:98}
          ]

let jourPlusVisites = ventes.reduce((a,b) => a.ventes > b.ventes ? a : b)

console.log(jourPlusVisites)

//client qui a le plus dépenser

//résultat (dans le rouge ou pas)

//monture la plus vendue

//monture la plus tendance (+ grosse augmentation de vente sur le dernier mois)

//meilleurs vendeurs

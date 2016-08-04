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

//client qui a le plus dépensé
let clients = [
                {nom: "client1", depenses:[{achat:"monture1", paiement:129},
                                            {achat:"monture4", paiement:100}]},
                {nom: "client2", depenses:[{achat:"monture2", paiement:149},
                                            {achat:"monture3", paiement:70}]},
                {nom: "client3", depenses:[{achat:"monture5", paiement:35},
                                            {achat:"monture4", paiement:299}]}
              ]

let plusGrosClient = clients.map(client => {
      client.total = client.depenses.reduce((a,b) => a.paiement + b.paiement)
      return client
}).reduce((a,b) => a.total > b.total ? a : b)

console.log(plusGrosClient)

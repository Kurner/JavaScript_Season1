// 05-arrays/14-bird-names-generator/script.js - 5.14: Bird names generator in French


(() => {
    const birds = [
        {name: "mouette", fem: true},
        {name: "corbeau"},
        {name: "mésange", fem: true},
        {name: "hibou"},
        {name: "buse", fem: true},
        {name: "pigeon"},
        {name: "pie", fem: true},
        {name: "vautour"},
        {name: "faucon"},
        {name: "rouge-gorge"},
        {name: "tourterelle", fem: true},
        {name: "corneille", fem: true},
    ];
    const adjectives = new Set([
        "cendré",
        "huppé",
        "chantant",
        "hurlant",
        "perché",
        "grand",
        "petit",
        "bleu",
        "pantelant",
        "tangent",
        "arboré",
    ]);

    // your code here
    document.getElementById("run").addEventListener("click", () => {
            
        let birdsRandom = Math.floor(Math.random() * birds.length);

        //Transforme un "Set" en ARRAY (whatever you put in the ())
        let adjectivesARR = Array.from(adjectives);
        let adjectiveRandom = Math.floor(Math.random() * adjectivesARR.length);

        //On stock l'oiseau/adjectif correspondant à l'index birdsRandom/adjectiveRandom
        let bird = birds[birdsRandom];
        //On met adjectivesARR car adjectives(le set) n'est pas un "vrai" ARRAY
        //On a transformé le set en ARRAY dans adjectiveARR (avec les "meme" valeurs)
        let adj = adjectivesARR[adjectiveRandom];

        if(bird.fem == true)
        {
            document.getElementById("target").innerHTML = ('La ' + bird.name + " " + adj + "e !");
        }
        else
        {
            document.getElementById("target").innerHTML = ('Le ' + bird.name + " " + adj + " !");
        } 
    });
  
})();

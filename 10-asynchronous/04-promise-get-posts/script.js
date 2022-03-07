// 10-asynchronous/04-promise-get-posts/script.js - 10.4: chargement d'articles (Promise)


(() => {

    // your code here

    document.getElementById("run").addEventListener("click", () => {
        
        //Pour utiliser une "promesse" .then est nécessaire
        window.lib.getPosts().then((article) => { console.log(article) } );

    });

})();

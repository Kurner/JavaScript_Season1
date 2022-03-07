// 10-asynchronous/01-get-posts/script.js - 10.1: chargement d'articles


(() => {
    // your code here

    function callBack(erreur, articles)
    {
        console.log(articles);
    }

    window.lib.getPosts(callBack);
})();

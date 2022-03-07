// 10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires


(() => {
    // your code here
    let arrArticles = []

    function callBack(erreur, articles)
    {
        for(let article of articles)
        {
            arrArticles = article.id;
        }
    }

    let arrId = window.lib.getPosts(callBack);

    window.lib.getComments(arrArticles, arrId)
    {
        console.log(arrId);
    }
})();

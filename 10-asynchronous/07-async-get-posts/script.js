// 10-asynchronous/07-async-get-posts/script.js - 10.7: chargement d'articles (async/await)


(() => {
    // your code here
    
    async function call()
    {
        await window.lib.getPosts().then((article) => { console.log(article) } );
    }
    
    document.getElementById("run").addEventListener("click", () => {
        call();
    });
    
})();

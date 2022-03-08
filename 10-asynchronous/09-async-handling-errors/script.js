// 10-asynchronous/09-async-handling-errors/script.js - 10.9: gestion d'erreur (async/await)


(() => {
    // your code here

    async function handle()
    {
        await window.lib.getPersons().then((erreur, personnes) => { 
            if(erreur != null)
            {
                console.error(erreur);
            }
            else
            {
                console.log(personnes);
            }
         } );

    }

    document.getElementById("run").addEventListener("click", () => {

        handle();

    });
})();

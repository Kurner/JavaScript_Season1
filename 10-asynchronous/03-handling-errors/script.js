// 10-asynchronous/03-handling-errors/script.js - 10.3: gestion d'erreur


(() => {
    // your code here
    function person(erreur, persons)
    {
        if(erreur != null)
        {
            console.error(erreur);
        }
        else
        {
            console.log(persons);
        }
    }

    window.lib.getPersons(person);
})();

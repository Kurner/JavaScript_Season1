// 06-objects/03-keys-values/script.js - 6.3: keys & values


(() => {
    const person = {
        lastname: "Delnatte",
        firstname: "Pierre-Antoine",
        nickname: "Leny",
        birthDate: "08-05-1985",
        city: "Liège",
        status: "married",
    };
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        //liste les clés ("catégorie") de l'objet
        console.log(Object.keys(person));
        //liste les valeur contenu dans les clés de l'objet
        console.log(Object.values(person));        
    });
})();

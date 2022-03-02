// 08-dom/03-select-three/script.js - 8.3: select multiple elements by css selector


(() => {

    // your code here
    let target = document.getElementsByClassName('target');

    //Impossible de changer les éléments via la classe directement pour une raison obscure et sombre
    for(let i of target)
    {
        i.innerHTML = "OWNED ONCE MORE !";
    }
})();

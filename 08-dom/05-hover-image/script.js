// 08-dom/05-hover-image/script.js - 8.5: image hover


(() => {

    // your code here
    
    //On récupérer les "données" de la balise "img"
    let img = document.querySelector('img');

    document.addEventListener('mouseover', () => {
        img.setAttribute("src", "../../_shared/img/kiss-wink-heart.svg");
    });
    document.addEventListener("mouseleave", () => {
        img.setAttribute("src", "../../_shared/img/kiss.svg");
    });

})();

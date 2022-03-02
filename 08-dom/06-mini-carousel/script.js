// 08-dom/06-mini-carousel/script.js - 8.6: mini carousel


(() => {

    let gallery= [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];

    // your code here

    let counter = 0;

    document.getElementById("next").addEventListener("click", () => {

        //On stock les "attributs" de "img"
        let img = document.querySelextImgector('img');

        //On stock l'élément correspond à "counter" de l'ARRAY gallery
        let nextImg = gallery[counter];

        //On remet le counter à 0
        if(counter === gallery.length)
        {
            counter = 0;
        }

        //On modifie l'image
        img.setAttribute("src", nextImg);
        counter++;
    }); 
})();

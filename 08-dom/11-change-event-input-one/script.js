// 08-dom/11-change-event-input-one/script.js - 8.11: change event (1)


(() => {

    // your code here

    let letter = document.getElementById('pass-one');
    //Limite le nbre de caractère à 10
    letter.setAttribute("maxlength", "10");

    let counter = document.getElementById('counter');

    console.log(counter);

    
    letter.addEventListener("input", () => {
  
        //On enregistre le nbre de caractère entré
        let letterLength = letter.value.length;
        
        counter.innerHTML = (letterLength + '/10');
    });
    
})();

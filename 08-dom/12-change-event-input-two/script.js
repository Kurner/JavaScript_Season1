// 08-dom/12-change-event-input-two/script.js - 8.12: change event (2)


(() => {

    // your code here

    let letter = document.getElementById('pass-one');

    let validity = document.getElementById('validity');

    letter.addEventListener("input", () => {
  

        // console.log(letter.value);
        let letterLength = letter.value.length;
        let twoNmb = 0;
        
        for( let i = 0; i < letterLength; i++){
            if(!isNaN(letter.value.charAt(i)) && !(letter.value.charAt(i) === " ") ){
              twoNmb++;
            }
            if(twoNmb >= 2)
            {
    
                validity.innerHTML = "Okay";
            }
    
            if(letterLength < 8)
            {
                validity.innerHTML = "Not okay";
            }
        }

        //fonctionne dans un sens mais pas dans l'autre
    });

})();

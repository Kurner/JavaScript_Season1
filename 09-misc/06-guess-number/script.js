// 09-misc/06-guess-number/script.js - 9.6: guess the number

(() => {

    // your code here
    function random()
    {
        let numberToGuess = Math.round(Math.random() * 101);
        return numberToGuess;
    }    

    function guessUser(numberToGuess)
    {
        let userAnswer = prompt('Donne un chiffre entre 1 et 100');
        let tried = 0;

        while(userAnswer != numberToGuess)
        {
            if(userAnswer < numberToGuess)
            {
                userAnswer = prompt("C'est plus grand !");
                tried++;
            }
            if(userAnswer > numberToGuess)
            {
                userAnswer = prompt("C'est plus petit !");
                tried++;
            }
        }

        if(userAnswer == numberToGuess)
        {
            alert('Bien joué ! Vous avez trouvé en ' + tried + " essayé(s) !");
        }
    }

    guessUser(random());

})();

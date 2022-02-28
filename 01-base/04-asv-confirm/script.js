
// 01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation

(() => {
    // Don't bother with that, look at your browser's console(chrome), you can delete it afterwards ;)
    console.log('%c ', 'padding: 38px; background:url(https://becode.org/app/uploads/2020/03/bc_mailsign_seal.png) no-repeat;');
    console.log('Hello Keller programmer');

    // YOUR CODE HERE
    let age = prompt("Votre age ?");
    let gender = prompt("Votre sexe ?");
    let town = prompt("Votre ville ?");

    let confirmASV = confirm('Est-ce correct ? :\n Vous avez ' + age + '\n Vous etes un(e) ' + gender + '\n Et vous vivez à ' + town );

    while(confirmASV == false)
    {
        age = prompt("Votre age ?");
        gender = prompt("Votre sexe ?");
        town = prompt("Votre ville ?");

        confirmASV = confirm('Est-ce correct ? :\n Vous avez ' + age + '\n Vous etes un(e) ' + gender + '\n Et vous vivez à ' + town );
    }
      alert("Nous confirmons que vous avez " + age + " que vous etes un(e) " + gender + " et que vous vivez à " + town + " .");   

})();

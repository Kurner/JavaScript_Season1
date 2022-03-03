// 08-dom/09-match-password-one/script.js - 8.9: password verification (1)


(() => {

    // your code here
    document.getElementById("run").addEventListener("click", () => {
       let one = document.getElementById('pass-one').value;
       let two = document.getElementById('pass-two').value;

       if(one === two)
       {
           alert("Les mots de passe sont identiques");
       }
       else
       {
        let oneBorder = document.getElementById('pass-one');
        let twoBorder = document.getElementById('pass-two');
          oneBorder.style.borderColor = "red";
          twoBorder.style.borderColor = "red";
       }

       console.log(one);
       console.log(two);
    });

})();

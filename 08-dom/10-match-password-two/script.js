// 08-dom/10-match-password-two/script.js - 8.10: password verification (2)


(() => {

    // your code here

    document.getElementById("run").addEventListener("click", () => {
        let one = document.getElementById('pass-one');
        let two = document.getElementById('pass-two');
 
        if(one.value === two.value)
        {
            alert("Les mots de passe sont identiques");
            one.removeAttribute("class", "error");
            two.removeAttribute("class", "error")

        }
        else
        {   
            one.setAttribute("class", "error");
            two.setAttribute("class", "error");
        }
 
        console.log(one);
        console.log(two);
     });

})();

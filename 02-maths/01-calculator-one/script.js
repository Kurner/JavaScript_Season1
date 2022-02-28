
// 02-maths/01-calculator-one/script.js - 2.1: calculator1

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("addition").addEventListener("click", function() {
        // perform an addition
        alert(parseInt(document.getElementById("op-one").value) + parseInt(document.getElementById("op-two").value));
    });

    document.getElementById("substraction").addEventListener("click", function() {
        // perform an substraction
        alert(parseInt(document.getElementById("op-one").value) - parseInt(document.getElementById("op-two").value));
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        // perform an multiplication
        alert(parseInt(document.getElementById("op-one").value) * parseInt(document.getElementById("op-two").value));
    });

    document.getElementById("division").addEventListener("click", function() {
        // perform an division
        if(parseInt(document.getElementById("op-two").value) == 0)
        {
            alert("Impossible de diviser par 0, pauvre fou !")
        }
        else
        {
            alert(parseInt(document.getElementById("op-one").value) / parseInt(document.getElementById("op-two").value)); 
        }
    });
})();


// 02-maths/05-factorial/script.js - 2.5: Factorial

(() => {
    
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {

        // your code here

        let number = parseInt(document.getElementById("number").value);
        let result = 1;

        for(let n = 1; n <= number; n++)
        {
            result = result * n;
        }

        alert(result);
    });

})();

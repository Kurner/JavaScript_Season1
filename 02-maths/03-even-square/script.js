
// 02-maths/03-even-square/script.js - 2.3: squares and pairs


(() => {

    document.getElementById("run").addEventListener("click", () => {

        
        // your code here

        let display = "";
        let square = 0;

        for(let n = 1; n <= 21; n++)
        {
            square = n*n;
            display = display + " " + n + " * "+ n + " = " + square + "\n";
        }
        alert(display);
    });

})();

// 02-maths/04-sort-numbers/script.js - 2.4: Sorting the numbers

(() => {

    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {

        // your code here
        let numbers = document.getElementById("numbers").value;
        console.log(numbers);
        let arr = numbers.split(",");
        let arrSort = arr.sort((a, b) => a - b);
        
        alert(arrSort);
    });

})();

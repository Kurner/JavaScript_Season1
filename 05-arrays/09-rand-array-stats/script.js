// 05-arrays/09-rand-array-stats/script.js - 5.9: random & statistics array

(() => {

    // your code here

    document.getElementById("run").addEventListener("click", () => {
        let numbersRandom = [];

        for(let i = 0; i < 10; i++)
        {
            numbersRandom.push(Math.floor(Math.random() * 100));
        }

        let chiffreTableau = 1;
        for(let i = 0; i < numbersRandom.length; i++)
        {
            document.getElementById("n-" + chiffreTableau).innerHTML = numbersRandom[i];
            chiffreTableau++;
        }

        let sum = 0;
        for(let i = 0; i < numbersRandom.length; i++)
        {
            sum += numbersRandom[i];
        }

        let avg = sum / numbersRandom.length;


        let min = Math.min.apply(null,numbersRandom);
        let max = Math.max.apply(null, numbersRandom);

        document.getElementById("min").innerHTML = min;
        document.getElementById("max").innerHTML = max;
        document.getElementById('sum').innerHTML = sum;
        document.getElementById('average').innerHTML = avg;
    
        
        console.log(numbersRandom);
    });

})();

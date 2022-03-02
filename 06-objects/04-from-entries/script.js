// 06-objects/04-from-entries/script.js - 6.4: fromEntries


(() => {
    const keys = ["name", "species", "age", "gender", "color"];
    const values = ["Skitty", "cat", 9, "female", "tabby"];
    // your code here
    document.getElementById("run").addEventListener("click", () => {

        let arr = [];
        let arrTemp = [];

        //On place les valeurs des 2 ARRAY dans un nouvel ARRAY
        for(let i = 0; i < keys.length; i++)
        {
            arrTemp = [keys[i], values[i]];
            arr.push(arrTemp);
        }
        console.log(Object.fromEntries(arr));

    });
})();

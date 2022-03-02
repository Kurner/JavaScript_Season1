// 06-objects/01-generate-object/script.js - 6.1: genererate an object


(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {
            let arr = {
                    lastname: "Fierarh",
                    firstname: "Myreina",
                    age: "25",
                    city: "Mor Dhona",
                    country: "Eorzéa"
                }
            console.log("Bienvenue " + arr.lastname + " " + arr.firstname + " agée de " + arr.age + "ans, venant de " + arr.city + " du pays de " + arr.country);
    });
})();

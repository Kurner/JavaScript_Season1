//07-classes/02-methods/script.js - 7.2: methods


(() => {
    // your code here
    class Person {
        constructor(lastname, firstname) {
            this.lastname = lastname;
            this.firstname = firstname;
            console.log('Hello ' + this.lastname + " " + this.firstname + " !");
        }
    }

    document.getElementById("run").addEventListener("click", () => {
        new Person("Fiearh", "Myreina");
    });
})();

// 07-classes/04-getter-setter/script.js - 7.4: getter & setter


(() => {
    // your code here
    class Person
    {
        constructor(lastname, firstname)
        {
            this.lastname = lastname;
            this.firstname = firstname;
        }

        get name()
        {
            return `${this.lastname} ${this.firstname}`;
        }

        // set name(name)
        // {
        //     name = this.name();
        //     let nameDivide = name.split(' ');
        //     return nameDivide;
        // }
    }
    
    document.getElementById("run").addEventListener("click", () => {

        let newInstance = new Person("Fierarh", "Myreina");
        console.log(newInstance.name);
    });
})();

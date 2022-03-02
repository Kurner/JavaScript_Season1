// 07-classes/03-inheritance/script.js - 7.3: inheritance


(() => {
    class Animal {
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }
  
    // your code here
    class Cat extends Animal {
        constructor(name, greeting)
        {
            super(name, greeting);
            this.name = name;
            this.constructor.greeting = greeting;
        }
    }

    class Dog extends Animal {
        constructor(name, greeting)
        {
            super(name, greeting);
            this.name = name;
            this.constructor.greeting = greeting;
        }
    }
    document.getElementById("run").addEventListener("click", () => {
        console.log(new Dog("Chien", "COUCOU").sayHello());
        console.log(new Cat("Chat", "COUCOU").sayHello());
    });
})();

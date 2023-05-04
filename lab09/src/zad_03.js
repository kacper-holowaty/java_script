class Creature {
    constructor(name,age,gender,energy=5,mood="relaxed") {
        this.name = name;
        this.age = age;
        this.gender = gender;
        if (energy < 10 && energy > 0) {
            this.energy = energy;
        }
        this.mood = mood;
    }
    sleep() {
        console.log(`${this.name} is sleeping!`);
        const ile = Math.floor(Math.random() * 5) + 1
        this.energy += ile
        if (this.energy > 10) {
            this.energy = 10;
        }
        console.log(`${this.name} woke up. Energy is now equal ${this.energy}!`);
    }
    eat() {
        console.log(`${this.name} is eating!`);
        this.mood = "good"
    }
}

class Person extends Creature {
    constructor(name,age,gender,energy,mood) {
        super(name,age,gender,energy,mood);
    } 
}
class Animal extends Creature {
    constructor(name,age,gender,energy,mood,type) {
        super(name,age,gender,energy,mood);
        this.type = type;
    }
    drink() {
        console.log(`${(this.type).charAt(0).toUpperCase()+this.type.slice(1)} called ${this.name} is drinking!`);
        if (this.energy > 8) {
            this.energy = 10
        }
        else {
            this.energy += 2
        }
    }
    run() {
        if (this.energy >= 3) {
            this.energy -= 3
            console.log(`${this.name} is running! Energy is equal ${this.energy}`);
        }
        else {
            console.log(`${this.name}, should go to sleep or drink some water.`);
        }
    }
}
class Child extends Person {
    constructor(name,age,gender,energy,mood,happiness) {
        super(name,age,gender,energy,mood);
        this.happiness = happiness;
    }
    learn() {
        const tab = ["math","drawing","cycling","chemistry"];
        const randomItem = tab[Math.floor(Math.random() * tab.length)]
        if (randomItem === "math" || randomItem === "chemistry") {
            if (this.energy >= 5) {
                console.log(`Child ${this.name} is learning ${randomItem}. Energy is now equal ${this.energy-5}!`);
                this.energy -= 5;
            }
            else {
                console.log(`Energy is too low to learn ${randomItem}!`);
            }   
        }
        if (randomItem === "cycling") {
            if (this.energy >= 3) {
                console.log(`Child ${this.name} is learning cycling! Energy is now equal ${this.energy-3}!`);
                this.energy -= 3;
            }
            else {
                console.log("Energy is too low to learn cycling!");
            } 
        }
        if (randomItem === "drawing") {
            if (this.energy >= 1) {
                console.log(`Child ${this.name} is learning cycling! Energy is now equal ${this.energy-1}!`);
                this.energy -= 1;
            }
            else {
                console.log(`Energy is too low. ${this.name} need to rest!`);
            } 
        }
    }
    play () {
        if (this.energy >= 2) {
            console.log(`Child ${this.name} is playing! Energy is now equal ${this.energy-2}!`);
            this.energy -= 2;
            if (this.happiness > 6) {
                this.happiness = 10;
            }
            else {
                this.happiness += 4;
            }
            this.mood = "happy";
        }
        else {
            console.log(`${this.name} need to sleep!`);
        }

    }
}
class Adult extends Person {
    constructor(name,age,gender,energy,mood) {
        super(name,age,gender,energy,mood);
    }
    work() {
        this.mood = "tired"
        if (this.energy >= 6) {
            if (this.gender === "man") {
                this.energy -= 6
                console.log(`${this.name}, ${this.age} years old, went to work. He is ${this.mood} and his energy is equal ${this.energy}!`);
            } 
            else if (this.gender === "woman") {
                this.energy -= 6
                console.log(`${this.name}, ${this.age} year old, went to work. She is ${this.mood} and her energy is equal ${this.energy}!`);
            }
            else {
                this.energy -= 6
                console.log(`Person ${this.name}, ${this.age} years old, identifying as ${this.gender} went to work. This person is ${this.mood} and energy is equal ${this.energy}!`);
            }
        }
        else {
            console.log(`${this.name} is too tired to work!`);
        }
    }
    rest() {
        console.log(`${this.name} is resting!`);
        this.mood = "relaxed"
    }
    cook() {
        const food = ["pizza","pierogi","pumpkin soup","steak","spaghetti","rice"]
        const randomFood = food[Math.floor(Math.random() * food.length)]
        if (this.energy > 0) {
            console.log(`${this.name} is cooking ${randomFood}!`);
            this.energy -= 1;
        }
        else {
            if (this.gender === "man") {
                console.log(`${this.name} is exhausted! Maybe he should order something on pyszne.pl?`);
            }
            else if (this.gender === "woman") {
                console.log(`${this.name} is exhausted! Maybe she should order something on pyszne.pl?`);
            }
            else {
                console.log(`${this.name} is exhausted! Maybe this person should order something on pyszne.pl?`);
            }
        }
    }
}
const grzechu = new Child("Grzegorz",12,"men",6,"bad",2)
const dog = new Animal("Reks",5,"male",6,"happy","dog")
const romek = new Adult("Roman",24,"man",7,"hehe")
grzechu.sleep()
dog.sleep()
romek.work()
romek.sleep()
romek.cook()
romek.eat()
romek.work()
romek.sleep()
grzechu.eat()
grzechu.play()
grzechu.learn()
dog.run()
dog.run()
dog.drink()
dog.sleep()
dog.run()
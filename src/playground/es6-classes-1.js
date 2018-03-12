   
    // Car
    // make
    // model
    // vin
    // getDescription


    //Setup constructor to take name and age (default to 0);
    //getDescription - Andrew Mead is 26 year(s) old

    class Person {
        constructor(name = 'Anonymous', age = 0){
           this.name = name;
           this.age = age;
        }

        getGreeting(){
            return `Hi I am ${this.name}`;
        }

        getDescription(){
            return `${this.name} is ${this.age} years old`;
        }
    }

    class Student extends Person {
        constructor(name, age, major){
            super(name, age)
            this.major = major
        }

        hasMajor(){
            return !!this.major;
        }

        getDescription(){
            let description = super.getDescription();
            
            if(this.hasMajor()){
                description += ` Their major is ${this.major}`;
            }
            
            return description;
        }
    }

    class Traveler extends Person {
        constructor(name, age, location){
            super(name, age)
            this.location = location;
        }

        getGreeting(){
            let greeting = super.getGreeting();
            
            if(this.location){ 
                greeting += ` I am visiting from ${this.location}`
            }

            return greeting;
        }
    }



    // Traveler -> Person
    // Add support for home location
    // Override get greeting
    // 1. Hi I am Andrew Mead. I am visiting from  philadephia
    // 2. Hi I am Andrew Mead

    const me = new Traveler ('Byron Dunkley', 37, 'London');
    console.log(me.getGreeting());

    const other = new Traveler ();
    console.log(other.getGreeting());

    
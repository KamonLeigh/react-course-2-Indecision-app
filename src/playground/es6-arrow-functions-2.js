// arguments object - no longer bound with arrow functions


const add = (a, b) => {
    //console.log(arguments);
    return a + b;
}

console.log(add(55, 1));




// this keyword no longer bound

const user ={
    name: 'Andrew',
    cities: ['Philadelphia', 'New York', 'Dublin'],
    printPlacesLived (){
       return this.cities.map(city => this.name + 'has lived in ' + city);
    }
};

console.log(user.printPlacesLived());

// Challenge area
    // numbers - array of numbers
    // multiply By - single number
    // multiply - return a new array where the number have been multiplied 


const multiplier = {
    numbers: [2, 4, 5, 8, 10],
    multiplyBy: 2,
    multiply(){
        return this.numbers.map(number =>  number * this.multiplyBy);
    }  
};

console.log(multiplier.multiply());
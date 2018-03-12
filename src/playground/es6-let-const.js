var nameVar = 'Andrew';
var nameVar = 'Mike';
console.log('nameVar', nameVar);


let nameLet = 'Jen';
    nameLet = 'Julie';
console.log({nameLet});


const nameConst = 'Frank';
      //nameConst = "Gunther";
console.log({nameConst});

function getPetName(){
    var petName = 'Hal';
    return petName;
}

// getPetName();
// console.log(petName)

//Block scoping

const fullName = 'Andrew Mead';
let firstName;

    if(fullName){
         firstName = fullName.split(' ')[0];
        console.log(firstName);
    }

    console.log(firstName)
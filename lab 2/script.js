var kitty = {
    cute: true,
    hungrys: 0.8,
    lives: 9,
    meow: undefined,
    fur: {
        fluffy: true,
        colour: "red",
    },
    threats: null,
    meow: function meow(){// # funtions contained as a key value pair of an object is called a method
        return "meow";
    }, //annoymous function have no name
};

console.log(kitty.meow);// () funtion invokation operator

console.log(kitty2);
// veriable name that is not declared gives an error
// a undeclared parameter of an object gives undefined and no error

kitty.lives++;
console.log(kitty);

kitty.two ='two';// objects are 
console.log()

//kitty.travel; //error because you can't invoke undefined as a function


console.log(kitty.future++); // results in a type number  with value NaN which is not a number

console.log( kitty.lives / 0 );

// . accessor of an object
kitty.fur.fluffy;

console.log(kitty);

if(kitty.cute){ 
console.log('true?');
}else{
    console.log('false?');
}

for(key in kitty){
    console.log(key);
    kitty[key];// alternate accessor for objects in javascript
   // kitty["meow" + couunt]
}


var x = {};
x.y = 12; //mutates object assignment
x.z; // returns undefinded
x.z() // throws an error by trying to invoke undefined as a funtion
x.z = funtion(); //method
x.z() //invokes the z method and returns undefined unless modified
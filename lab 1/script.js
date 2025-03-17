var billy; //variable declaration without definition 

console.log(billy);

billy = 13;
billy = 'billy is great';
billy = 'billy said "hello"'

//keywrod expression codeblock
if(true){
    console.ling(billy);
}

if( 15 >= 15){
    console.log('is it true');
}

billy = 'silly'
if(billy ){//coercion change string to a boolean
    console.log ('billy is silly');

}

if(billy === 'silly'){//=== testing for equal value and same type
    console.log('really silly');
}

//== test for equal value but allows for coercion
//billy == true
//billy gets coerced to a boolean ad the expression is true

//typeof operatio precedes a variable name or literal value

console.log(typeof "alsdkjali");
console.log(typeof billy);

if(typeof billy === "string"){
    billy ='aslkdhasi';
}else{
    billy = 42;
}

///////////////
//for loop
for(var i = 0; i < 10; i++){
    console.log(i);
}

console.log(i)
////

//function declaration
function bob(){
    console.log('i am bob');
} 

//function invokation
bob(); /// () function invokation operator

/* multiline comment 
for(var i = 0; i < 10; i++){
    bob();
}
*/

console.log(bob() );

function bailly(data){
    data = data +100
    return data;
}

var mydata =  bailly(50);
console.log(mydata);
console.log( typeof mydata)
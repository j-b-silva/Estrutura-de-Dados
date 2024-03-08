var myVar = 'global';
var myOtherVar = 'global';

function myFunction(){
    var myVar = 'local';
    return myVar;
}

function myOtherFunction(){
    myOtherVar = 'local';
    return myOtherVar;
}

console.log('myVar: ' +myVar);
console.log(myFunction());
console.log('myOrtherVar: ' +myOtherVar);
console.log(myOtherFunction());
console.log(myOtherVar);


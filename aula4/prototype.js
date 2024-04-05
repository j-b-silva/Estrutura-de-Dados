//Removendo da primeira posição

let numbers = [-2,-1,0,1,2];

Array.prototype.reIndex = function(myArray){
    const newArray =[];
    for (var i=0; i<myArray.length; i++){
        if(myArray[i] !== undefined){
            newArray.push(myArray[i]);
        }
    }
    return newArray;
}

Array.prototype.removeFirstPosition = function(){
    for(var i=0; i<this.length; i++){
        this[i] = this[i+1];
    }
    return this.reIndex(this);
}

numbers = numbers.removeFirstPosition();

console.log(numbers); 

//shift remove do inicio
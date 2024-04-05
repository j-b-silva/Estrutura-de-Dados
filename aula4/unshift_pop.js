//Remover elementos no array
 
//unshift adiciona
let numbers = [0,1,2,3,4,5,6,7,8,9];

numbers.unshift(-1);
numbers.unshift(-2);
numbers.unshift(-3,-4);

//pop remove o último
numbers.pop();
console.log(numbers.join(','));

numbers.pop();
console.log(numbers.join(','));

//function que remove o valor do inicio do array
for(var i=0; i< numbers.length; i++){
    numbers[i] = numbers[i+1];
}

console.log(numbers);
//Adicionar no array

let numbers = [0,1,2,3,4,5,6,7,8,9];
console.log(numbers);

numbers[numbers.length] = 10;
console.log(numbers);

//push
numbers.push(11);
numbers.push(12,13);
console.log(numbers);

console.log(numbers.join(','));

//function
function insertFirstPosition(value){
    for(let i= numbers.length; i>=0; i--){
        numbers[i] = numbers [i-1];
    }
    numbers[0] = value;
}

insertFirstPosition(-1);

console.log(numbers.join(','));





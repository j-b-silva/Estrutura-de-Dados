var num = 0

//operadores aritmeticos
num = num + 2;
num = num * 3;
num = num / 2;

//operadores de atribuição

num++;
num--;
num +=1;
num -=2;
num *=3;
num /=2;
num % 3;

console.log('num: ' +num);
console.log('num == 1: ' +(num ==1));
console.log('num === 1:' +(num === 1));
console.log('num != 1: ' +( num != 1));
console.log('num > 1: ' +(num > 1));
console.log('num < 1: ' +(num < 1));
console.log('num >= 1: ' +(num >= 1));
console.log('num <= 1: ' +(num <=1));
console.log('true && false: ' +(true && false));
console.log('true || false: ' +(true || false));
console.log('!true: ' +(!true));

//operadores bit a bit (bitwise)
console.log('5 & 1: ', (5 & 1));
console.log('5 | 1: ', (5 | 1));
console.log ('~5: ', (~5));
console.log('5 ^ 1: ' (5 ^ 1));
console.log('5 << 1: ', (5 << 1));
console.log('5 >> 1: ', ( 5 >> 1));
//Leia 20 valores reais e calcule seu somatório utilizando a instrução while.

var i = 0;
var somatorio = [];

while (i <= 19){
    somatorio.push(i);
    i++ 
}

console.log("Os 20 valores reais são: ", somatorio);
console.log("O somatório dos elementos da: ", somatorio.reduce((previous,current) => previous + current)); 


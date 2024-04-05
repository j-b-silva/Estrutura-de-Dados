//Leia 20 valores reais e calcule seu somatório utilizando a instrução do...while.

var valores = 1;
var somatorio = []; 

do{
    console.log("Valores reais",valores);
    somatorio.push(valores);
    valores++;
    
} while( valores <= 20);

console.log("O somatório deles é igual a: ", somatorio.reduce((previous,current) => previous + current));
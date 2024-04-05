//Matrix 2 dimensões

var averageTempDay1 = [1,2,3,4];
var averageTempDay2 = [5,6,7,8];

var averageTempDay = [];
averageTempDay[0] = averageTempDay1;
averageTempDay[1] = averageTempDay2;

function printMatrix(myMatrix){
    for(let i=0; i<myMatrix.length; i++){
        for(let j=0; j<myMatrix.length; j++){
            console.log(myMatrix[1][2]);
        }
    }
}

console.table(averageTempDay);
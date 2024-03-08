function testTruthy(val){
    return val ? console.log('true') : console.log('false');
}

testTruthy(true);
testTruthy(false);
testTruthy(new Boolean(false));
testTruthy('');
testTruthy('Bom dia!');
testTruthy(new Strinf (''));
testTruthy(1);
testTruthy(-1);
testTruthy(NaN);
testTruthy(new Number(NaN));
testTruthy({name: 'Ju'});
testTruthy(obj);
testTruthy(obj.name);
testTruthy(obj.age);


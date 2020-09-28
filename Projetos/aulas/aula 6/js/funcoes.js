function sum(a, b){
    return a+b;
}

console.log(sum(1,2));

function compareNumbers(a,b){
    // return (a > b) ? 1 : (a < b) ? -1 : 0;
    return a - b;
}

console.log(compareNumbers(9,9));
console.log(compareNumbers(9,3));
console.log(compareNumbers(6,9));

function somatorio(from, upTo){
    var sum = 0;

    for(i = from; i <= upTo; i++){
        sum += i;
    }

    return sum;
}

console.log(somatorio(2, 18));
console.log(somatorio(1, 10));
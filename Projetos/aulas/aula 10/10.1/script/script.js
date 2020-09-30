'use strict';

/*
var x let

var tem escopo abrangente
let tem escopo reduzido
const não há reatribuição de valores
*/ 

function withVar(){
    for (var i = 0; i < 10; i++){
        console.log('var: ' + i);
    }

    i = 20;
    console.log(i);
}

function withLet(){
    for (let i = 0; i < 10; i++){
        console.log('var: ' + i);
    }

    // i = 20;
    // console.log(i);
}

withLet();
withVar();

const d = [];
console.log(d);

d.push(6);
console.log(d);

//Function x Arrow function

function sum(a, b){
    return a+b;
}

//função anonima
const sum2 = function(a,b){
    return(a+b);
}

//arrow function
const sum3 = (a,b) => {
    return (a+b);
}

//arrow function reduzida
const sum4 = (a,b) => a+b;


console.log(sum(5,6));
console.log(sum2(6,6));
console.log(sum3(6,7));
console.log(sum4(6,8));

const name = 'Maria Clara';
const age = 21;
const job = 'Desenvolvedora';
const text1 = 'Meu nome é '+name + ' ' + 'tenho: ' + age + ' anos. ' + 'E sou '+job+'.';
const text2 = `Meu nome é ${name}, tenho ${age} anos e trabalho como ${job}.`

console.log(text1);
console.log(text2);

// default parameters
const sum5 = (a,b = 10) => a+b;
console.log(sum5(6));
console.log(sum5(6, 8));
//Comandos de bloco

/*
    AULAS:
6.1 - Estruturas de decisão: if, else, operadores lógicos, switch, operador ternário
6.2 - Estruturas de decisão: for, while
6.3 -  Funções
*/

var a = 5;
var b = 7;

if(a > b){
    alert(`${a} é maior que ${b}`);
}else{
    if(a < b){
        alert(`${b} é maior que ${a}`);
    }else{
        alert(`${a} é igual a ${b}`);
    }
}

var dia = 1;
var r = '';

switch (dia){
    case 1:
        r = 'Domingo'
        break;
    case 2:
        r = 'Segunda-feira'
        break;
    case 3:
        r = 'Terça-feira'
        break;
    case 4:
        r = 'Quarta-feira'
        break;
    case 5:
        r = 'Quinta-feira'
        break;
    case 6:
        r = 'Sexta-feira'
        break;
    case 7:
        r = 'Sábado'
        break;
    default: 
        r = 'Dia inválido';
}

alert(r);
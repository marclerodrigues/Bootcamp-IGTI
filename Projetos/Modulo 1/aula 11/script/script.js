/*
Métodos com arrays:
- map; -> gera um novo array transformando os dados
- filter; -> gera um novo array filtrando elementos com base em proposição
- forEach; -> percorre todos os elementos do array , aplicando lógica
- reduce; -> realiza cálculo iterativo com base nos elementos
- find; -> encontra elementos com base em proposições
- some; -> verifica se há pelo menos um elemento que atenda à proposição
- every; -> verifica se todos os elementos atendem à proposição
- sort; -> ordena os elementos com base em um critério
*/

window.addEventListener('load', () => {
    doMap();
    doFilter();
    doForEach();
    doReduce();
    doFind();
    doSome();
    doEvery();
    doSort();
});

function doMap(){
    const nameEmailArray = people.results.map(person =>{
        return {
            name: person.name,
            email: person.email
        };
    });
    console.log('mapped');
    return nameEmailArray;
}

function doFilter(){
    const olderThan50 = people.results.filter(person =>{
        return person.dob.age > 50;
    });

    console.log(olderThan50);
}

function doForEach(){
    const mappedPeople = doMap();

    mappedPeople.forEach(person => {
        person.nameSize = 
            person.name.title.length + 
            person.name.first.length + 
            person.name.last.length;
    });

    console.log(mappedPeople);
}

function doReduce(){
    const totalAge = people.results.reduce((accumulator, current) => {
        return accumulator + current.dob.age;
    }, 0);

    console.log(totalAge);

    // let sumAges = 0;

    // for(let i = 0; i < people.results.length; i++){
    //     var current = people.results[i];
    //     sumAges += current.dob.age;
    // }

    // console.log(sumAges);
}

function doFind(){
    const found = people.results.find(person => {
        return person.location.state === 'Minas Gerais';
    });

    console.log(found);
}

function doSome(){
    const found = people.results.some(person => {
        return person.location.state === 'Amazonas';
    });

    console.log(found);
}

function doEvery(){
    const every = people.results.every(person => {
        return person.nat === 'BR';
    });

    console.log(every);
}

function doSort(){
    const mappedNames = people.results.map(person => {
        return{
            name: person.name.first
        };
    })
    .filter(person => person.name.startsWith('A'))
    .sort((a,b) => {
        // return a.name.length - b.name.length;
        return a.name.localeCompare(b.name);
    });

    console.log(mappedNames);
}
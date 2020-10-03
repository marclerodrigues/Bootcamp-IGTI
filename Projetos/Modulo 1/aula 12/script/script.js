/*
    Operadores: rest/spread e destructuring
*/

window.addEventListener('load', () => {
    doSpread();
    doRest();
    doDestructuring();
});

function doSpread(){
    const marriedMen = people.results.filter(
        person => (person.name.title === 'Mr')
    );
    const marriedWomen = people.results.filter(
        person => (person.name.title === 'Ms')
    );

    const marriedPeople = [...marriedMen, ...marriedWomen, {msg: 'oi'}];

    console.log(marriedPeople);
}

function doRest(){
    console.log(infinitSum(1,2));
    console.log(infinitSum(1,2, 1000));
    console.log(infinitSum(1,2, 1000, 1, 2, 3, 4, 46, 34, 56));
}

function infinitSum(...numbers){

    return numbers.reduce((acc, curr) => acc + curr);

    //console.log(numbers);
}

function doDestructuring(){
    const first = people.results[0];

    // const username = first.login.username;
    // const password = first.login.password;

    const {username, password} = first.login;

    console.log(username);
    console.log(password);
}
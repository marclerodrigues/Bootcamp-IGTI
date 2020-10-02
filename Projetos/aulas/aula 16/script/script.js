window.addEventListener('load', () =>{
    doFetch();
    doFetchAsync();

    divisonPromise(12, 6).then(result =>{
        console.log(result);
    });

    executeDivisionPromise();
    executeDivisionPromiseAsyncAwait();
});

function doFetch(){
    fetch('https://api.github.com/users/rrgomide').then((res) => {
        res.json().then(data => {
            showData(data);
        });
    }).catch(error => {
        console.log('Error na requisição');
        console.log(error);
    });
}

async function doFetchAsync(){
    const res = await fetch('https://api.github.com/users/rrgomide');
    const json = await res.json();
    
    // showData(data);
    console.log(json);
}

function showData(data){
    const user = document.querySelector('#data');

    user.textContent = data.login + ' ' + data.name;
}

function divisonPromise(a, b){
    return new Promise((resolve, reject) =>{
        if(b === 0){
            reject('Não é possível dividir por 0');
        }

        resolve(a/b);
    });
}

function executeDivisionPromise(){
    divisonPromise(12, 0).then(result =>{
        console.log(result);
    }).catch(errorMessage => {
        console.log('falha na divisão' + errorMessage);
    });
}

async function executeDivisionPromiseAsyncAwait(){
    const division = await divisonPromise(12,2);
    console.log(division);
}
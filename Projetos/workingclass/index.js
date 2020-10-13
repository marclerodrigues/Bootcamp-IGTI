const { get } = require("http");

const fs = require("fs").promises;

init();

async function init(){
    // await getCitiesCount("MG");
    // await getStatesWithCities();
    // await getBiggerNameCities();
    // await getSmallerNameCities();
    await getBiggerCityName();
    await getSmallerCityName();
}

async function createFiles(){
    let data  = await fs.readFile("./Path/Estados.json");
    const states = JSON.parse(data);

    data = await fs.readFile("./Path/Cidades.json");
    const cities = JSON.parse(data);

    for(state of states){
        const stateCities = cities.filter(city => city.Estado === state.ID);
        await fs.writeFile(`./states/${state.Sigla}.json`, JSON.stringify(stateCities));
    }

    console.log(cities);
}

async function getCitiesCount(uf){
    const data = await fs.readFile(`./states/${uf}.json`);
    const cities = JSON.parse(data);
    
    return(cities.length);
}

async function getStatesWithCities(){
    const states = JSON.parse(await fs.readFile("./Path/Estados.json"));
    let list = [];

    for(state of states){
        const count = await getCitiesCount(state.Sigla);
        list.push({uf: state.Sigla, count});
    }

    list.sort((a,b) => {
        if(a.count < b.count) return 1;
        else if (a.count > b.count) return -1;
        else return 0;
    });

    const result = [];
    const resul = []
    list.slice(0, 5).forEach(item => result.push(item.uf + "-" + item.count));
    list.slice(22, 27).forEach(item => resul.push(item.uf + "-" + item.count));

    console.log(result);
    console.log(resul);
}

async function getBiggerNameCities(){
    const states = JSON.parse(await fs.readFile("./Path/Estados.json"));
    let result = [];

    for(state of states){
        const city = await getBiggerName(state.Sigla);
        result.push(city.Nome+"-"+state.Sigla);
    }

    console.log(result);
}

async function getBiggerName(uf){
    const cities = JSON.parse(await fs.readFile(`./states/${uf}.json`));

    let result;
    
    cities.forEach(city => {
        if(!result){
            result = city;
        } else if (city.Nome.length > result.Nome.length){
            result = city;
        } else if ((city.Nome.length === result.Nome.length) && (city.Nome.toLowerCase() < result.Nome.toLowerCase())){
            result = city;
        }
    });
    
    return result;
}

async function getSmallerNameCities(){
    const states = JSON.parse(await fs.readFile("./Path/Estados.json"));
    let result = [];

    for(state of states){
        const city = await getSmallerName(state.Sigla);
        result.push(city.Nome+"-"+state.Sigla);
    }

    console.log(result);
}

async function getSmallerName(uf){
    const cities = JSON.parse(await fs.readFile(`./states/${uf}.json`));

    let result;
    
    cities.forEach(city => {
        if(!result){
            result = city;
        } else if (city.Nome.length < result.Nome.length){
            result = city;
        } else if ((city.Nome.length === result.Nome.length) && (city.Nome.toLowerCase() < result.Nome.toLowerCase())){
            result = city;
        }
    });
    
    return result;
}

async function getBiggerCityName(){
    const states = JSON.parse(await fs.readFile("./Path/Estados.json"));
    let list = [];

    for(state of states){
        const city = await getBiggerName(state.Sigla);
        list.push({name: city.Nome, uf: state.Sigla});
    }
    
    console.log(list);
    const result = list.reduce((prev, current) => {
        if(prev.name.length > current.name.length) return prev;
        else if(prev.name.length < current.name.length) return current;
        else return prev.name.toLowerCase() < current.name.toLowerCase() ? prev : current;
    });

    console.log(result);
}

async function getSmallerCityName(){
    const states = JSON.parse(await fs.readFile("./Path/Estados.json"));
    let list = [];

    for(state of states){
        const city = await getSmallerName(state.Sigla);
        list.push({name: city.Nome, uf: state.Sigla});
    }
    
    console.log(list);
    const result = list.reduce((prev, current) => {
        if(prev.name.length < current.name.length) return prev;
        else if(prev.name.length > current.name.length) return current;
        else return prev.name.toLowerCase() < current.name.toLowerCase() ? prev : current;
    });

    console.log(result);
}
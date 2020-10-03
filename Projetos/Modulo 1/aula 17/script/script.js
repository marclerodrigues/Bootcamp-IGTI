let tabCountries = null;
let tabFavorites = null;

let allCountries = [];
let favoritesCountries = [];

let countCountries = 0;
let countFavorites = 0;

let totalPopulationList = 0;
let totalPopulationFavorites = 0;

let numberFormat = null;

window.addEventListener('load', () => {
    tabCountries = document.querySelector('#tabCountries');
    tabFavorites = document.querySelector('#tabFavorites');

    countCountries = document.querySelector('#countCountries');
    countFavorites = document.querySelector('#countFavorites');

    totalPopulationList = document.querySelector('#total-population-list');
    totalPopulationFavorites = document.querySelector('#total-population-favorites');

    numberFormat = Intl.NumberFormat('pt-BR');

    fetchCountriesAsync();
});

async function fetchCountriesAsync(){
    const url = await fetch('https://restcountries.eu/rest/v2/all');
    const json = await url.json();
    allCountries = json.map(country => {
        const {numericCode, translations, population, flag} = country;

        return{
            id: numericCode,
            name: translations.pt,
            population,
            formattedPopulation: formatNumber(population),
            flag
        };
    });

    render();
}

function render(){
    renderCountryList();
    renderFavorites();
    renderSumary();
    handleCountryButtons();
}

function renderCountryList(){
    let countriesHTML = '<div>';

    allCountries.forEach(country => {
        const {id, name, population, formattedPopulation, flag} = country;
        
        const countryHTML = `
            <div class='country'>
                <div>
                    <a id="${id}" class="maves-effect waves-ligth btn">+</a>
                </div>
                <div>
                    <img src="${flag}" alt="${name}">
                </div>
                <div>
                    <ul>
                        <li>${name}</li>
                        <li>${formattedPopulation}</li>
                    </ul>
                </div>
            </div>
        `;
        
        countriesHTML += countryHTML;
    });
    
    countriesHTML += '</div>';
    
    tabCountries.innerHTML = countriesHTML;
}

function renderFavorites(){
    let favoritesHTML = '<div>';
    
    favoritesCountries.forEach(country => {
        const {id, name, population,formattedPopulation, flag} = country;
        
        const favoriteHTML = `
            <div class='country'>
                <div>
                    <a id="${id}" class="maves-effect waves-ligth btn red darken-4">-</a>
                </div>
                <div>
                    <img src="${flag}" alt="${name}">
                </div>
                <div>
                    <ul>
                        <li>${name}</li>
                        <li>${formattedPopulation}</li>
                    </ul>
                </div>
            </div>
        `;
        
        favoritesHTML += favoriteHTML;
    });

    favoritesHTML += '</div>';
    tabFavorites.innerHTML = favoritesHTML;
}

function renderSumary(){
    countCountries.textContent = allCountries.length;
    countFavorites.textContent = favoritesCountries.length;

    const totalPopulation = allCountries.reduce((acc, curr) =>{
        return acc + curr.population;
    }, 0);

    const totalFavorites = favoritesCountries.reduce((acc, curr) =>{
        return acc + curr.population;
    }, 0);

    totalPopulationList.textContent = formatNumber(totalPopulation);
    totalPopulationFavorites.textContent = formatNumber(totalFavorites);
}

function handleCountryButtons(){
    const countryButtons = Array.from(tabCountries.querySelectorAll('.btn'));
    const favoritesButtons = Array.from(tabFavorites.querySelectorAll('.btn'));
    
    countryButtons.forEach(button => {
        button.addEventListener('click', () => addToFavorites(button.id));
    });

    favoritesButtons.forEach(button => {
        button.addEventListener('click', () => removeFromFavorites(button.id));
    });
}

function addToFavorites(id){
    const countryToAdd = allCountries.find(country => country.id === id);
    
    favoritesCountries = [...favoritesCountries, countryToAdd];

    favoritesCountries.sort((a, b) =>{
        return a.name.localeCompare(b.name);
    });

    allCountries = allCountries.filter(country => country.id !== id);

    render();
}

function removeFromFavorites(id){
    const countryToRemove = favoritesCountries.find(country => country.id === id);

    allCountries = [...allCountries, countryToRemove];

    allCountries.sort((a, b) =>{
        return a.name.localeCompare(b.name);
    });

    favoritesCountries = favoritesCountries.filter(country => country.id !== id);

    render();
}

function formatNumber(number){
    return numberFormat.format(number);
}
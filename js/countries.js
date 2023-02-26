const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all/')
    .then(res => res.json())
    .then(data => displayCountries(data))
}

const displayCountries = countries =>{
    const countriesContainer = document.getElementById('all-countries');
    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
        <h3> Name: ${country.name.official}</h3>
        <h5>Capital: ${country.capital ? country.capital[0] : 'No Capital'} </h5>
        <button onclick="loadCountryDetail('${country.cca2}')">Details</button>
        `;
        countriesContainer.appendChild(countryDiv);
    });
}

const loadCountryDetail = code =>{
    const url = `https://restcountries.com/v3.1/alpha/${code}
    `
    console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountry(data[0]))
}

const displayCountry = (country) => {
    const detailContainer = document.getElementById('country-detail');
    detailContainer.innerHTML = `
    <h2>Country Detail</h2>
        <h3>Name: ${country.name.common} </h3>
        <p>Capital: ${country.capital[0]}</p>
        <img src="${country.flags.png}" alt="">
    `
}

loadCountries()
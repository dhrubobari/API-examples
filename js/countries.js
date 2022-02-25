const loadCountries = () => {
    fetch('https://restcountries.com/v2/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}
loadCountries();

const displayCountries = countries => {
    // for (const country of countries){
    //     console.log(country);
    // } // old style
    const countriesDiv = document.getElementById('countries')
    countries.forEach(country => {
        // console.log(country)
        const div = document.createElement('div');
        div.classList.add('country') // class add korlm for external style
        div.innerHTML = `
        <h3>${country.name}</h3>
        <p>${country.capital}</p>
        <button onclick="loadCountryByName('${country.name}')">Details</button>
        `; // evabe dile bujhte easy hoy

    //     const h3 = document.createElement('h3');
    //     h3.innerText = country.name;
    //     div.appendChild(h3);
    //     const p = document.createElement('p');
    //     p.innerText = country.capital;
    //     countriesDiv.appendChild(p);
    //     div.appendChild(p);
    countriesDiv.appendChild(div); // main div er moddhe h3, p, attached korlm.
    // }) // array declare dibo tai forEach
    })
}
const loadCountryByName = name => {
    const url = `https://restcountries.com/v2/name/${name}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetail(data[0]));
}
// steps: create element, set innerText, set name, div er moddhe child gulo attached kora lagbe.
// displayCountryDetail eta dekhabe
const displayCountryDetail = country => {
    const countryDiv = document.getElementById('country-detail');
    countryDiv.innerHTML = `
    <h4>${country.name}</h4>
    <p>Population: ${country.population}</p>
    <img width="200px" src="${country.flag}">
    ` // egula shob screen e show korche
}
// summary, shob dynamic vabe kora hoise.
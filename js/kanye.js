const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json()) // je response ta ase setaje json e convert korlm
    .then(data => displayQuote(data)) // load kore displayQuote function k dibe
}

const displayQuote = quote => {
    const quoteElement = document.getElementById('quote')
    quoteElement.innerText = quote.quote; // quote vitore j quote ase seta dekhte chai
}
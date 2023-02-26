const loadQuote = () => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayQuote(data))
}

const displayQuote = quote => {
    const quotesContainer = document.getElementById('quote')
    quotesContainer.innerText = quote.quote;
};

const array = { hobbies: ["dancing", "singing", "acting"] };
console.log(JSON.stringify(array));
const quoteContainer = document.getElementById('quote-generator')


// global variables
let apiQuotes = [];
//show new quote
function newQuote() { 
    // Pick a random quote from apiQuotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    console.log(quote);
}

// Get quotes from API 
async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
        // catch error 
        alert(error);
    }
}

// On load
getQuotes();
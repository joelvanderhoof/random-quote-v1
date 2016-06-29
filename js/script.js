// event listener to respond to clicks on the page
// when user clicks anywhere on the page, the "makeQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);


var randomQuote;
var message = '';

var movieQuotes = [
    //an array of objects which consist of movie quotes and info
    {
        quote: "Conan what is best \in life? To crush your enemies, see them driven before you, and to hear the lamentation of their women!",
        source: "Conan",
        citation: "Conan the Barbarian",
        year: 1982
    },
    {
        quote: "Do it! Kill me!  Come on!  What are you waiting for?!",
        source: "Major Alan \"Dutch\" Schaefer",
        citation: "Predator",
        year: 1987
    },
    {
        quote: "If it bleeds, we can kill it.",
        source: "Major Alan \"Dutch\" Schaefer",
        citation: "Predator",
        year: 1987
    },
    {
        quote: "Get to the choppa!",
        source: "Major Alan \"Dutch\" Schaefer",
        citation: "Predator",
        year: 1987
    },
    {
        quote: "Let off some steam, Bennett.",
        source: "Major Alan \"Dutch\" Schaefer",
        citation: "Predator",
        year: 1985
    },
    {
        quote: "I'll be back.",
        source: "T-800 Model 101",
        citation: "The Terminator",
        year: 1984
    },
    {
        quote: "Are these all your lunches?  You’ve been eating other people’s lunches?  Stop it!!!",
        source: "Detective John Kimble",
        citation: "Kindergarten Cop",
        year: 1990
    },
    {
        quote: "What killed the dinosaurs?  The Ice Age!!!!",
        source: "Mr. Freeze",
        citation: "Batman and Robin",
        year: 1997
    },
];

function getRandomQuote () {
    //selects a random quote object from the quotes array
    //returns the randomly selected quote object
    
    randomQuoteIndex = Math.floor(Math.random() * (movieQuotes.length - 0)) + 0;
    randomQuote = movieQuotes[randomQuoteIndex];
    return randomQuote[1, 2, 3, 4];
};


function printQuote(message) {
    //calls getRandomQuote()
    //prints the random quote
    
    getRandomQuote();
    var pickRandom = randomQuote
    message += '<p class="quote">' + pickRandom.quote + '</p>';
    message += '<p class="source">' + pickRandom.source + '<span class="citation"></span>' + pickRandom.citation + '<span class="year">' + pickRandom.year + '</span></p>';
    document.getElementById('quote-box').innerHTML = message;
};
   

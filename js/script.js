// event listener to respond to clicks on the page
// when user clicks anywhere on the page, the "makeQuote" function is called

var randomQuote;
var message = '';
var usedQuotes = [];

var movieQuotes = [
    //an array of objects which consist of movie quotes and info
    
    {
        quote: "Conan what is best in life? To crush your enemies, see them driven before you, and to hear the lamentation of their women!",
        source: "Conan",
        citation: "Conan the Barbarian",
        year: 1982,
        tags: ["nurting"]
    },
    {
        quote: "Do it! Kill me!  Come on!  What are you waiting for?!",
        source: "Major Alan \"Dutch\" Schaefer",
        citation: "Predator",
        year: 1987,
        tags: ["encouraging"]
    },
    {
        quote: "If it bleeds, we can kill it.",
        source: "Major Alan \"Dutch\" Schaefer",
        citation: "Predator",
        year: 1987,
        tags: ["insightful"]
    },
    {
        quote: "Get to the choppa!",
        source: "Major Alan \"Dutch\" Schaefer",
        citation: "Predator",
        year: 1987,
        tags: ["instructive"]
    },
    {
        quote: "Let off some steam, Bennett.",
        source: "Major Alan \"Dutch\" Schaefer",
        citation: "Predator",
        year: 1985,
        tags: ["ironic"]
    },
    {
        quote: "I'll be back.",
        source: "T-800 Model 101",
        citation: "The Terminator",
        year: 1984,
        tags: ["informative"]
    },
    {
        quote: "Are these all your lunches?  You’ve been eating other people’s lunches?  Stop it!!!",
        source: "Detective John Kimble",
        citation: "Kindergarten Cop",
        year: 1990,
        tags: ["inquiry"]
    },
    {
        quote: "What killed the dinosaurs?  The Ice Age!!!!",
        source: "Mr. Freeze",
        citation: "Batman and Robin",
        year: 1997,
        tags: ["chaos theory"]
    }
];

function getRandomQuote() {
    //selects a random quote object from the quotes array
    //returns the randomly selected quote object
    //displays each quote once until all quotes have been displayed
    "use strict";
    if (movieQuotes.length === 0) {
        movieQuotes = usedQuotes;
        usedQuotes = [];
    }
    var randomQuoteIndex = Math.floor(Math.random() * (movieQuotes.length));
    var splicedQuote = movieQuotes.splice(randomQuoteIndex, 1)[0];
    usedQuotes.push(splicedQuote);
    console.log(movieQuotes.length);
    return splicedQuote;
}


function printQuote(message) {
    //calls getRandomQuote()
    //prints the random quote
    "use strict";
    randomQuote = getRandomQuote();
    message += '<p class="quote">' + randomQuote.quote + '</p>';
    message += '<p class="source">' + randomQuote.source;
    if (randomQuote.citation !== undefined) {
        message += '<span class="citation">' + randomQuote.citation + '</span>';
    }
    if (randomQuote.year !== undefined) {
        message += '<span class="citation">' + randomQuote.year + '</span>';
    }
    document.getElementById('quote-box').innerHTML = message;
}
   
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

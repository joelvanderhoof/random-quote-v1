// event listener to respond to clicks on the page
// when user clicks anywhere on the page, the "makeQuote" function is called

var quoteObject;
var message = '';

var movieQuotes = [
    //an array of objects which consist of movie quotes and info
    //TO DO Add more properties to the quote object. For example, a tags property could include a list of "tags" like -- "humor", "business", "politics" -- to categorize each quote.
    
    {
        quote: "Conan what is best in life? To crush your enemies, see them driven before you, and to hear the lamentation of their women!",
        source: "Conan",
        citation: "Conan the Barbarian",
        year: 1982,
        tags: ["Awesome", "Erudite"]
    },
    {
        quote: "Do it! Kill me!  Come on!  What are you waiting for?!",
        source: "Major Alan \"Dutch\" Schaefer",
        citation: "Predator",
        year: 1987,
        tags: ["Insightful", "Admonish", "Inquiry"]
    },
    {
        quote: "If it bleeds, we can kill it.",
        source: "Major Alan \"Dutch\" Schaefer",
        citation: "Predator",
        year: 1987,
        tags: ["Insightful", "Erudite", "Modus Ponens"]
    },
    {
        quote: "Get to the choppa!",
        source: "Major Alan \"Dutch\" Schaefer",
        citation: "Predator",
        year: 1987,
        tags: ["Imerative", "Considerate"]
    },
    {
        quote: "Let off some steam, Bennett.",
        source: "Colnel John Matrix",
        citation: "Comando",
        year: 1985,
        tags: ["Meta", "Observant"]
    },
    {
        quote: "I'll be back.",
        source: "T-800 Model 101",
        citation: "The Terminator",
        year: 1984,
        tags: ["Predictive", "Reassuring"]
    },
    {
        quote: "Are these all your lunches?  You’ve been eating other people’s lunches?  Stop it!!!",
        source: "Detective John Kimble",
        citation: "Kindergarten Cop",
        year: 1990,
        tags: ["Mentor", "Lunch"]
    },
    {
        quote: "What killed the dinosaurs?  The Ice Age!!!!",
        source: "Mr. Freeze",
        citation: "Batman and Robin",
        year: 1997,
        tags: ["Chaos Theory", "Instructive"]
    }
];

function getRandomQuote() {
    //selects a random quote object from the quotes array
    //returns the randomly selected quote object
    
    "use strict";
    var randomQuoteIndex = Math.floor(Math.random() * (movieQuotes.length));
    quoteObject = movieQuotes[randomQuoteIndex];
    return quoteObject;
}


function printQuote(message) {
    //calls getRandomQuote()
    //prints the random quote
    //TO DO Don't display a random quote more than once until ALL quotes from the array have been displayed.
    
    "use strict";
    var randomQuote = getRandomQuote();
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
//TO DO Randomly change the background color of the page, when the quote changes
//TO DO Refresh the quote after a set amount of time. For example, every 30 seconds, make a new quote appear. (You can use the setInterval() or setTimeout() method to do this -- see the links in the Project Resources listing.)

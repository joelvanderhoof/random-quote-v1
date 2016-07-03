var quoteObject;
var message = '';
var usedQuotes = [];

var movieQuotes = [
    //an array of objects which consist of movie quotes and info
    
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
    if (movieQuotes.length === 0) {
        movieQuotes = usedQuotes;
        usedQuotes = [];
    }
    var randomQuoteIndex = Math.floor(Math.random() * (movieQuotes.length));
    var splicedQuote = movieQuotes.splice(randomQuoteIndex, 1)[0];
    usedQuotes.push(splicedQuote);
    
    return splicedQuote;
}

function getRandomColor() {
    // returns a random 6 digit hex value as a string
    
    "use strict";
    var hexValue = Math.floor(Math.random() * 0xFFFFFF);
    return "#" + ("000000" + hexValue.toString(16)).substr(-6);
}

function printQuote(message) {
    //calls getRandomQuote()
    //prints the random quote
    //changes background color with getRandomColor()
    
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
    document.body.style.backgroundColor = getRandomColor();
}

var intervalID = window.setInterval(printQuote, 5000);
//calls printQuote after a set interval
   
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
// event listener to respond to clicks on the page
// when user clicks anywhere on the page, the makeQuote function is called

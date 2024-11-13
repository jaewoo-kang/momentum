const quotes = [
    {
      quote: "The way to get started is to quit talking and begin doing.",
      author: "Walt Disney"
    },
    {
      quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill"
    },
    {
      quote: "It is never too late to be what you might have been.",
      author: "George Eliot"
    },
    {
      quote: "You must be the change you wish to see in the world.",
      author: "Mahatma Gandhi"
    },
    {
      quote: "In the middle of difficulty lies opportunity.",
      author: "Albert Einstein"
    },
    {
      quote: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
      author: "Ralph Waldo Emerson"
    },
    {
      quote: "The only way to do great work is to love what you do.",
      author: "Steve Jobs"
    },
    {
      quote: "Do not wait to strike till the iron is hot, but make it hot by striking.",
      author: "William Butler Yeats"
    },
    {
      quote: "The best way to predict the future is to create it.",
      author: "Abraham Lincoln"
    },
    {
      quote: "Life is what happens when you're busy making other plans.",
      author: "John Lennon"
    }
  ];
  
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.round(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = `- ${todaysQuote.author}`;
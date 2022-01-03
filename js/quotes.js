const quotes = [
  {
    quote: "What do you want a meaning for? Life is a desire, not a meaning.",
    author: "Charlie Chaplin",
  },
  {
    quote:
      "I probably hold the distinction of being one movie star who, by all laws of logic, should never have made it. At each stage of my career, I lacked the experience.",
    author: "Audrey Hepburn",
  },
  {
    quote:
      "Live neither in the past nor in the future, but let each day's work absorb your entire energies, and satisfy your widest ambition.",
    author: "Sir William Osler",
  },
  {
    quote:
      "When you jump for joy, beware that no one moves the ground from beneath your feet.",
    author: "Stanislaw J. Lec",
  },
  {
    quote:
      "Time is a cruel thief to rob us of our former selves. We lose as much to life as we do to death.",
    author: "Elizabeth Forsythe Hailey",
  },
  {
    quote:
      "I have found it advisable not to give too much heed to what people say when I am trying to accomplish something of consequence. Invariably they proclaim it can't be done. I deem that the very best time to make the effort.",
    author: "Calvin Coolidge",
  },
  {
    quote:
      "Challenges are gifts that force us to search for a new center of gravity. Don't fight them. Just find a different way to stand.",
    author: "Oprah Winfrey",
  },
  {
    quote:
      "It is wise to apply the oil of refined politeness to the mechanisms of friendship.",
    author: "Colette",
  },
];

const spanQuote = document.querySelector(".quote");
const spanAuthor = document.querySelector(".author");

const todaysQuotes = quotes[Math.floor(Math.random() * quotes.length)];

spanQuote.innerText = todaysQuotes.quote;
spanAuthor.innerText = todaysQuotes.author;

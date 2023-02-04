let mainBtn = document.querySelector(".mainBtn");
let quotes = document.querySelector(".quotes");
let author = document.querySelector(".author");
let mainArray = [
  {
    Quote:
      "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    Author: "Bernard M. Baruch",
  },
  {
    Quote: "Be the change that you wish to see in the world.",
    Author: "Mahatma Gandhi",
  },
  {
    Quote: "A room without books is like a body without a soul",
    Author: "Marcus Tullius Cicero",
  },
  {
    Quote:
      "Resentment is like drinking poison and waiting for your enemies to die.",
    Author: "Nelson Mandela",
  },
  {
    Quote: "You miss 100% of the shots you don't take.",
    Author: "Wayne Gretzy",
  },
];
mainBtn.onclick = function () {
  let result = mainArray[Math.floor(Math.random() * mainArray.length)];
  quotes.style.display = "block";
  quotes.innerHTML = result.Quote;
  author.innerHTML = `--${result.Author}`;
};

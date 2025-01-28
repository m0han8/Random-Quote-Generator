let gen = document.getElementById("gen");
let newBtn = document.getElementById("new");
let copyBtn = document.getElementById("copy");

const url = "https://api.quotable.io/random";

let defaultQuote = `"The best way to predict the future is to invent it." - Alan Kay`;
gen.innerText = defaultQuote;

let getQuote = () => {
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      gen.innerText = `"${item.content}" - ${item.author}`;
    });
};

let copyQuote = () => {
  navigator.clipboard.writeText(gen.innerText).then(() => {
    alert("Quote copied to clipboard!");
  });
};

window.addEventListener("load", getQuote);
newBtn.addEventListener("click", getQuote);
copyBtn.addEventListener("click", copyQuote);


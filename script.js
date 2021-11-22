// Fonctionnalité 1

let footerCounter = 0;
document
  .getElementsByTagName("footer")[0]
  .addEventListener("click", function () {
    footerCounter;
    console.log(`Click number ${footerCounter}`);
  });

// Fonctionnalité 2

let menu = document.getElementById("navbarHeader");
let button = document.querySelector(".navbar-toggler-icon");

button.addEventListener("click", () => {
  menu.classList.toggle("collapse");
});

// Fonctionnalité 3

let card = document.getElementsByClassName("card-body")[0];
let button1 = document.querySelector(".btn-outline-secondary");

button1.addEventListener("click", () => {
  card.style.color = "red";
});

// Fonctionnalité 4

let secondCard = document.getElementsByClassName("card-body")[1];
let button2 = document.getElementsByClassName("btn-outline-secondary")[1];

button2.addEventListener("click", () => {
  secondCard.style.color == "green"
    ? (secondCard.style.color = "black")
    : (secondCard.style.color = "green");
});

// Fonctionnalité 5

document
  .getElementsByClassName("navbar")[0]
  .addEventListener("click", function () {
    if (document.getElementsByTagName("link")[0].rel == "stylesheet")
      document.getElementsByTagName("link")[0].rel = "styleDisabled";
    else document.getElementsByTagName("link")[0].rel = "stylesheet";
  });

// Fonctionnalité 6

let viewButtons = document.getElementsByClassName("btn btn-sm btn-success");
for (let i = 0; i < viewButtons.length; i++) {
  viewButtons[i].addEventListener("mouseover", function () {
    document.getElementsByClassName("card-text")[i].classList.toggle("d-none");
    document.getElementsByClassName("card-img-top")[i].classList.toggle("w-25");
  });
}

// Fonctionnalité 7

let cards = document.getElementsByClassName("col-md-4");
let parent = document.getElementsByClassName("row")[1];
let bouton = document.querySelector("main");
bouton.addEventListener("click", changeIndexCard);
function changeIndexCard() {
  let movingCard = cards[cards.length - 1];
  parent.insertBefore(movingCard, cards[0]);
}

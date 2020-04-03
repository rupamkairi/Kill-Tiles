var card = document.querySelector(".card");
var card_content = document.querySelector(".card-content");

var c = document.getElementById("c");
var cc = document.getElementById("cc");

let flip = false;

// card.addEventListener("click", () => {
//   if (!flip) {
//     card_content.style.transform = "rotateY(180deg)";
//   } else {
//     card_content.style.transform = "rotateY(0deg)";
//   }
//   flip = !flip;
// });

c.addEventListener("click", () => {
  if (!flip) {
    cc.style.transform = "rotateY(180deg)";
  } else {
    cc.style.transform = "rotateY(0deg)";
  }
  flip = !flip;
});

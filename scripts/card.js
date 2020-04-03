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

// c.addEventListener("click", () => {
//   if (!flip) {
//     cc.style.transform = "rotateY(180deg)";
//   } else {
//     cc.style.transform = "rotateY(0deg)";
//   }
//   flip = !flip;
// });

class Card {
  constructor(unicode, id) {
    this.id = id;
    this.card_id = `card-${unicode}-${id}`;
    this.flip_id = `flip-${unicode}-${id}`;
    this.emoji = String.fromCodePoint("0x" + unicode);
    // this.emoji = unicode;
    this.template = `
			<div class="card" id="${this.card_id}">
   			<div class="flip" id="${this.flip_id}">
    		  <div class="card-front">
	  		    <h1>🎆</h1>
	  		  </div>
	  		  <div class="card-back">
	  		    <h1>${this.emoji}</h1>
	  		  </div>
	  		</div>
			</div>`;
    this.fliped = false;
    this.matched = false;
  }

  flip() {
    document.getElementById(this.card_id).addEventListener("click", () => {
      if (!this.fliped) {
        document.getElementById(this.flip_id).style.transform =
          "rotateY(180deg)";
      } else {
        document.getElementById(this.flip_id).style.transform = "rotateY(0deg)";
      }
      this.fliped = !this.fliped;
    });
  }
}

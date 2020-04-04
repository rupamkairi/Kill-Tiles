var selectedCards = [];
let scoreText = document.getElementById("score-text");
var matchedCards = 0;

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
	  		    <p disabled>💫</p>
	  		  </div>
	  		  <div class="card-back">
	  		    <p>${this.emoji}</p>
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

        selectedCards.push(this);

        if (selectedCards.length == 2) {
          // do checks
          if (selectedCards[0].emoji == selectedCards[1].emoji) {
            // matched
            console.log("matched");
            console.log(selectedCards);
            selectedCards[0].matched = selectedCards[1].matched = true;
            matchedCards++;
            console.log(`score: ${matchedCards} ... keep goin...`);
          } else {
            // does not matched
            selectedCards[0].fliped = selectedCards[1].fliped = false;
            document.getElementById(selectedCards[0].flip_id).style.transform =
              "rotateY(0deg)";
            document.getElementById(selectedCards[1].flip_id).style.transform =
              "rotateY(0deg)";
            console.log("do not matched");
          }
          selectedCards.length = 0;
        }
        scoreText.innerText = matchedCards;
        scoreText.innerHTML = matchedCards;
      }
      // else {
      //   document.getElementById(this.flip_id).style.transform = "rotateY(0deg)";
      // }
      // this.fliped = !this.fliped;
    });
  }
}

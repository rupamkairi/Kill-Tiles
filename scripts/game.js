var gameTable = document.getElementById("game-table");

function Game() {
  createCards(14);
  shuffleCards(Cards);
  // console.log(Cards);

  setupView(gameTable);
  setupInteraction();
}

Game();

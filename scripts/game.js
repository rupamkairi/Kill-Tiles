var gameTable = document.getElementById("game-table");

function Init() {
  createCards(16);
  shuffleCards(Cards);

  console.log(Cards);

  setupView(gameTable);
  setupInteraction();
}

Init();

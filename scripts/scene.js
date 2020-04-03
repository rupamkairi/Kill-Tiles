var Cards = [];

function createCards(count) {
  let cardCount = count;
  for (let i = 0; i < cardCount / 2; i++) {
    var random_emoji = emojis[Math.round(Math.random() * emojis.length)];
    var emoji_unicode = random_emoji.codePointAt(0).toString(16);

    // i'll create 2 random_ids and assign consecutively
    var random_id = Math.round(Math.random() * 10000);
    console.log([i, `card with ${random_emoji} id:${random_id}`]);
    Cards.push(new Card(emoji_unicode, random_id));

    var random_id = Math.round(Math.random() * 10000);
    console.log([i, `card with ${random_emoji} id:${random_id}`]);
    Cards.push(new Card(emoji_unicode, random_id));
  }
}

function shuffleCards(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function setupView(parentNode) {
  parentNode.innerHTML;
  Cards.forEach(el => {
    parentNode.innerHTML += el.template;
  });
}

function setupInteraction() {
  Cards.forEach(el => el.flip());
}

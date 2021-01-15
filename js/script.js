function randomNumber(min, max) {
  var result = Math.floor(Math.random() * (max + 1 - min) + min);
  return result;
}

var listaNumeriRandom = [];
for (var i = 0; i < 5; i++) {
  var generated = randomNumber(1, 100);
  listaNumeriRandom.push(generated);
}

alert(JSON.stringify('ricorda questi numeri' + '  ' + listaNumeriRandom));

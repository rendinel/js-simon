function randomNumber(min, max) {
  var result = Math.floor(Math.random() * (max + 1 - min) + min);
  return result;
}

var listaNumeriRandom = [];
for (var i = 0; i < 5; i++) {
  var generated = randomNumber(1, 100);
  listaNumeriRandom.push(generated);
}

alert(JSON.stringify('ricorda questi numeri, tra 30 secondi me gli ripeti' + '  ' + listaNumeriRandom));

setTimeout(function() {
  var listaNumeriUser = [];
  for (var i = 0; i < 5; i++) {
    var userNumber = parseInt(prompt('Inserisci un numero alla volta '));
    listaNumeriUser.push(userNumber);
  }
  var listaToShow = [];
  for (var i = 0; i < 5; i++) {
    if (listaNumeriRandom.includes(listaNumeriUser[i])) {
      listaToShow.push(listaNumeriUser[i]);
    }
  }
  alert(JSON.stringify(listaToShow));
}, 3000)

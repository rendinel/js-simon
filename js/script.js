function randomNumber(min, max) {
  var result = Math.floor(Math.random() * (max + 1 - min) + min);
  return result;
}

function userPrompt() {
  for (var i = 0; i < 5; i++) {
    var userNumber = parseInt(prompt('Inserisci un numero alla volta '));
    // listaNumeriUser.push(userNumber); prova
  }
}

var listaNumeriRandom = [];
for (var i = 0; i < 5; i++) {
  var generated = randomNumber(1, 100);
  listaNumeriRandom.push(generated);
}

alert(JSON.stringify('ricorda questi numeri, tra 30 secondi me gli ripeti' + '  ' + listaNumeriRandom));

// var listaNumeriUser = []; arrayprova

setTimeout(userPrompt, 3000)

for (var i = 0; i < 5; i++) {
  if (userNumber === listaNumeriRandom[i]) {
    alert('ok')
  } else {
    alert('no')
  }
}

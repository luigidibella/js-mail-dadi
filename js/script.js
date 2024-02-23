
let listaMail = ['tony.stark@gmail.com', 'stephen.strange@stud.uniroma3.it', 'peter.parker@dailybugle.com'];

let checkMail = prompt('inserisci la tua mail');
let mail = false;

for (let i = 0; i < listaMail.length; i++){
  let lista = listaMail[i];
  if(lista === checkMail){
    mail = true;
  }
}

if (mail === true){
  alert('email riconosciuta,\nvuoi giocare a dadi contro il computer?');

  let continuaGioco = true;

  while (continuaGioco) {

    let giocatore = Math.floor(Math.random() * 6) + 1;
    console.log(giocatore);
    let computer = Math.floor(Math.random() * 6) + 1;
    console.log(computer);

    if(giocatore > computer) {
      console.log('hai vinto');
      alert('Hai vinto!' + '\nComputer: ' + computer + '\nGiocatore: ' + giocatore);
    }else if (giocatore == computer) {
      console.log('pareggio');
      alert('Pareggio!' + '\nComputer: ' + computer + '\nGiocatore: ' + giocatore);
    }else {
      console.log('hai perso');
      alert('Hai perso!' + '\nComputer: ' + computer + '\nGiocatore: ' + giocatore);
    }
  
  let risposta = prompt("Vuoi giocare ancora? (si/no)").toLowerCase();
  if (risposta !== "si") {
    continuaGioco = false;
  }
}

  alert('Grazie per aver giocato!')

}else{
  alert('email non riconosciuta');
}
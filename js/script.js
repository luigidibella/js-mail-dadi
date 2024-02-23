
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
  alert('email riconosciuta');
  
}else{
  alert('email non riconosciuta');
}
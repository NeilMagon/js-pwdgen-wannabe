const userName = prompt (`Ciao come ti chiami?`);
console.log(`Il tuo nome è: ` + userName);
const userSurname = prompt (`Ciao qual'è il tuo cognome?`);
console.log(`Il tuo cognome è: ` + userSurname);
const userColor = prompt (`Ciao che colore preferisci?`);
console.log(`Il tuo colore è: ` + userColor);
document.getElementById(`message`).innerHTML = `${userName} ${userSurname} ${userColor} ${23}`
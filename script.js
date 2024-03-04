// USERNAME
// const userName = prompt (`Ciao come ti chiami?`);
// console.log(`Il tuo nome è: ` + userName);
// USERSURNAME
// const userSurname = prompt (`Ciao qual'è il tuo cognome?`);
// console.log(`Il tuo cognome è: ` + userSurname);
// USERCOLOR
// const userColor = prompt (`Ciao che colore preferisci?`);
// console.log(`Il tuo colore è: ` + userColor);
// PASSWORD
// document.getElementById(`message`).innerHTML = `${`La tua password è:`} ${userName} ${userSurname} ${userColor} ${23}`

// BONUS
// USERNAME
const userName = prompt (`Ciao come ti chiami?`);
console.log(`Il tuo nome è: ` + userName);
// USERSURNAME
const userSurname = prompt (`Ciao qual'è il tuo cognome?`);
console.log(`Il tuo cognome è: ` + userSurname);
// USERCOLOR
const userColor = prompt (`Ciao che colore preferisci?`);
console.log(`Il tuo colore è: ` + userColor);
// NUMBER
const userNumber = prompt (`Ciao che numero preferisci?`);
console.log(`Il tuo numero è: ` + userNumber);
// CONVERTASNUMERIC
let userNumberAsNumeric = parseInt(userNumber);
let sum = userNumberAsNumeric + 23;
// PASSWORD
document.getElementById(`message`).innerHTML = `${`La tua password è:`} ${userName} ${userSurname} ${userColor} ${sum}`
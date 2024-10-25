
// Sibar kallar detta: vi snappar upp :
const bankroll = document.getElementById("bankroll"),
  bet = document.getElementById("bet"),
  selectedColor = document.getElementById("color"),
  rollBtn = document.getElementById("rollBtn"),
  log = document.getElementById("log");


/**
 * Array - a list of multiple values
*/
// The index for retrievning the elements in the array are 0-36, as following
// table[0] = 'green'
// table[1] = 'red'
// table[2] = 'black'
// table[3] = 'red'
// And so on ...
const table = [
  "green",
  "red",
  "black",
  "red",
  "black",
  "red",
  "black",
  "red",
  "black",
  "red",
  "black",
  "black",
  "red",
  "black",
  "red",
  "black",
  "red",
  "black",
  "red",
  "red",
  "black",
  "red",
  "black",
  "red",
  "black",
  "red",
  "black",
  "red",
  "black",
  "black",
  "red",
  "black",
  "red",
  "black",
  "red",
  "black",
  "red",
];

function validNumber(textField) {
  if (isNaN(parseInt(textField.value))) {
    // If the input isn't a number display a warning message

    errorMessages = "Both bankroll and bet must be numeric"
    document.getElementById(log) = "Please enter only numbers.";
  }
}


function rollGame(event) {

  console.log(event);
  // Prevents all default behavior of the element that the event is attached to
  event.preventDefault();
  document.getElementById('form-messages').innerHTML = "";

  /***
   * Validering för bankroll och bet.
   */
  //Sibars lösning:
  let errorMessages = "";
  if (isNaN(bankroll.value) || isNaN(bet.value)) {
    errorMessages = "Both bankroll and bet must be positive numerics."
    return;
  }


  /*   console.log(isNaN(parseInt(bankroll.value)), "bankroll")
  
    while (validNumber(bankroll.value) == false || validNumber(bet.value) == false) {
      document.getElementById(log) = "Please enter only numbers."
    }
   */


  // Random number between 0-36  
  const random = Math.floor(Math.random() * 37) + 0;
  const color = table[random]; console.log(typeof color); //string

  console.log(`Number: ${random}, color: ${table[random]}`);

  // const betAmount = bet.value;
  // const selectedColorvalue = selectedColor.value;
  //  console.log(typeof selectedColorvalue, selectedColorvalue);  //String
  // console.log(typeof selectedColor.value, "sCv")

  console.log("You just rolled :)");

  // Vinst eller förlust:
  let outcome = "";
  if (selectedColor.value == color) { // vinst
    outcome = "win";
    console.log("Grattis! Du vann!");

    let updatedBankroll = Number(bankroll.value) + Number(bet.value);
    // parseInt(bankroll.value) + parseInt(bet.value) // Sibars lösning
    console.log(typeof updatedBankroll, updatedBankroll, "uBr")
    document.getElementById("bankroll").value = updatedBankroll;

  } else {    // förlust
    outcome = "lost";
    console.log("Du förlorade");
    // document.getElementById("bankroll").value = bankroll.value - bet.value;
    //  document.getElementById("bankroll").value -= bet.value;
    let updatedBankroll = Number(bankroll.value) - Number(bet.value);
    // console.log(typeof bankroll.value, bankroll.value, "uBr")
    // parseInt(bankroll.value) + parseInt(bet.value) // Sibars lösning
    //console.log(typeof updatedBankroll, updatedBankroll, "uBr")
    document.getElementById("bankroll").value = updatedBankroll;
  }
  // obs backtics. Sibars lösning som min fast jag tog en ny variabel outcome
  // Sibars lösning: ta bort p-taggar och ändrar logmessage till let utanför if-satsem
  const logMessage = `<p>Bet is ${bet.value} on ${selectedColor.value} 
  spinning the wheel...Stopped at ${color}. You ${outcome}!</p>`;

  log.innerHTML = logMessage + log.innerHTML;
  log.innerHTML = "<p>" + logMessage + "</p>" + log.innerHTML;
}

/*  fråga 5 : generera  
Gör gärna det du ska generea i html för att jämföra, som pseudokod
Tänk vad som är lika och vad som skiljer, 
ändra  det som skiljer dynamiskt, 
id relaterat till iterationsnumret 
färgen finns i en array */

// Create a Roulette table in HTML   TÄNK LÄSBARHET Gör om till funktion och kalla på 
//funktionen
// Tänk på att döpa bra
function createRouletteTable{
  let tableNumbersHTML = "";
  for (let i = 0; i <= 36: i++ ) {
    tableNumbersHTML += `\n <div  class = "number ${table[i]}"  id= "n${i}">i</div>`
  }
}


/**
 * Exercises
 */
// 1. Skapa korrekt logik för att bestämma om spelaren vann eller ej
// 2. Justera bankroll och visa korrekt meddelande i log, beroende om Spelaren Vann eller inte

// 3. Errorhantering: Lägg till validering på textfälten, så att endast nummer kan anges i textfältet, annars visa ett felmeddelande
// 4. Errorhantering: Se till att man ej kan satsa mer än vad man har i bankroll. Dvs undvik att spelaren kan spela med minus i bankroll

// 5. Avancerat: Skapa ett GUI där du via en loop generar alla element för ett visuellt skapa Roulette bordet.
// 6. Avancerat: Se till att animera så att för för varje "Roll", det hoppar mellan 10 random tal innan det landar på ett tal
// 7. Avancerat: Refactorera all kod till mindre funktioner
// 8. Avancerat: Skapa logik för att kunna spela/betta på siffror, och inte bara färg

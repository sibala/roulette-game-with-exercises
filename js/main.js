const bankroll      = document.getElementById('bankroll'),
      bet           = document.getElementById('bet'),
      selectedColor = document.getElementById('color'),
      rollBtn       = document.getElementById('rollBtn'),
      log           = document.getElementById('log');

/**
 * Array - a list of multiple values
 */
// The index for retrievning the elements in the array are 0-36, as following
// table[0] = 'green'
// table[1] = 'red'
// table[2] = 'black'
// table[3] = 'red'
// And so on ...
const table     = ['green','red','black','red','black','red','black','red','black','red','black','black','red','black','red','black','red','black','red','red','black','red','black','red','black','red','black','red','black','black','red','black','red','black','red','black','red'];

function rollGame(event) {
  // Prevents all default behavior of the element that the event is attached to
  event.preventDefault();
  document.getElementById('form-messages').innerHTML = "";

  /**
   * Validation
   */
  let errorMessages = "";
  if (isNaN(bankroll.value) || isNaN(bet.value)) {
    errorMessages = "Both bankroll and bet must be numeric";
  }
  
  if (parseInt(bet.value) > parseInt(bankroll.value)) {
    errorMessages = "Hold your horses PAL. You can't bet what you don't have";
  }


  if (parseInt(bet.value) < 0 || parseInt(bankroll.value) < 0) {
    errorMessages = "Both bankroll and bet must be a positive number for you to play";
  }

  if (errorMessages) {
    document.getElementById('form-messages').innerHTML = `<p>${errorMessages}</p>`;
    return;
  }

  // Rondom number between 0-36
  const randomNumber = Math.floor(Math.random() * 37) + 0;
  const numberColor  = table[randomNumber];

  // 1. Skapa korrekt logik för att bestämma om spelaren vann eller ej
  // - Jämför den valda färgen från rulllistan selectedColor.value med numberColor. Om de är lika, Då har spelaren vunnit, annars har han förlorat

  // Determine who is the winner
  let logMessage = `Bet is ${bet.value} spinning the wheel...Stopped at ${numberColor}.`
  if (selectedColor.value === numberColor) {
    bankroll.value = parseInt(bankroll.value) + parseInt(bet.value);
    logMessage += " You won!";
  } else {
    bankroll.value = parseInt(bankroll.value) - parseInt(bet.value);
    logMessage += " You lost!";
  }
  log.innerHTML = "<p>" + logMessage + "</p>" + log.innerHTML;
  
  // 2. Justera bankroll och visa korrekt meddelande i log, beroende om Spelaren Vann eller inte
  // - Om spelaren vann, ge meddelandet via log, i en av if/else-blocket
  // - Om spelade förlorade, ge ett annat meddelande via log, i den andra if/else-blocket
}


/**
 * Exercises
 */
// 1. Skapa korrekt logik för att bestämma om spelaren vann eller ej
// 2. Justera bankroll och vissa korrekt meddelande i log, beroende om Spelaren Vann eller inte
// 3. Errorhantering: Lägg till validering på textfälten, så att endast nummer kan anges i textfältet, annars visa ett felmeddelande
// 4. Errorhantering: Se till att man ej kan satsa mer än vad man har i bankroll. Dvs undvik att spelaren kan spela med minus i bankroll
// 5. Avancerat: Skapa ett GUI där du via en loop generar alla element för ett visuellt skapa Roulette bordet.
// 6. Avancerat: Se till att animera så att för för varje "Roll", det hoppar mellan 10 random tal innan det landar på ett tal
// 7. Avancerat: Refactorera all kod till mindre funktioner
// 8. Avancerat: Skapa logik för att kunna spela/betta på siffror, och inte bara färg 

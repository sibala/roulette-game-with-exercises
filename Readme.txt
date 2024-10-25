17/10
Vi: Mario, Tiam och jag, jobbade på rouletteuppgiften i grupp 7 med live server share. Visade sig vara förrädiskt krångligt att hålla på i samma dokument. Mario skickade länkar och vi laddade ner tillägg i VSC. Det tog mycket tid, även om det också var ett intressant arbetssätt. Memo to self: Man kan inte se dev Tools från webbsidan om man jobbar så eftersom filen ligger på någon annans dator (Marios i detta fall) . Fastnade redan på validering i deluppgift 2. Fick ladda ner filerna flera ggr. Jag kunde se dev Tools via 


Validering = säkra rätt datatyp? 
Senare under föreläsning, idé om att använda switch för validering:

 // Använd för validering? :
    switch(expression) {
    case x:
    // code;
    break;
    case y:
    // code
    break;
    default:
    //code
    }

Och sedan nästan hundra på att man bör använda while loop för valideringen.
    // while loop för validering
    Pseudokod:
    if bankroll is Not a Number OR less than 1 - dont run game
    och även
    if bet > bankroll get Error "You can not bet more than you have in your bankroll"
    if bet is Not a Number

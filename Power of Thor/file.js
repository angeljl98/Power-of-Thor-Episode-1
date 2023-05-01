/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 * ---
 * Hint: You can use the debug stream to print initialTX and initialTY, if Thor seems not follow your orders.
 **/

var inputs = readline().split(' ');
const lightX = parseInt(inputs[0]); // the X position of the light of power
const lightY = parseInt(inputs[1]); // the Y position of the light of power
const initialTx = parseInt(inputs[2]); // Thor's starting X position
const initialTy = parseInt(inputs[3]); // Thor's starting Y position

function powerOfThor(lightX, lightY, initialTX, initialTY) {
    // Get the direction vector from Thor's current position to the light of power.
    const direction = [lightX - initialTX, lightY - initialTY];

    // If Thor is on the same cell as the light of power, return "STOP".
    if (direction.every(x => x === 0)) {
      return "STOP";
    }

    // Determine the direction of the move.
    const move = direction[0] > 0 ? "E" : "W";
    move += direction[1] > 0 ? "N" : "S";

    // Output the move.
    console.log(move);
}

var dirX = "" //Instrucciones
var dirY = "" //Instrucciones
var salida = "" //Salida
var difX = lightY-initialTy //Instrucciones
var difY = lightX-initialTx //Instrucciones

if (lightY>initialTy) {dirY="S"} else if (lightY<initialTy) {dirY="N"} else {dirY=""};
if (lightX>initialTx) {dirX="E"} else if (lightX<initialTx) {dirX="W"} else {dirX=""};

// game loop
while (true) {
    const remainingTurns = parseInt(readline()); // The remaining amount of turns Thor can move. Do not remove this line.

    console.error(difY);
    salida=(dirY+dirX);
    salida=powerOfThor(lightX, lightY, initialTx, initialTy)

    // Write an action using console.log()
    // To debug: console.error('Debug messages...');
    // A single line providing the move to be made: N NE E SE S SW W or NW
    console.log(salida);
}

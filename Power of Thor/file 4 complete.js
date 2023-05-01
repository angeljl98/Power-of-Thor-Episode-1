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
 var difX = initialTx - lightX;
 var difY = initialTy - lightY;
 var currentX = initialTx;
 var currentY = initialTy;

 // game loop
 while (true) {
     const remainingTurns = parseInt(readline()); // The remaining amount of turns Thor can move. Do not remove this line.
     console.error(currentX+" "+currentY)
     if (currentY<lightY&&currentX<lightX&&currentX<40&&currentY<18) {
        currentY=currentY+1;
        currentX=currentX+1;
        console.log("SE");
    } else if (currentY<lightY&&currentX>lightX&&currentX<40&&currentY<18) {
        currentY=currentY+1;
        currentX=currentX-1;
        console.log("SW");
    } else if (currentY>lightY&&currentX<lightX&&currentX<40&&currentY<18) {
        currentY=currentY+1;
        currentX=currentX-1;
        console.log("NE");
    } else if (currentY>lightY&&currentX>lightX&&currentX<40&&currentY<18) {
        currentY=currentY+1;
        currentX=currentX+1;
        console.log("NW");
    } else if (currentY>lightY&&currentX==lightX) {
         currentY=currentY-1;
         console.log("N");
    } else if (currentY<lightY&&currentX==lightX) {
         currentY=currentY+1;
         console.log("S");
    } else if (currentY==lightY&&currentX>lightX) {
         currentX=currentX-1;
         console.log("W");
    } else if (currentY==lightY&&currentX<lightX) {
         currentX=currentX+1;
         console.log("E");
    } else if (currentY>lightY&&currentX==39) {
        currentY=currentY-1;
        console.log("N");
    } else if (currentY<lightY&&currentX==39) {
        currentY=currentY+1;
        console.log("S");
    } else if (currentX>lightX&&currentY==17) {
        currentX=currentX-1;
        console.log("W");
    } else if (currentX<lightX&&currentY==17) {
        currentX=currentX+1;
        console.log("E");
    } else if (currentX==lightX&&currentY==lightY) {
        console.log("STOP")
    }
     // Write an action using console.log()
     // To debug: console.error('Debug messages...');
     // A single line providing the move to be made: N NE E SE S SW W or NW

 }
 

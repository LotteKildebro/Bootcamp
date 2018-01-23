
//OPGAVE 1 

//denne virker ikke...why?--------------//
// let x = 10;
// let y = 6;

// function tal(x, y){
// ("tal " + x + " gange med tal " + y + ", " + " er lig med " + x * y);
//  }
//----slut på den der ikke virker....------------//

//-----Den her virker!-----//
// let a = 10;
// let b = 2;

// let talaogb = new Function("a", "b", "return a * b");
// console.log("tal " + a + " gange med tal " + b + ", " + " er lig med " + a * b);

// let a = 22;
// let b = 380;

// let talaogb = new Function("a", "b", "return a * b");
// console.log("tal " + a + " gange med tal " + b + ", " + " er lig med " + a * b);

//-----slut på den der virker....//

let x = 22;
let y = 380;

function gangeMedxOGy(x, y) {
    if (!isNaN(x) || !isNaN(y)) {
       return 0;
    } else {
       return x * y;
    }
 }


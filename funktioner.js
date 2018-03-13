
//OPGAVE 1

//denne virker ikke...why?--------------//
let x = 10;
let y = 6;

function tal(x, y){
("tal " + x + " gange med tal " + y + ", " + " er lig med " + x * y);
 }
//----slut på den der ikke virker....------------//

//-----Den her virker!-----//
let a = 10;
let b = 2;

let talaogb = new Function("a", "b", "return a * b");
console.log("tal " + a + " gange med tal " + b + ", " + " er lig med " + a * b);

let a = 22;
let b = 380;

let talaogb = new Function("a", "b", "return a * b");
console.log("tal " + a + " gange med tal " + b + ", " + " er lig med " + a * b);

//-----slut på den der virker....//

let x = 22;
let y = 380;

function gangeMedxOGy(x, y) {
    if (isNaN(x) || isNaN(y)) {
       return 'nopes';
    } else {
       return x * y;
    }
 }


var findtal = gangeMedxOGy(4,8);
console.log(findtal);


function regndetUD(a, b){
    if(isNaN(a)==false && isNaN(b)==false){
        return 'tal ' + a + ' gange med tal ' + b + ' er lig med ' + a * b;
    }else{
        console.log('det er ikke et tal');
    }
}

let find = regndetUD(22, 10);

console.log(find);


function isNaNogContent(a, b){
    if(a==undefined || b==undefined || !isNaN(a) || !isNaN(b)){
        return false;
    }else{
        return 'tal ' + a + ' gange med tal ' + b + ' er lig med ' + a * b;
    }
}

let find = isNaNogContent(22,10);

console.log(find);


function udskrivfarve (farve) {
    console.log(farve);
}

let farver =  ['rød', 'grøn', 'blå'];
farver.forEach(udskrivfarve);





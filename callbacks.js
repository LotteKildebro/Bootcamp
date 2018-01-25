
//Øvelse 1 
//Opret en funktion som kan modtage et enkelt argument (en string eller number), 
//og console.logge indholdet af parameteren.
//
// brug ` i strings hvis : du vil konkatanere `<p>${læskedrik}</p>` eller hvis du have det til at fylde flere linjer.
//
// function sighej(tal){
//      console.log('hejsa');
// }

// Del 2
//Omskriv dette forEach kald, så det ikke benytter den anonyme funktion,
// men så det i stedet modtager den navngivet funktion du lige har oprettet.

// let data = [1, 2, 3, 4, 5, 6];

// data.forEach(sighej); //callback der referere til funktionen.

//
//Øvelse 2

//Skriv din egen funktion, der kalder på en callback funktion (dvs du skal have 2 funktioner).
//første funktion modtager en streng, og en callback funktion. funktionen skal tilføje et html <p> tag omkring strengen.
//callback funktionen modtager den ændrede streng, og console.log'er den. men kaldet skal ske fra den første funktion.
//"next kalder tilbage" :).

//----Forsøg 1------

let kittens = ['cleo', 'chaps', 'snowball', 'blues mis'];

function Html(tekst) {
    console.log('<p>' + tekst + '</p>');
}

function sighej(tekst, next) {
    if (typeof tekst == 'string') {
        next(tekst);
    } else if (Array.isArray(tekst) == true) {
        for (i = 0; i < tekst.length; i++)
            next(tekst[i]);
    }
}
sighej('hej', Html);
// Vi sender html med

//-----Forsøg 2--------

// function ChangeHtml(tekst) {
//     console.log(`<p>${tekst}</p>`)
// }
// function sigNoget(tekst, next) {
//     next(tekst);
// }
// sigNoget('goddag', ChangeHtml);







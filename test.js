
//Eksempel på callback
//
//Her kalder man funktionen tilføjHtml i funktionen udskrivData.
function tilføjHtml(tekst) {
    console.log('<p>' + tekst + '</p>');
}

function udskrivData(tekst){

tilføjHtml(tekst);

}

udskrivData("hej verden");
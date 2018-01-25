
// Detaljeret kommentarer om hvad der sker i koden.
// Vi gennemgår et eksempel på Asynkronitet 

//Her defineres funktionen 'getData' med 2 parametere 'dataURI' & outputData..
function getData(dataURI, outputData) {
    //Her console.logger vi en tekst streng "'første linje i getData funktionen...'"
    //Denne tekst skal være den første tekst der dukker op når vi console.logger..
    console.log('første linje i getData funktionen...');
    //Her opretter vi en variabel som indeholder en anonym funktion
    let timer = setTimeout(function () {
        //Her console.logger vi en tekst streng "'Her der der gået 2 sekunder.'"
        console.log('Her der der gået 2 sekunder.');
        //Så opretter vi en variabel der hedder dataArray, som består af et Array med 8 tal elementer
        let dataArray = [12, 34, 56, 78, 90, 123, 456, 789];
        //Nu laver vi et callback med argumentet fra den første funktion 'getData', det indeholder
        //vores array 'dataArray'
        outputData(dataArray);
        //Vi sætter den til at der skal gå 2 sekunder før vores tekst streng vises i console.log
    }, 2000);
}
//Dette er funktionen der laver callbacket, og udskriver dataen
function outputData(dataArray) {
    //Her console.logger vi en tekst streng "''Dette er funktionen der udskriver det hentede data: ''"
    //samt vores array 'dataArray'
    console.log('Dette er funktionen der udskriver det hentede data: ' + dataArray);
}
//her laver vi et callback, getData er den funktion vi har defineret, 
//med argumenterne linket og så referere vi til Html funktionen.
getData('http://www.domain.com/something', outputData);
//Selvom at denne kode burde stå til sidst, så gør den det også de første 2 sekunder, men fordi
//vi har sat et delay på anonyme funktion der gør at den først dukker op 2 sekender senere.
console.log("Denne kode linje burde være den sidste.");
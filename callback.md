
#Callback 

Callback bliver også omtalt som en "higher-order function", det er en funktion der bliver sendt videre til en anden 
funktion som en parameter. Callback funktionen er så udført i den første anden funktion. 
En 'Callback' kan også beskrives som et mønster der bliver brugt til at løse et problem, derfor bliver det også
kaldt 'Callback pattern'...

## Callback eksempel forklaret

```javascript
//Her defineres en variabel med et Array med 4 elementer.
let kittens = ['cleo', 'chaps', 'snowball', 'blues mis'];

//Her defineres function Html med parameteren 'tekst'
function Html(tekst) {
//Her console.logger vi '<p>' + tekst + '</p>' til udskrivning.
    console.log('<p>' + tekst + '</p>');
}

//Her er funktionen sighej med 2 parameter: 'tekst' samt 'next'
//'tekst' er den parameter vi gerne vil have ændret oppe i funktionen Html.
//'next' er den parameter der skal lave callbacken.
function sighej(tekst, next) {
//Her siger vi: Hvis typen af 'tekst' er == 'string' altså bogstaver, så skal den udfører next(tekst);
    if (typeof tekst == 'string') {
        next(tekst);
//Her siger vi: ellers skal den tage fat i vores varibel array
    } else if (Array.isArray(tekst) == true) {
//Her laver vi en forløkke der kører igennem array'et 
        for (i = 0; i < tekst.length; i++)
            next(tekst[i]);
    }
}
//her laver vi et callback, sig hej er den funktion vi har defineret, 
//med argumenterne kittens og så referere vi til Html funktionen.
//Hvis vi gerne vil bytte variablen kittens ud med en string kan vi sagtens det. f.eks. 'hej'

sighej(kittens, Html);
//Vi sender html med

//Her er eksemplet uden kommentarer for at kunne overskue det lettere, nu med string 'hej'
//istedet for kittens.

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

```


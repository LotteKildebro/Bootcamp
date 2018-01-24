
# Funktioner

Funktioner er en af de mest essentielle byggeklodser i JavaScript, det er en procedure lavet af udsagn som udføre en opgave, eller beregner en værdi. For at bruge en funktion, skal man definere den ved at kalde funktionen.

## Eksempel på en funktions syntax

```javascript 
//man starter en funktion ved at skrive "Function" efterfulgt af funktions navn..
//parameterne eller argumenterne kommer efter funktionsnavnet
Function functionName(parameter, parameter) {
    //kode der bliver udført...
}
//Dette er et funktions kald, der kan man ændre værdierne på argumenterne.
functionName(argument, argument);
```
## Eksempel på hvordan argumenter virker

Hvis vi nu kun kigger på funktionens parameterer, kan vi se at der står 2 værdier a og b. 
Disse værdier kan udskiftes i funktionskaldet hvor der står 22 og 10, så *a = 22 og b = 10*
Dette er smart hvis man har brug for at kunne ændre disse værdier senere.

```javascript
function isNaNogContent(a, b){
    if((a)=="" || (b)=="" || isNaN(a) || isNaN(b)){
        return false;
    }else{
        return 'tal ' + a + ' gange med tal ' + b + ' er lig med ' + a * b;
    }
}

let find = isNaNogContent(22,10);

console.log(find);
```

## return

return statement stopper udførelsen af en funktion og retunere en værdi fra den funktion.

## Eksempel på return syntax
```javascript
return value;
````

var x = myFunction(4, 3); 

function myFunction(a, b) {
    return a * b;   
}    
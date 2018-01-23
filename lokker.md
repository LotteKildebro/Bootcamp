

## Løkker

Løkker/loops er rigtig brugbare hvis du vil kører igennem den samme kode med flere værdier.

forkskellige loops:

1. for 
for loop er oftes den loop vi vil benytte.
denne løkke  kører igennem en blok kode flere gange.
eksempel:

```javascript
for (i = 0; i < 5; i++) {
    text += "tallet er " + i + " ";
}
```
2. while
kører igennem en blok kode, imens en specifik betingelse er sand.

```javascript
while (i < 10) {
    text += "tallet er " + i;
    i++;
}
```

eller med array:

```javascript
var dyr = ["kanin", "hund", "hamster", "kat"];
var i = 0;
var text = "dyret er ";

while (dyr[i]) {
    text += dyr[i] + " ";
    i++;
}
```

3. do/while
kører igennem en blok kode, imens en specifik betingelse er sand mindst én gang.

```javascript 
do {
    text += "tallet er " + i;
    i++;
}
while (i < 10);
```

#forEach
*defination af forEach*
en indbygget funktion der kører igennem hver enkelt element i et array.
forEach() funktionskald virker kun på array elementer med en værdi.

eksempel på syntax:

```javascript 
array.forEach(function(currentValue, index, arr), thisValue)
```
eksempel på funktion:

```javascript
let spil = ['mario', 'sims', 'lol', 'CS'];

spil.forEach(function (navn, index) {
     console.log(navn + " er placeret på " + index + " plads");
});
```




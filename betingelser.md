
# Betingelser

## if - else betingelser

**if** Brug if til at specificere en blok kode som skal udføres, hvis en specifik betingelse er 'true'.
**else** Brug else til at specificere en blok kode som skal uføres, hvis den samme betingelse er 'false'. 
**else if** Brug else if til at specificere en ny betingelse (til at teste om den første betingelse er 'false').

**Syntax**
```javascript
if (betingelsen){
    kode der bliver udført hvis betingelsen er sand...
} else if (betingelsen){
    kode der bliver udført hvis den første betingelse er falsk...
} else {
    kode der bliver udført hvis den første og anden betingelse er falsk...
}
```
**Eksempel**

Her er et eksempel på en if - if else - else syntax med en variabel der hedder drik, jeg har givet
den værdien en string i form af 'danskvand', efterfølgende siger jeg hvis drik = 'danskvand' jamen 
så vil jeg gerne ha' udskrevet 'danskvand er det bedste!', men hvis drik = 'mælk' vil jeg gerne have udskrevet
'mælk er det bedste!' osv. hvis ingen af disse betingelser er opfyldt så skal der udskrives 'undefined er det bedste!'.

```javascript
let drik = 'danskvand';

if (drik = 'danskvand') {
     console.log('danskvand er det bedste!')
 } else if (drik == 'mælk') {
     console.log('mælk er det bedste!')
 } else if (drik == 'cola') {
    console.log('cola er det bedste!')
} else {
   console.log('undefined er det bedste!')
}
```

## Switch 
Vi vil gerne bruge switch til at vælge en af mange blok koder som skal udføres.

**Syntax**

```javascript
switch(expression) {
    case n:
        code block
        break;
    case n:
        code block
        break;
    default:
        code block
}
```
**Syntax med kode der skal udføres**

Her ser vi på et eksempel som er magen til *if - else* eksemplet, her bruger vi bare switch istedet, men resultatet er det samme.

```javascript
let drik = "danskvand";
switch (drik) {
   case "danskvand":
      console.log(drik, 'er det bedste!');
      break;
   case "mælk":
      console.log(drik, 'er godt i kaffen!');
      break;
   case "cola":
      console.log(name, 'er godt om lørdagen!');

   case "vand":
      console.log(name, 'er lækkert!');
      break;
   default:
      console.log(name, 'er ukendt');
      break;
}
```


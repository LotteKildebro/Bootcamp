
//----------Øvelse 2------------
//Skriv en betinget sætning der udskriver 'hej verden' i konsollen, hvis variablens værdi er sand
//Ret variablens værdi til false og se om der logges i konsollen.

// let boolean = true;

// if (!boolean){
//    console.log('hej verden');
// }

// let boolean = false;

// if (boolean){
//    console.log('hej verden');
// }

//--------Øvelse 3----------------
//Opret en variabel og tildel den et tilfældigt tal mellem 0 og 10
//Udskriv variablens værdi med en console.log
//Opret en if-sætning der udskriver 'højere end 5' hvis variablens værdi er højere end 5
//Tilføj en else-blok til if-sætningen, hvor der udskrives 'lavere end 5'

// let tal = Math.floor(Math.random() * 11);
// console.log(tal);

// if (tal > 5){
//    console.log('mere end fem')
// }
// else {
//    console.log('mindre end fem')
// }
//---------Øvelse 4----------------
//Løs samme problem som i øvelse 2, men benyt en ternary operator i stedet for if - else

// let MereEndFem = true;
// let result = MereEndFem ? "mere end fem" : "mindre end fem";
// console.log(result);

//--------Øvelse 5-----------------
//Opret en variabel med navnet på din favorit læskedrik
//Opret en if - else if - else struktur hvor du udskriver en selvvalgt tekst, alt efter hvad variablen indeholder. 
//(f.eks kunne der udskrives "Cola er sødt", hvis variablen indeholder "cola")
//Lav mindst 2 else if blokke

// let drik = 'danskvand';

// if (drik = 'danskvand') {
//     console.log('danskvand er det bedste!')
// } else if (drik == 'mælk') {
//     console.log('mælk er det bedste!')
// } else if (drik == 'cola') {
//     console.log('cola er det bedste!')
// } else {
//     console.log('undefined er det bedste!')
// }

//-------Øvelse 6------------------
//--*Her har jeg gjort det samme som i opgave 5 men bare med en switch - case

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

//-------Øvelse 7------------------

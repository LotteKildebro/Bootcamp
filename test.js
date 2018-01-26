
//Eksempel på callback
//
//Her kalder man funktionen tilføjHtml i funktionen udskrivData.
// function tilføjHtml(tekst) {
//     console.log('<p>' + tekst + '</p>');
// }

// function udskrivData(tekst){

// tilføjHtml(tekst);

// }

// udskrivData("hej verden");

//---------promises------------
// => fatarrow definere en anynom funktion

//throw new error 

// let firstPromise = new Promise(function (resolve, reject) {
//     resolve('success');
//  });
 
//  firstPromise.then(function (successMessage) {
//     console.log(successMessage);
//  });

// function thirdPromise(someBoolValue) {
//     return new Promise((resolve, reject) => {
//        setTimeout(() => {
//           if (someBoolValue) {
//              resolve('Denne besked kommer fra "resolve"');
//           } else {
//              reject(new Error('Det var ikke en succes, dette kommer fra "reject"'));
//           }
//        }, 2000);
//     })
//  }
 
//  thirdPromise(true)
//     .then(success => {
//        console.log(success);
//        //throw new Error('lad os sige noget gik galt!');
//        return 'Information sendes videre';
//     }).then(nextSuccess => {
//        console.log(nextSuccess);
//     }).catch((error) => {
//        console.log(error);
//     })


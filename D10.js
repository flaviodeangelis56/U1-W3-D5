/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A 
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
// const sum = 10 + 20;
// console.log(sum);
/* ESERCIZIO B 
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
// const random = Math.floor(Math.random() * 21);
// console.log(random);
/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
// const me = {
//   name: "flavio",
//   surname: "de angelis",
//   age: 20,
// };
// console.log(me);
/* ESERCIZIO D 
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
// delete me.age;
// console.log(me);
/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
// me.skills = ["HTML", "CSS"];
// console.log(me);
/* ESERCIZIO F 
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
// me.skills.push("JavaScript");
// console.log(me);
/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
// me.skills.pop();
// console.log(me);
// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
// const dice = function () {
//   const random = Math.floor(Math.random() * 6 + 1);
//   return random;
// };
// console.log(dice());
/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
// const whoIsBigger = function (n1, n2) {
//   if (n1 >= n2) {
//     return n1;
//   } else if (n2 > n1) {
//     return n2;
//   }
// };
// console.log(whoIsBigger(20, 10));
/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
// const splitMe = function (str) {
//   let arrySplit = str.split(" ");
//   return arrySplit;
// };
// console.log(splitMe("pippo come l'INPS"));
/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
// const deleteOne = function (str, bool) {
//   if (bool === true) {
//     return str.substring(1);
//   } else if (bool === false) {
//     let newStr = str.slice(0, -1);
//     return newStr;
//   }
// };
// console.log(deleteOne("pippo come l'INPS", false));
// console.log(deleteOne("pippo come l'INPS", true));
/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
// const onlyLetters = function (str) {
//   let letterOnly = str.replace(/[0-9]?/g, "");
//   return letterOnly;
// };
// console.log(onlyLetters("abcde12kkasksdd45"));
/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
// const isThisAnEmail = function (email) {
//   const aPosition = email.indexOf("@");
//   const dotPosition = email.lastIndexOf(".");
//   return aPosition > 0 && dotPosition > aPosition + 1 && dotPosition < email.length - 1;
// };
// console.log(isThisAnEmail("emailtest@gmail.com"));
/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
// const whatDayIsIt = function () {
//   const now = new Date();
//   const dayOfWeek = now.getDay();
//   if (dayOfWeek === 0) {
//     const sunday = "Sunday";
//     return sunday;
//   } else if (dayOfWeek === 1) {
//     const monday = "Monday ";
//     return monday;
//   } else if (dayOfWeek === 2) {
//     const tuesday = "Tuesday";
//     return tuesday;
//   } else if (dayOfWeek === 3) {
//     const wednesday = "Wednesday";
//     return wednesday;
//   } else if (dayOfWeek === 4) {
//     const thursday = "Thursday";
//     return thursday;
//   } else if (dayOfWeek === 5) {
//     const friday = "Friday ";
//     return friday;
//   } else if (dayOfWeek === 6) {
//     const saturday = "Saturday";
//     return saturday;
//   }
// };
// console.log(whatDayIsIt());
/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
// const rollTheDices = function (num) {
//   let yourRoll = {};
//   let values = [];
//   for (let i = 0; i < num; i++) {
//     let roll = dice();
//     values.push(roll);
//   }
//   yourRoll.values = values;
//   let numSum = 0;
//   for (let i = 0; i < values.length; i++) {
//     numSum = numSum + values[i];
//   }
//   yourRoll.sum = numSum;
//   console.log(yourRoll);
// };
// rollTheDices(3);
/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
// var _MS_PER_DAY = 1000 * 60 * 60 * 24;

// let date_diff_indays = function (myDate) {
//   date1 = new Date(myDate);
//   date2 = new Date();
//   return Math.floor(
//     (Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate()) -
//       Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate())) /
//       (1000 * 60 * 60 * 24)
//   );
// };
// console.log(date_diff_indays("2023-07-04"));

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
// const isTodayMyBirthday = function () {
//   const now = new Date();
//   const mese = now.getMonth();
//   const giorno = now.getDate();
//   if (mese === 9 && giorno === 21) {
//     return true;
//   } else {
//     return false;
//   }
// };
// console.log(isTodayMyBirthday());
// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];
/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
  */
// const deleteProp = function (obj, str) {
//   delete obj[str];
//   return obj;
// };

// console.log(
//   deleteProp(
//     {
//       Title: "The Lord of the Rings: The Fellowship of the Ring",
//       Year: "2001",
//       imdbID: "tt0120737",
//       Type: "movie",
//       Poster:
//         "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
//     },
//     "Type"
//   )
// );
/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
// const newestMovie = function () {
//   let result = 0;
//   for (let i = 0; i < movies.length; i++) {
//     if (parseInt(movies[i].Year) > result) {
//       result = parseInt(movies[i].Year);
//     }
//   }
//   return result;
// };
// console.log(newestMovie());
/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
// const countMovies = function () {
//   const HowManyMovies = movies.length;
//   return HowManyMovies;
// };
// console.log(countMovies());
/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
// const onlyTheYears = function () {
//   return movies.map(elem => elem.Year);
// };
// console.log(onlyTheYears());
/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
// const onlyInLastMillennium = function () {
//   let result = 2000;
//   let lastMillennium = [];
//   for (let i = 0; i < movies.length; i++) {
//     if (parseInt(movies[i].Year) < result) {
//       lastMillennium.push(movies[i]);
//     }
//   }
//   return lastMillennium;
// };
// console.log(onlyInLastMillennium());
/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
// const sumAllTheYears = function () {
//   let result = 0;

//   for (let i = 0; i < movies.length; i++) {
//     result = result + parseInt(movies[i].Year);
//   }
//   return result;
// };
// console.log(sumAllTheYears());
/* ESERCIZIO 17 
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
// const searchByTitle = function (title) {
//   let titleYouSearch = [];
//   for (let i = 0; i < movies.length; i++) {
//     if (movies[i].Title.toLowerCase().includes(title.toLowerCase())) {
//       titleYouSearch.push(movies[i]);
//     }
//   }
//   return titleYouSearch;
// };
// console.log(searchByTitle("Avengers"));
/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
// const searchAndDivide = function (str) {
//   const onjResult = {
//     match: [],
//     unmatch: [],
//   };
//   for (let i = 0; i < movies.length; i++) {
//     if (movies[i].Title.toLowerCase().includes(str.toLowerCase())) {
//       onjResult.match.push(movies[i]);
//     } else {
//       onjResult.unmatch.push(movies[i]);
//     }
//   }
//   return onjResult;
// };
// console.log(searchAndDivide("avengers"));
/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
// const removeIndex = function (num) {
//   movies.splice(num, 1);
//   return movies;
// };
// console.log(removeIndex(4));
// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
// const container = function () {
//   elemConteiner = document.getElementById("container");
// };
/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
// const td = function () {
//   allTd = document.querySelectorAll("td");
// };
/* ESERCIZIO 22 
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
// const allTdText = function () {
//   allTd = document.querySelectorAll("td");
//   for (let i = 0; i < allTd.length; i++) {
//     console.log(allTd[i].innerText);
//   }
// };
/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
// const addBackgroundColor = function () {
//   const allLink = document.querySelectorAll("link");
//   for (let i = 0; i < allLinkink.length; i++) {
//     const link = allLink[i];
//     link.style.backgroundColor = "red";
//   }
// };
/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
// const addLiToUl = function () {
//   const ul = document.getElementById("myList");
//   const li = document.createElement(li);
//   ul.appendChild(li);
// };
/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
// const resetUl = function () {
//   const ul = document.getElementById("myList");
//   const ulChild = ul.children;
//   const array = Array.from(ulChild);
//   console.log(array);
//   for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
//     array[i].remove();
//   }
// };
// resetUl();
/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
// const addClassTest = function () {
//   const tr = document.querySelectorAll("tr");
//   for (let i = 0; i < tr.length; i++) {
//     tr[i].classList.add("test");
//   }
// };
// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/
// const halfTree = function (num) {
//   let variabile = "";
//   for (let i = 0; i < num; i++) {
//     variabile = variabile + "*";
//     console.log(variabile);
//   }
// };
// halfTree(3);
/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/
// const tree = function (num) {
//   for (let i = 0; i < num; i++) {
//     let ast = "";
//     let addSpace = num - i;
//     if (i === 0) {
//       ast += " ".repeat(addSpace + 1) + "\n";
//     }
//     ast += " ".repeat(addSpace + 1);
//     let zero = 2 * i + 1;
//     ast += "*".repeat(zero);
//     console.log(ast);
//   }
// };
// tree(3);
/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
  */
// const isItPrime = function (num) {
//   if (num <= 1) {
//     console.log("isn't prime");
//     return false;
//   }
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       console.log("isn't Prime");
//       return false;
//     } else {
//       console.log("is Prime");
//       return true;
//     }
//   }
// };
// isItPrime(7);

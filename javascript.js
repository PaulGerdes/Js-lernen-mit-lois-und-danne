//Aufgabe 1

function test1() {
  var var1 = "test 1"; //variable mit Var definieren
  console.log(var1);
  var var1 = "test 2"; // variable mit Var außerhalb einer Funktion/Block(Public) neu definieren obwohl sie schon erstellt ist
  console.log(var1);
  if (true) {
    var var1 = "test 3"; //variable mit Var in einer Funktion/Block neu definieren
    console.log(var1);
  }

  // Var Variablen kann man immmer und überall neu definieren
  let test2 = "test 4"; //variable mit Var definieren
  console.log(test2);
  //let test2 = "test 5"; // variable mit let außerhalb einer Funktion/Block(Public) kann man nicht neu definieren wenn sie schon erstellt sind
  //console.log(test2);
  if (true) {
    let test2 = "test 5"; //variable mit let in einer Funktion/Block neu definieren geht jeddoch werden sie dann nur local in dem Block neu definiert und nicht Public
    console.log(test2);
  }
  console.log(test2);

  const test3 = "test 6"; // Const definieren
  // const test3 = "hello2"; // Const variablen kann man nur einmal definieren
  console.log(test3);
  if (true) {
    const test3 = "test 7 "; // Außer in einr funktion/ Block kann man diese noch 1 mal neu defnieren dies gilt dann aber auch nur für den Block
    console.log(test3);
  }
  console.log(test3);

  const test4 = {
    message: "test 8",
  };
  console.log(test4.message); // Man kann const Variablen nur um diefnieren wenn man ein Object benutzt als inhalt der Variable
  test4.message = "test 9";
  console.log(test4.message);
}

//Aufgabe 2

function test2() {
  let test5;
  let test6;
  let test7;
  test5 = "hallo"; // Das ist ein String da jeder String nur aus buchstaben bestehen kann und zeichen also alles außer zahlen
  console.log(test5);
  test6 = "12"; // Number ist der Variablen typ für alle Zahlen
  console.log(test6);
  test7 = true;
  console.log(test7); // Bolean ist der Variablen typ für die Werte true und false
}

// Aufgabe 3

function test3() {
  const id3 = {
    // Variable id3 declariert als const mit einem Object
    marke: "VW", // Object enthält mehrere werte welche jetzt einzelt ausgelesen und bearbeitet werden können
    model: "ID3",
  };
  console.log(id3.marke, id3.model);
  id3.marke = "BMW"; // ändern eines einzelnes objects in id3
  console.log(id3.marke);
}

//Aufgabe 4

function test4() {
  const Auto = ["bmw", "Audi", "VW"]; // Array erstellen
  console.log(Auto);

  Auto[4] = "Porsche"; // Manuell dem Array etwas hinzufügen
  console.log(Auto[4]);
  Auto[4] = "Ferrari"; // mit der selben Art ein Array inhalt ändern
  Auto[3] = "Mclaren";
  schnellesAuto = Auto[4]; // Auf Array zugreifen und auslesen
  console.log(schnellesAuto);

  AlleAuto = Auto.toString(); // Array in einen String Konvertieren
  console.log(AlleAuto);

  AnzahlAutos = Auto.length; //Zeigt die Anzahl aller Autos in dem Array
  console.log(AnzahlAutos);
  // Mit Auto.sort; kann man das Array Sortieren

  let schnellesauto = Auto[Auto.length - 1]; // letzdes object des Array auswählen
  console.log(schnellesauto);

  Auto.push("Mercedes");
  console.log(Auto);
}

// Aufgabe 5
function test5() {
  const lolis = [];
  for (let i = 0; i <= 10; i++) {
    // etwas bestimmt lang ausführen
    lolis.push(i);
    console.log(lolis);
  }

  var j = 0; //mit while kann man wie der name shcon sagt einee schleife so lange ausführen solange die Vorraussetzungen erfüllt sind
  while (j < 10) {
    j++;
    console.log("test");
  }
}

// Aufgabe 6
function test6() {
  const lolis = [];
  for (let i = 0; i <= 10; i++) {
    // etwas bestimmt lang ausführen
    lolis.push(i);
    console.log(lolis);
  }

  let x = amitBrechnen(lolis[5], lolis[7]); // funktion um die Zahlen 10,5 zu verrechnen aber in einer funktion
  console.log(x);

  function amitBrechnen(a, b) {
    return a + b;
  }

  let zahl = 5; // rechner um eine zahl durch sich slebst zu rechnen
  function durchsichselber(zahl) {
    return zahl / zahl;
  }
  let ergebnis = durchsichselber(zahl);
  console.log(ergebnis);
}

// Aufgabe 7
function test7() {
  let zeigen = function () {
    console.log("unsichtbare Funktion-- Anonymous function");
  };
  zeigen();

  setTimeout(function () {
    // diese function hängt eine 1secunde hinterher (delay)
    console.log("Execute later after 1 second");
  }, 1000);

  let person = {
    // Anonyme Funktion um die beiden objekte zusammen zu führen und auszugeben
    firstName: "danne",
    lastName: "loius",
  };

  (function () {
    console.log(person.firstName + " " + person.lastName);
  })(person);
}

// Aufgabe 8

function test8() {
  let addieren = function (a, b) {
    return a + b;
  };
  let ergebnis2 = addieren(5, 6);
  console.log(ergebnis2); // oder  console.log(addieren(5, 6));

  const dividieren = (a, b) => a - b; // Arrow function
  console.log(dividieren(6, 7));
}

// Aufgabe 10,11 und 12

function test9() {
  //classes
  class Auto {
    // Klasse Definieren
    constructor(marke, model, price) {
      // Constructor änlich wie parameter bei funktionen
      this.marke = marke;
      this.model = model;
      this.price = price;
    }

    showPrice() {
      console.log(`Price of ${this.marke} ${this.model} is ${this.price}`);
    }
  }

  const car = new Auto("Mercedes", "C63", "$300000"); // funktion show Price aus der Klasse ausführen aber mit den Parametern von der Funktion ( constructor zum einsetzen)

  car.showPrice();

  // Static Methods

  class Stift {
    constructor(art, preis) {
      this.art = art;
      this.preis = preis;
    }

    StiftWerbung() {
      console.log(
        "Der " +
          this.art +
          "Stift ist ein sehr günstiger stift mit " +
          this.preis +
          " €"
      );
    }
  }
  const stift1 = new Stift("supermaler", "3");
  stift1.StiftWerbung();

  // Class Inheritance

  class Filzstifte extends Stift {
    constructor(art, preis, dicke) {
      super(art, preis); // Super muss ein Parameter haben. Dieser gibt an welche Parameter aus dem Parent Constructor importiert werden sollen
      this.dicke = dicke;
    }

    filzstiftWerbung() {
      console.log(
        "Der " +
          this.art +
          "Stift ist ein sehr günstiger stift mit " +
          this.preis +
          " €. Er ist " +
          this.dicke +
          " dick"
      );
    }
  }
  const Filzstift1 = new Filzstifte("filzstift", "9", "10cm");
  Filzstift1.filzstiftWerbung();
}

// Promises

function test10() {
  let myPromise = new Promise(function (myResolve, myReject) {
    let x = 0;

    // some code (try to change x to 5)

    if (x == 0) {
      myResolve("OK");
    } else {
      myReject("Error");
    }
  });

  myPromise.then(
    function (value) {
      console.log(value);
    },
    function (error) {
      console.log(error);
    }
  );
}

// Async functions

function test11() {
  async function myFunction() {
    throw new Error();
  }
  myFunction()
    .then(function (value) {
      console.log(value);
    })
    .catch(() => console.log("ERROR"));

  async function f() {
    // Das ist das selbe wie die funktion unten
    return 1;
  }

  f().then(alert); // 1

  async function f() {
    // Das ist das selbe wie die funktion oben
    return 1;
  }

  f().then(alert); // 1
}

// HTTP requests

function test12() {
  // Get
  const testApi = [];
  const url = "https://jsonplaceholder.typicode.com/posts";
  fetch(url)
    .then((response) => response.json())
    .then((posts) => {
      console.log(posts.map((post) => post.title).join(", "));
    });

  //Post
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 5,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));

  //put

  fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PUT",
    body: JSON.stringify({
      id: 1,
      title: "foo",
      body: "bar",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));

  //Patch

  fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PATCH",
    body: JSON.stringify({
      title: "foo",
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));

  // Delete

  fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE",
  });

  // Filtern
  fetch("https://jsonplaceholder.typicode.com/posts?userId=1") // Filtert die Recoursen nach den usern
    .then((response) => response.json())
    .then((json) => console.log(json));

  // Filtern in Children recoursen
  fetch("https://jsonplaceholder.typicode.com/posts/1/comments") // 1/comments ist das gleiche wie /comments?postId=1
    .then((response) => response.json())
    .then((json) => console.log(json));
}

function Bildgetten() {
  const Bildinfos = [];
  fetch("https://jsonplaceholder.typicode.com/photos")
    .then((response) => response.json())
    .then((posts) => {
      console.log(posts.map((post) => post.url).join(", "));
    });
}

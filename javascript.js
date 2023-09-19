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
    Marke: "VW", // Object enthält mehrere werte welche jetzt einzelt ausgelesen und bearbeitet werden können
    Model: "ID3",
  };
  console.log(id3.Marke, id3.Model);
  id3.Marke = "BMW"; // ändern eines einzelnes objects in id3
  console.log(id3.Marke);
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

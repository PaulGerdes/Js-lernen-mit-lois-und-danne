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

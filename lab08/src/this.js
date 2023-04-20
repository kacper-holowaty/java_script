// Przetestuj poniższy kod i odpowiedz na pytania

// 1. Czym jest this?
/* 
Jest to zmienna kontekstowa, odnosi się do obiektu, w którym jest wywołana. 
Jeśli jest wywoływana bez odniesienia do obiektu, to odnosi się do globalnego obiektu
*/ 

// 2. Do czego się odwołuje w każdym z przypadków?
/* 
Może odnosić się do obiektu, w któym zostało wywołane, albo jeśli jest wywołana bezpośrednio
(bez odwołania do obiektu), to odnosi się do globalnego obiektu (window w przeglądarkach.)
*/ 
// 3. Co wydrukuje w konsoli poniższy kod w każdym z przykładów? 

// 4. Jaki scope ma arrow function? (Na podstawie przykładów 3. i 4.)
/*
W arrow function, wartość this jest ściśle wiązana z wartością this w kontekście, w którym funkcja została utworzona.
W przypadku zwykłych funkcji, wartość this zależy od sposobu wywołania funkcji.
Arrow function nie ma swojego własnego obiektu this. Odwołuje się do wartości this z kontekstu, w którym został utworzona.
*/
// ------------
// Przykład 1.
// ------------

function testThis() {
  console.log(this);
}

// testThis();
/*
<ref *1> Object [global] {
  global: [Circular *1],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  performance: Performance {
    nodeTiming: PerformanceNodeTiming {
      name: 'node',
      entryType: 'node',
      startTime: 0,
      duration: 64.61909997463226,
      nodeStart: 0.7457000017166138,
      v8Start: 3.3608999848365784,
      bootstrapComplete: 49.25119996070862,
      environment: 21.98939996957779,
      loopStart: -1,
      loopExit: -1,
      idleTime: 0
    },
    timeOrigin: 1681980100904.811
  },
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  }
}
*/

function testThis2() {
  "use strict";
  console.log(this);
}

// testThis2(); //undefined


// ------------
// Przykład 2.
// ------------

const person = {
  name: "Oscar Wilde",
  print() {
    console.log(this.name);

    function a() {
      console.log(this);
    }
    a();
  },
};

// person.print();
//Oscar Wilde
//obiekt globalny this


// ------------
// Przykład 3.
// ------------

const person3 = {
  name: "Arthur Conan Doyle",
  print() {
    console.log(this);
    const a = () => {
      console.log(this);
    };
    a();
  },
};

// person3.print();
// { name: 'Arthur Conan Doyle', print: [Function: print] }
// { name: 'Arthur Conan Doyle', print: [Function: print] } => funkcja strzałkowa zwraca to w takiej postaci
/* funkcja jako: 
 function () {
  console.log(this);
 }
zwraca obiekt globalny this
*/

// ------------
// Przykład 4.
// ------------

const person4 = {
  name: "Jan Kowalski",
  print: function() {
    const details = {
      age: 24,
      print1: function() {
        'use strict';
        console.log(this);
      },
      print2: () => {
        'use strict';
        console.log(this);
      }
    }
    details.print1(); // { age: 24, print1: [Function: print1], print2: [Function: print2] }
    details.print2(); // { name: 'Jan Kowalski', print: [Function: print] }
  }
}

// person4.print();
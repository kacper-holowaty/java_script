const axios = require("axios"); 

// Napisz funkcje

// const checkTime = (funTab) => {
//   // Uzupełnij
// };
// spełniającą poniższe warunki:

// funkcja przyjmuje tablice funkcji asynchronicznych tj. funTab zawierającą stałą liczbę 5-ciu zapytań (w dowolnej kolejności):
// GET https://jsonplaceholder.typicode.com/photos
// POST https://jsonplaceholder.typicode.com/posts z obiektem:
// {
//   title: 'Test',
//   body: 'Lorem ipsum',
//   userId: 2
// }
// GET https://jsonplaceholder.typicode.com/users/{id} po dowolnym id (zakres 1-10)
// GET https://jsonplaceholder.typicode.com/todos
// PUT https://jsonplaceholder.typicode.com/posts/{id} po dowolnym id (zakres 1-100) z obiektem:
// 
//   id: id,
//   userId: 3,
//   title: 'New title',
//   body: 'New body'
// }
// funkcja powinna wykonywać dwa scenariusze (oba powinny wykonywać się jednocześnie, muszą być osobnymi procesami)
// (a) funkcje przekazane jako parametr będą wykonywane jedna po drugiej (tzn. w momencie zakończenia wykonywania 
// funkcji pierwszej, rozpoczyna się wykonanie funkcji drugiej)
// (b) wszystkie funkcje wykonywane są równocześnie
// co sekundę (lub inną jednostkę czasu) powinna zostać wypisana informacja, ile czasu upłynęło od rozpoczęcia działania programu
// kiedy jeden ze scenariuszy zakończy swoje działanie w konsoli powinien zostać wypisany odpowiedni komunikat z informacją,
// po ilu np. sekundach scenariusz zakończył swoje działanie
// na koniec funkcja checkTime powinna wyświetlić tablice dwóch liczb zawierającą czasy zakończenia działania każdego ze scenariuszy
// Przykładowe działanie programu:

// checkTime(funTab);
// Start
// 1
// Zakończono działanie: scenariusz b)
// 2
// 3
// 4
// Zakończono działanie: scenariusz a)
// Koniec
// Czas działania: [1, 4]

const id = Math.floor(Math.random() * 10)+1
const idPost = Math.floor(Math.random() * 100)+1
const ax1 = () => axios.get("https://jsonplaceholder.typicode.com/photos");
const ax2 = () => axios.post("https://jsonplaceholder.typicode.com/posts",{
        title: 'Test',
        body: 'Lorem ipsum',
        userId: 2
    }
);
const ax3 = () => axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
const ax4 = () => axios.get("https://jsonplaceholder.typicode.com/todos")
const ax5 = () => axios.put(`https://jsonplaceholder.typicode.com/posts/${idPost}`,{ 
        id: idPost,
        userId: 3,
        title: 'New title',
        body: 'New body'
    }
);
const funTab = [ax1,ax2,ax3,ax4,ax5];
const checkTime = (funTab) => {
    console.log("Start");
    const wynik = [];
    let liczbaSekund = 0;
    
    const interval = setInterval(() => {
        liczbaSekund++
        console.log(liczbaSekund);
    }, 1000);
    
    //a
    funTab[0]().then(res => {
        funTab[1]().then(res => {
            funTab[2]().then(res => {
                funTab[3]().then(res => {
                    funTab[4]().then(res => {
                        console.log("Zakończenie działania: scenariusz a)");
                        wynik.push(liczbaSekund)
                        if (wynik.length === 2) {
                            console.log("Koniec");
                            console.log(`Czas działania: [${wynik.join(", ")}]`);
                            clearInterval(interval);
                        }
                    })
                })
            })
        })
    })    
    //b
    Promise.all(funTab.map(func => func())).then(res => {
        console.log("Zakończenie działania: scenariusz b)");
        wynik.push(liczbaSekund)

        if (wynik.length === 2) {
            console.log("Koniec");
            console.log(`Czas działania: [${wynik.join(", ")}]`);
            clearInterval(interval);
        }
    })
    
};
checkTime(funTab)
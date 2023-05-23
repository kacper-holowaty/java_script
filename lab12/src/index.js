'use strict';

const axios = require('axios');
/* 
Zadanie 1.1

Stwórz projekt i dołącz do niego bibliotekę axios.

Następnie wykonaj zapytanie metodą GET za pomocą dodanej biblioteki pod następujący url: https://jsonplaceholder.typicode.com/posts
Jako pierwszy callback - sprawdź, czy response jest poprawny (status równy 200). 
Jeśli tak - zwróć response, w przeciwnym wypadku - wypisz błąd w konsoli.
Jako następny callback - użyj destrukcji obiektów, aby wypisać w konsoli zmienną 'data' i 'headers'.
*/
axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    // console.log(response.status);
    if (response.status === 200) return response;
    else {
      console.log(`Błąd! Status jest równy: ${response.status}`);
    } 
  })
  .then(result => {
    const {data, headers} = result;
    console.log(data);
    console.log(headers);
  })
 

/* 
Zadanie 1.2 
Stwórz funkcje, która przyjmuje jako parametr obiekt w postaci:
{
  idUser: (pole typu int)
  title: (pole typu string)
  completed: (pole typu boolean)
}

Następnie wysyła taki obiekt za pomocą funkcji POST z biblioteki axios pod url: https://jsonplaceholder.typicode.com/todos
Jeśli dodanie zakończy się sukcesem - wyświetl w konsoli komunikat 'Dodano' i id dodanego obiektu. W przeciwnym wypadku wypisz błąd.
*/
function wstaw(obj) {
  axios({
    method: 'post',
    url: 'https://jsonplaceholder.typicode.com/todos',
    data: obj
  })
    .then(res => {
      
      if (res.data) console.log('Dodano',res.data.id)
      else console.log('Bład');
    })
}
wstaw({
  idUser: 101,
  title: "nie Lorem Ipsum",
  completed: true
})
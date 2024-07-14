const axios = require('axios');

function pobierz(id) {
    return new Promise((resolve, reject) => {
        if (id <= 10) {
            axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then(response => {
                const {id,name} = response.data
                axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`).then(res => {
                    const posty = res.data.reduce((akum,elem) => {
                        return [...akum,{postId: elem.id,title: elem.title, body: elem.body}]
                    },[])
                    resolve({userId: id, name: name, posts: posty})
                })
            })
        }
        else {
            reject((`Nie znaleziono użytkownika o id ${id}`))
        }
    })

    // tutaj wersja z wyświtlaniem wewnątrz funkcji:
    // axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then(response => {
    //     // console.log(res);
    //     const {id,name} = response.data
    //     axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`).then(res => {
    //         // console.log(res.data);
    //         // console.log(res.data);
    //         const posty = res.data.reduce((akum,elem) => {
    //             // if (elem.id) elem.postId = elem.id
    //             return [...akum,{postId: elem.id,title: elem.title, body: elem.body}]
    //         },[])
    //         console.log({userId: id, name: name, posts: posty})
    //     })
    // }).catch(_ => (`Nie znaleziono użytkownika o id ${id}`))
}
pobierz(Math.floor(Math.random()*50)+1).then(x => console.log(x)).catch(x => console.log(x))
const axios = require('axios');

function wypisz() {
    const losowe = []
    for (let i = 0; i < 5; i++) {
        losowe.push(Math.floor(Math.random()*100))
    }
    let arr = [];
    losowe.forEach(id => {
        const ax1 = axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`) 
        const ax2 = axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`) 
            ax1.then(response => {
                const {title, body} = response.data;
                ax2.then(res => {
                    const comments = res.data.reduce((akum, elem) => {
                        const {name,email,body} = elem;
                        akum.push({name,email,body});
                        return akum
                    },[])
                    
                    arr.push({"entry": {title, body}, "comments": comments})
                    if (arr.length === losowe.length) {
                        console.dir(arr,{depth: null});
                    }
                    
                }) 
            }) 
    })
}
// wypisz()

// Za pomocą Promise.all

function usePromiseAll() {
    const losowe = []
    for (let i = 0; i < 5; i++) {
        losowe.push(Math.floor(Math.random()*100))
    }
    let wynik = [];
    losowe.forEach(id => {
        Promise.all([
            axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`),
            axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        ]).then(res => {
            const [post, comments] = res;
            const {title, body} = post.data
            const komentarze = comments.data.reduce((akum,elem) => {
                const {name,email,body} = elem;
                return [...akum, {name, email, body}]
            },[])
            wynik.push({"entry": {title,body},"comments": komentarze})
            if (losowe.length === wynik.length) {
                console.dir(wynik,{"depth": null})
            }
        })
    });
}
usePromiseAll()
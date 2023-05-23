const axios = require('axios');

function wypisz() {
    const losowe = []
    for (let i = 0; i < 5; i++) {
        losowe.push(Math.floor(Math.random()*100))
    }
    console.log(losowe);
    const res = losowe.forEach(id => {
        return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => {
                // console.log(response.data);
                // console.log();
                axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
                .then(rs => {
                    console.log(response.data);
                    const wynik = response.data((acc,item) => {
                        const a = rs.data.reduce((akum, elem) => {
                            const {name,email,body} = elem;
                            akum.push({name,email,body});
                            return akum
                        },[])
                        // console.log(a);
                        return {...acc, "entry": {
                            "title": item.title, 
                            "body": item.body
                        },"comments": a}
                    },{})
                    console.log(wynik);
                    // console.log(rs.data),
                    // console.log(response.data)
                    
                }) 
                
            })
            // .then(res => console.log(res.comments))  
    })
}
wypisz()
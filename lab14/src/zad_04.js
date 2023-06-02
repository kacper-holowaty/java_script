const axios = require('axios');

class AccountService {
    authenticated = false;
  
    idUser = Math.floor(Math.random() * 10);
  
    user = null;
  
    constructor() {}
  
    // Pobieranie liczby sekund, po jakiej użytkownik powinien zostać zalogowany
    getRandomLoginTime() {
      return (Math.floor(Math.random() * 10) % 5) + 5;
    }
    isAuthorizated() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (this.authenticated === true) {
                    resolve(true)
                } 
                else {
                    resolve(false)
                }
            }, 1000);
        })
    }
    checkIsUserLogin() {
        const interval = setInterval(() => {
            this.isAuthorizated().then(res => {
                if (res === true) {
                    console.log("Użytkownik jest zalogowany");
                    clearInterval(interval)
                }
                else {
                    console.log("Użytkownik nie jest zalogowany");
                }
            })
        }, 1000);
    }
    loginUser() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                this.authenticated = true;
                resolve("Użytkownik został zalogowany");
            }, this.getRandomLoginTime() * 1000);
        })
    }
    getUserDetails() {
        return new Promise((resolve, reject) => {
            axios.get(`https://jsonplaceholder.typicode.com/users/${this.idUser}`).then(res => {
                const {name} = res.data
                resolve("Zostałeś zalogowany jako: "+name);
                this.user = name;
            })
            
        })
    }
    getData() {
        return new Promise((resolve, reject) => {
            const ax1 = axios.get("https://jsonplaceholder.typicode.com/posts")
            const ax2 = axios.get(`https://jsonplaceholder.typicode.com/posts/${this.idUser}/comments`)
            ax1.then(posty => {
                ax2.then(res => {
                    resolve("Pobrano wszystkie posty i komentarze użytkownika: "+this.user);
                })
            })
        })
    }
}
function start() {
    const konto =  new AccountService();
    konto.checkIsUserLogin()
    konto.loginUser().then(res => {
        console.log(res);
        konto.getUserDetails().then(res => {
            console.log(res);
            konto.getData().then(res => console.log(res))
        })
    })
}
start()

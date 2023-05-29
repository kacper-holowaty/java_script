const questionsChatGpt = require('./questions-chat-gpt.js').questionsChatGpt;

// function (tab)
// console.log(questionsChatGpt);
(function (questionsChatGpt) {
    const res = questionsChatGpt.reduce((akum,elem) => {
        // const {question} = elem;
        if (akum[elem.user.name] === undefined) akum[elem.user.name] = [];
        // let elem.count 
        // elem.question ? elem.count += 1 : elem.count
        // elem.count = 0
        const{question} = elem;
        akum[elem.user.name].push({question})
        return akum;
    },{})
    // console.log(res);
    // const pom = 
    const klucze = Object.keys(res)
    // console.log(klucze);
    const pom = klucze.reduce((acc,item) => {
        const reszta = res[item]
        // console.log(reszta);
        const a = reszta.reduce((ak,que) => {
            return {...ak,questions: [que.question]}
        },{})
        acc[item] = a;
        return acc
    },{})
    console.log(pom);
    // const helper = klucze.reduce((akum,elem) => {
    //     const rest = pom[elem]
    //     // console.log(rest);
    //     // const b = rest.reduce((a, el) => {
    //     //     el.count = el.question.length
    //     //     return {...a,count: el.count,questions: el.questions}
    //     // },{})
    //     // akum[elem] = b
    //     // return akum
    // },{}) //tu coś nie działa
    // console.log(helper);
})(questionsChatGpt)
// console.log(policz(questionsChatGpt));

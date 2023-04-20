class Log {
    constructor() {
        this.history = [],
        this.string = "",
        this.write = function(...args) {
            args.forEach((elem) => {
                if (typeof elem === "object") {
                    this.string = this.string + JSON.stringify(elem);
                    this.history.push(JSON.stringify(elem));
                }
                else {
                    this.string = this.string + elem.toString();
                    this.history.push(elem.toString());
                }
            })
            console.log(this.string);
        }
        this.printHistory = function(range) {
            let helper = "";
            let czyBlad = "";
            if (range === undefined) {
                this.history.forEach(elem => {
                    helper = helper + elem + '\n';
                })
            }
            else if (Array.isArray(range) && range.length === 2) {
                if (range[0] < range[1] && range[0] > 0 && this.history.length >= range[1]) {
                    for (let i = range[0]-1; i <= range[1]-1; i++) {
                        if (this.history[i] === undefined) {
                            helper += ""; 
                        }
                        else {
                            helper = helper + this.history[i] + '\n';
                        }
                    }
                }
                else {
                    czyBlad = "BŁĄD!";
                } 
            }
            else {
                czyBlad = "BŁĄD!";
            }
            if (czyBlad !== "") {
                console.log(czyBlad);
            }
            else {
                console.log("\nHISTORIA KOMUNIKATÓW:\n"+helper);
            } 
        }
        this.clearHistory = function() {
            this.history = [];
            this.string = "";
        }
    }
}
const instancjaLog = new Log()
instancjaLog.write("test: ", () => {
    return "komunikat";
})
instancjaLog.printHistory(); // cała historia
instancjaLog.printHistory([1, 5]); // tylko komunikaty od 1 do 5 włącznie
instancjaLog.printHistory([5, 1]); // błąd
instancjaLog.printHistory([2]);
instancjaLog.clearHistory();
instancjaLog.printHistory(); // pusty string
instancjaLog.write("dodaj mnie",13)
instancjaLog.write(() => {
    return "komunikat";
}, "XD", 7, {age: 13, name: "Zosia"})
instancjaLog.printHistory();
instancjaLog.printHistory([1, 4]);
instancjaLog.clearHistory();
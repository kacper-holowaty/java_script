class Log {
    constructor() {
        this.write = function(...args) {
            console.log(args.toString());
        }
    }
}
const instancjaLog = new Log()
instancjaLog.write("test: ", () => {
    return "komunikat";
  })
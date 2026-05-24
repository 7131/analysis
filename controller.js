// Controller class
class Controller {
    #facade;
    #patternText;
    #resultArea;
    #prev = "";

    // constructor
    constructor() {
        window.addEventListener("load", this.#initialize.bind(this));
    }

    // initialize the private fields
    #initialize(e) {
        // DOM elements
        this.#facade = new jmotion.Facade("#board");
        this.#patternText = document.getElementById("pattern");
        this.#resultArea = document.getElementById("result");
        const analyze = document.getElementById("analyze");
        const start = document.getElementById("start");
        const stop = document.getElementById("stop");

        // button events
        analyze.addEventListener("click", this.#analyze.bind(this));
        start.addEventListener("click", this.#start.bind(this));
        stop.addEventListener("click", this.#stop.bind(this));

        // analyze the query string
        const params = new URLSearchParams(window.location.search.toLowerCase());
        if (params.has("pattern")) {
            this.#patternText.value = params.get("pattern");
            const run = params.get("run");
            if (run == "yes" || run == "true") {
                this.#start(e);
            } else {
                this.#analyze(e);
            }
        }
    }

    // "Analyze" button process
    #analyze(e) {
        // initialize
        this.#stop(e);
        this.#resultArea.textContent = "";
        this.#resultArea.classList.remove("error");
        this.#prev = this.#patternText.value;

        // siteswap analysis
        const result = jmotion.Siteswap.analyze(this.#prev);
        if (result.valid) {
            this.#setResult(result);
        } else {
            this.#resultArea.textContent = result.message;
            this.#resultArea.classList.add("error");
        }
    }

    // "Start" button process
    #start(e) {
        // validate input text
        if (this.#patternText.value != this.#prev) {
            this.#analyze(e);
        }

        // start
        const message = this.#facade.startJuggling(this.#patternText.value);
        if (message != "") {
            this.#resultArea.textContent = message;
            this.#resultArea.classList.add("error");
        }
    }

    // "Stop" button process
    #stop(e) {
        this.#facade.stopJuggling();
    }

    // write the result string
    #setResult(result) {
        // create DOM elements
        const head = document.createElement("div");
        const balls = document.createElement("div");
        const period = document.createElement("div");
        const state = document.createElement("div");
        this.#resultArea.appendChild(head);
        this.#resultArea.appendChild(balls);
        this.#resultArea.appendChild(period);
        this.#resultArea.appendChild(state);

        // display the results
        head.textContent = "Valid";
        balls.textContent = `balls: ${result.count}`;
        period.textContent = `period: ${result.period}`;
        state.textContent = `state: ${result.state.join(" ")}`;
    }

}

// start the controller
new Controller();


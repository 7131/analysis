// Controller class
const Controller = function() {
    window.addEventListener("load", this._initialize.bind(this), false);
}

// Controller prototype
Controller.prototype = {

    // initialize the private fields
    "_initialize": function(e) {
        // DOM elements
        this._facade = new jmotion.Facade("#board");
        this._patternText = document.getElementById("pattern");
        this._resultArea = document.getElementById("result");
        const analyze = document.getElementById("analyze");
        const start = document.getElementById("start");
        const stop = document.getElementById("stop");

        // button events
        analyze.addEventListener("click", this._analyze.bind(this), false);
        start.addEventListener("click", this._start.bind(this), false);
        stop.addEventListener("click", this._stop.bind(this), false);

        // analyze the query string
        const params = new URLSearchParams(window.location.search.toLowerCase());
        if (params.has("pattern")) {
            this._patternText.value = params.get("pattern");
            const run = params.get("run");
            if (run == "yes" || run == "true") {
                this._start(e);
            } else {
                this._analyze(e);
            }
        }
        this._prev = "";
    },

    // "Analyze" button process
    "_analyze": function(e) {
        // initialize
        this._stop(e);
        this._resultArea.innerHTML = "";
        this._resultArea.className = "";
        this._prev = this._patternText.value;

        // siteswap analysis
        const result = jmotion.Siteswap.analyze(this._prev);
        if (result.valid) {
            this._setResult(result);
        } else {
            this._resultArea.innerHTML = result.message;
            this._resultArea.className = "error";
        }
    },

    // "Start" button process
    "_start": function(e) {
        // validate input text
        if (this._patternText.value != this._prev) {
            this._analyze(e);
        }

        // start
        const message = this._facade.startJuggling(this._patternText.value);
        if (message != "") {
            this._resultArea.innerHTML = message;
            this._resultArea.className = "error";
        }
    },

    // "Stop" button process
    "_stop": function(e) {
        this._facade.stopJuggling();
    },

    // write the result string
    "_setResult": function(result) {
        // create DOM elements
        const head = document.createElement("div");
        const balls = document.createElement("div");
        const period = document.createElement("div");
        const state = document.createElement("div");
        this._resultArea.appendChild(head);
        this._resultArea.appendChild(balls);
        this._resultArea.appendChild(period);
        this._resultArea.appendChild(state);

        // display the results
        head.innerHTML = "Valid";
        balls.innerHTML = "balls: " + result.count;
        period.innerHTML = "period: " + result.period;
        state.innerHTML = "state: " + result.state.join(" ");
    },

}

// start the controller
new Controller();


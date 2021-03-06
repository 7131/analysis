// Controller class
var Controller = function() {
    // fields
    this._prev = "";
    this._parser = new Parser(Grammar, Converter);
    this._validator = new Validator();

    // events
    window.addEventListener("load", this._initialize.bind(this), false);
}

// Controller prototype
Controller.prototype = {

    // initialize the private fields
    "_initialize": function() {
        // DOM elements
        this._patternText = document.getElementById("pattern");
        this._analyzeButton = document.getElementById("analyze");
        this._startButton = document.getElementById("start");
        this._stopButton = document.getElementById("stop");
        this._resultArea = document.getElementById("result");
        this._messageArea = document.getElementById("message");

        // button events
        this._analyzeButton.addEventListener("click", this._analyze.bind(this), false);
        this._startButton.addEventListener("click", this._start.bind(this), false);
        this._stopButton.addEventListener("click", this._stop.bind(this), false);

        // JuggleMaster
        var board = document.getElementById("board");
        board.width = board.clientWidth;
        board.height = board.width;
        this._jmj = new Jmj({ "canvas": board });
    },

    // "Analyze" button process
    "_analyze": function(e) {
        // initialize
        this._stop(e);
        this._validator.reset();
        this._prev = this._validator.toSmall(this._patternText.value);
        this._resultArea.innerHTML = "";

        // lexical and syntax analyze
        var result = this._parser.tokenize(this._prev);
        if (result.tokens == null) {
            this._setError("unknown character(s)", result.valid, result.invalid);
            return;
        }
        result = this._parser.parse(result.tokens);
        if (result.tree == null) {
            this._setError("syntax error", result.valid, result.invalid);
            return;
        }
        this._setResult(result.tree);
    },

    // "Start" button process
    "_start": function(e) {
        // validate input text
        this._messageArea.innerHTML = "";
        if (this._patternText.value != this._prev) {
            this._analyze(e);
        }
        if (this._validator.pattern == "") {
            return;
        }

        // start
        var obj = { "siteswap": this._validator.pattern, "showSiteswap": false };
        if (!this._jmj.startJuggling(obj)) {
            this._messageArea.innerHTML = "JuggleMaster error";
            this._messageArea.className = "error";
        }
    },

    // "Stop" button process
    "_stop": function(e) {
        this._jmj.stopJuggling();
    },

    // write the error string
    "_setError": function(title, valid, invalid) {
        // does the valid text exist?
        if (0 < valid.length) {
            valid = "OK: " + valid;
            invalid = "NG: " + invalid;
        }

        // write to the DOM elements
        var head = document.createElement("div");
        var ok = document.createElement("div");
        var ng = document.createElement("div");
        head.innerHTML = title;
        head.className = "error";
        ok.innerHTML = valid;
        ng.innerHTML = invalid;
        ng.className = "error";
        this._resultArea.appendChild(head);
        this._resultArea.appendChild(ok);
        this._resultArea.appendChild(ng);
    },

    // write the result string
    "_setResult": function(tree) {
        var head = document.createElement("div");
        this._resultArea.appendChild(head);

        // get the result
        this._validator.validate(tree);
        if (!this._validator.valid) {
            // not a siteswap
            head.innerHTML = "Invalid";
            head.className = "error";
            return;
        }

        // siteswap
        head.innerHTML = "Valid";
        var balls = document.createElement("div");
        var period = document.createElement("div");
        var state = document.createElement("div");
        balls.innerHTML = "balls: " + this._validator.balls;
        period.innerHTML = "period: " + this._validator.period;
        state.innerHTML = "state: " + this._validator.state.join(" ");
        this._resultArea.appendChild(balls);
        this._resultArea.appendChild(period);
        this._resultArea.appendChild(state);
    },

}

// start the controller
new Controller();


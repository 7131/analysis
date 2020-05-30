// Column number constants
var ColNum = {
    "NUMBER": 0,
    "TARGET": 1,
    "EXPECT": 2,
    "RESULT": 3,
}

// Controller class
var Controller = function() {
    // fields
    this._parser = new Parser(Grammar);
    this._validator = new Validator();

    // events
    window.addEventListener("load", this._initialize.bind(this), false);
}

// Controller prototype
Controller.prototype = {

    // initialize the private fields
    "_initialize": function() {
        this._rows = document.getElementById("patterns").rows;
        var execute = document.getElementById("execute");
        execute.addEventListener("click", this._start.bind(this), false);
    },

    // start all tests
    "_start": function(e) {
        // disable the "Execute" button
        this._button = e.currentTarget;
        this._button.disabled = true;

        // initialize table
        for (var i = 1; i < this._rows.length; i++) {
            var row = this._rows[i];
            row.cells[ColNum.RESULT].innerText = "";
            row.cells[ColNum.RESULT].className = "";
            row.cells[ColNum.NUMBER].className = "symbol";
        }

        // execute the first test
        this._index = 1;
        this._execute();
    },

    // execute a test
    "_execute": function() {
        // prepare the test
        var row = this._rows[this._index];
        row.cells[ColNum.NUMBER].innerText = this._index;
        var pattern = row.cells[ColNum.TARGET].innerText;

        // analyze the siteswap pattern
        var result = this._parser.tokenize(pattern);
        if (result.tokens == null) {
            this._showResult("unknown character(s): " + result.invalid);
        } else {
            result = this._parser.parse(result.tokens);
            if (result.tree == null) {
                this._showResult("syntax error: " + result.invalid);
            } else {
                this._validator.validate(result.tree);
                if (this._validator.valid) {
                    this._showResult(this._validator.state.join(" "));
                } else {
                    this._showResult("Invalid");
                }
            }
        }
    },

    // show the result string
    "_showResult": function(text) {
        // get the result string
        var row = this._rows[this._index];
        if (text.trim() == row.cells[ColNum.EXPECT].innerText) {
            row.cells[ColNum.RESULT].innerText = "OK";
        } else {
            row.cells[ColNum.RESULT].innerText = text;
            row.cells[ColNum.RESULT].className = "error";
        }

        // execute the next test
        this._index++;
        if (this._rows.length <= this._index || this._rows[this._index].cells[ColNum.TARGET].innerText == "") {
            // finished
            this._button.disabled = false;
            return;
        }
        setTimeout(this._execute.bind(this), 10);
    },

}

// start the controller
new Controller();


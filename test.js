// Column number constants
const ColNum = {
    "NUMBER": 0,
    "TARGET": 1,
    "EXPECT": 2,
    "RESULT": 3,
}

// Controller class
const Controller = function() {
    // fields
    this._parser = new Parser(Grammar, Converter);
    this._validator = new Validator();

    // events
    window.addEventListener("load", this._initialize.bind(this), false);
}

// Controller prototype
Controller.prototype = {

    // initialize the page
    "_initialize": function() {
        this._rows = document.getElementById("patterns").rows;
        for (let i = 1; i < this._rows.length; i++) {
            // No.
            const number = this._rows[i].cells[ColNum.NUMBER];
            number.innerText = i;
            number.className = "symbol";
        }

        // get the last row
        let last = this._rows[this._rows.length - 1];
        if (last.cells[ColNum.TARGET].innerText != "") {
            last = last.parentNode.appendChild(last.cloneNode(true));
        }
        last.cells[ColNum.NUMBER].innerText = "total";
        last.cells[ColNum.TARGET].innerText = "";
        last.cells[ColNum.EXPECT].innerText = "";
        last.cells[ColNum.RESULT].innerText = "";

        // button events
        const execute = document.getElementById("execute");
        execute.addEventListener("click", this._start.bind(this), false);
    },

    // start all tests
    "_start": function(e) {
        // disable the "Execute" button
        this._button = e.currentTarget;
        this._button.disabled = true;

        // initialize table
        for (let i = 1; i < this._rows.length; i++) {
            this._rows[i].cells[ColNum.RESULT].innerText = "";
        }
        this._errors = [];

        // execute the first test
        this._index = 1;
        this._execute();
    },

    // execute a test
    "_execute": function() {
        // prepare the test
        const row = this._rows[this._index];
        row.cells[ColNum.NUMBER].innerText = this._index;
        const pattern = this._validator.toSmall(row.cells[ColNum.TARGET].innerText);

        // analyze the siteswap pattern
        const lex = this._parser.tokenize(pattern);
        if (lex.tokens == null) {
            this._showResult("unknown character(s): " + lex.invalid);
        } else {
            const syntax = this._parser.parse(lex.tokens);
            if (syntax.tree == null) {
                this._showResult("syntax error: " + syntax.invalid);
            } else {
                this._validator.validate(syntax.tree);
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
        const row = this._rows[this._index];
        if (text.trim() == row.cells[ColNum.EXPECT].innerText) {
            row.cells[ColNum.RESULT].innerText = "OK";
            row.cells[ColNum.RESULT].className = "";
        } else {
            row.cells[ColNum.RESULT].innerText = text;
            row.cells[ColNum.RESULT].className = "error";
            this._errors.push(this._index);
        }

        // execute the next test
        this._index++;
        if (this._index < this._rows.length && this._rows[this._index].cells[ColNum.TARGET].innerText != "") {
            setTimeout(this._execute.bind(this), 10);
            return;
        }

        // finished
        let last = this._rows[this._rows.length - 1];
        if (this._errors.length == 0) {
            last.cells[ColNum.RESULT].innerText = "All OK";
        } else {
            last.cells[ColNum.RESULT].innerText = "NG : " + this._errors.join();
            last.cells[ColNum.RESULT].className = "error";
        }
        this._button.disabled = false;
    },

}

// start the controller
new Controller();


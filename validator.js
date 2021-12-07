// Siteswap validator class
const Validator = function() {
    this._alphabet = "0123456789abcdefghijklmnopqrstuvwxyz";
    this.reset();
}

// Siteswap validator prototype
Validator.prototype = {

    // reset the properties
    "reset": function(text) {
        // pattern
        if (text == null) {
            this.pattern = "";
        } else {
            this.pattern = text;
        }

        // others
        this.valid = false;
        this.balls = 0;
        this.period = 0;
        this.state = [];
    },

    // validate the syntax tree
    "validate": function(tree) {
        this.reset(tree.text);

        // asynchronous siteswap
        const root = tree.children[0];
        if (root.label == "Async") {
            this._validateAsync(root);
            return;
        }

        // synchronous siteswap
        const term = root.children.pop();
        if (term.text == "*") {
            // mirror pattern
            const follow = [];
            for (let i = 0; i < root.children.length; i++) {
                const both = root.children[i];
                const nodes = [ both.children[0], both.children[3], both.children[2], both.children[1], both.children[4] ];
                const text = nodes.reduce(this._join, "");
                const mirror = new Tree(both.label, text);
                Array.prototype.push.apply(mirror.children, nodes);
                follow.push(mirror);
            }
            Array.prototype.push.apply(root.children, follow);
            this.pattern = root.children.reduce(this._join, "");
        } else {
            root.children.push(term);
        }
        this._validateSynch(root);
    },

    // convert to lowercase letters
    "toSmall": function(text) {
        const half = text.replace(/[\uFF01-\uFF5E]/g, this._toHankaku);
        const quote = half.replace(/[\u201C\u201D]/g, "\"").replace("\u2018", "`").replace("\u2019", "'");
        const other = quote.replace("\u3000", " ").replace("\u301C", "~").replace("\uFFE5", "\u00A5");
        return other.toLowerCase();
    },

    // convert to half-width characters
    "_toHankaku": function(text) {
        return String.fromCharCode(text.charCodeAt(0) - 0xFEE0);
    },

    // validate the asynchronous tree
    "_validateAsync": function(tree) {
        // convert to the array of number array
        const throws = [];
        for (let i = 0; i < tree.children.length; i++) {
            const balls = [];
            const each = tree.children[i].children[0];
            if (each.label == "AsyncMulti") {
                // multiplex
                for (let j = 1; j < each.children.length - 1; j++) {
                    balls.push(this._alphabet.indexOf(each.children[j].text));
                }
            } else {
                // vanilla
                balls.push(this._alphabet.indexOf(each.text));
            }
            throws.push(balls);
        }
        this._validateNumbers(throws);
    },

    // validate the synchronous tree
    "_validateSynch": function(tree) {
        // convert to the array of number array
        const throws = [];
        for (let i = 0; i < tree.children.length; i++) {
            const both = tree.children[i];
            for (let side = 0; side <= 1; side++) {
                const balls = [];
                const one = both.children[side * 2 + 1].children[0];
                if (one.label == "SynchMulti") {
                    // multiplex
                    for (let j = 1; j < one.children.length - 1; j++) {
                        balls.push(this._convertSynchBeat(one.children[j], side));
                    }
                } else {
                    // single throw
                    balls.push(this._convertSynchBeat(one, side));
                }
                throws.push(balls);
            }
        }
        this._validateNumbers(throws);
    },

    // convert a synchronous number to a beat
    "_convertSynchBeat": function(simple, side) {
        // no "x" switch
        if (simple.children.length <= 1) {
            return this._alphabet.indexOf(simple.text);
        }

        // exists "x" switch
        const index = this._alphabet.indexOf(simple.children[0].text);
        if (side == 0) {
            return index + 1;
        } else {
            return index - 1;
        }
    },

    // validate the array of number array
    "_validateNumbers": function(throws) {
        // create dropping spaces
        const period = throws.length;
        const drops = new Array(period);
        for (let i = 0; i < period; i++) {
            drops[i] = 0;
        }

        // get dropping positions from throwing balls
        let sum = 0;
        let max = 0;
        for (let i = 0; i < period; i++) {
            const balls = throws[i];
            for (let j = 0; j < balls.length; j++) {
                const number = (balls[j] + i) % period;
                drops[number]++;
                sum += balls[j];
                if (0 < balls[j]) {
                    max = Math.max(max, balls[j] + i);
                }
            }
        }

        // are all dropping balls equal to throwing them?
        for (let i = 0; i < period; i++) {
            if (drops[i] != throws[i].length) {
                return;
            }
        }

        // set the siteswap properties
        this.valid = true;
        this.balls = sum / period;
        this.period = period;
        if (max == 0) {
            this.state.push(0);
            return;
        }

        // set the siteswap state
        for (let i = 0; i < max; i++) {
            this.state.push(0);
        }
        const count = Math.ceil(max / period)
        const width = count * period;
        let position = 0;
        for (let i = 0; i < count; i++) {
            for (let j = 0; j < period; j++) {
                const balls = throws[j];
                for (let k = 0; k < balls.length; k++) {
                    const number = position + balls[k] + j;
                    if (width <= number) {
                        this.state[number - width]++;
                    }
                }
            }
            position += period;
        }
        while (this.state[this.state.length - 1] == 0) {
            this.state.pop();
        }
    },

    // join the strings
    "_join": function(acc, cur) {
        return acc + cur.text;
    },

}


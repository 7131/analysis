// Grammar object
var Grammar = {

    "terminals": [
        "0",
        "x",
        "\\[",
        "\\]",
        "\\*",
        "\\(",
        ",",
        "\\)",
        "[2468acegikmoqsuwy]",
        "[13579bdfhjlnprtvz]",
    ],

    "dummies": [
        "\\s+",
    ],

    "rules": [
        "#0#=1",
        "Pattern=1",
        "#1#=1",
        "#1#=1",
        "Async=1",
        "#2#=2",
        "#2#=1",
        "EachHand=1",
        "#3#=1",
        "#3#=1",
        "#3#=1",
        "AsyncSimple=1",
        "#4#=1",
        "#4#=1",
        "#4#=1",
        "Even=1",
        "Odd=1",
        "AsyncMulti=4",
        "#5#=2",
        "#5#=1",
        "Synch=2",
        "#6#=2",
        "#6#=1",
        "#7#=1",
        "#7#=0",
        "BothHand=5",
        "OneHand=1",
        "#8#=1",
        "#8#=1",
        "#8#=1",
        "SynchSimple=2",
        "#9#=1",
        "#9#=0",
        "SynchMulti=4",
        "#10#=2",
        "#10#=1",
    ],

    "table": [
        [ "s7", "s14", "s16", "", "", "s28", "", "", "s11", "s13", "", "g1", "g2", "g3", "g4", "g22", "g6", "g8", "g9", "g10", "g12", "g15", "", "g23", "g24", "", "g46", "", "", "", "", "", "" ],
        [ "", "", "", "", "", "", "", "", "", "", "r0", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "" ],
        [ "", "", "", "", "", "", "", "", "", "", "r1", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "" ],
        [ "", "", "", "", "", "", "", "", "", "", "r2", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "" ],
        [ "s7", "s14", "s16", "", "", "", "", "", "s11", "s13", "r4", "", "", "", "", "g5", "g6", "g8", "g9", "g10", "g12", "g15", "", "", "", "", "", "", "", "", "", "", "" ],
        [ "r5", "r5", "r5", "", "", "", "", "", "r5", "r5", "r5", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "" ],
        [ "r7", "r7", "r7", "", "", "", "", "", "r7", "r7", "r7", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "" ],
        [ "r8", "r8", "r8", "", "", "", "", "", "r8", "r8", "r8", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "" ],
        [ "r9", "r9", "r9", "", "", "", "", "", "r9", "r9", "r9", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "" ],
        [ "r11", "r11", "r11", "r11", "", "", "", "", "r11", "r11", "r11", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "" ],
        [ "r12", "r12", "r12", "r12", "", "", "", "", "r12", "r12", "r12", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "" ],
        [ "r15", "r15", "r15", "r15", "", "", "r15", "r15", "r15", "r15", "r15", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "" ],
        [ "r13", "r13", "r13", "r13", "", "", "", "", "r13", "r13", "r13", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "" ],
        [ "r16", "r16", "r16", "r16", "", "", "", "", "r16", "r16", "r16", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "" ],
        [ "r14", "r14", "r14", "r14", "", "", "", "", "r14", "r14", "r14", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "" ],
        [ "r10", "r10", "r10", "", "", "", "", "", "r10", "r10", "r10", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "" ],
        [ "", "s14", "", "", "", "", "", "", "s11", "s13", "", "", "", "", "", "", "", "g17", "g9", "g10", "g12", "", "", "", "", "", "", "", "", "", "", "", "" ],
        [ "", "s14", "", "", "", "", "", "", "s11", "s13", "", "", "", "", "", "", "", "g21", "g9", "g10", "g12", "", "g18", "", "", "", "", "", "", "", "", "", "" ],
        [ "", "s14", "", "s19", "", "", "", "", "s11", "s13", "", "", "", "", "", "", "", "g20", "g9", "g10", "g12", "", "", "", "", "", "", "", "", "", "", "", "" ],
        [ "r17", "r17", "r17", "", "", "", "", "", "r17", "r17", "r17", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "" ],
        [ "", "r18", "", "r18", "", "", "", "", "r18", "r18", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "" ],
        [ "", "r19", "", "r19", "", "", "", "", "r19", "r19", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "" ],
        [ "r6", "r6", "r6", "", "", "", "", "", "r6", "r6", "r6", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "" ],
        [ "", "", "", "", "", "", "", "", "", "", "r3", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "" ],
        [ "", "", "", "", "s26", "s28", "", "", "", "", "r24", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "g25", "g27", "", "", "", "", "", "" ],
        [ "", "", "", "", "", "", "", "", "", "", "r20", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "" ],
        [ "", "", "", "", "", "", "", "", "", "", "r23", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "" ],
        [ "", "", "", "", "r21", "r21", "", "", "", "", "r21", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "" ],
        [ "s34", "", "s40", "", "", "", "", "", "s11", "", "", "", "", "", "", "", "", "", "", "g36", "", "", "", "", "", "", "", "g29", "g33", "g35", "", "g39", "" ],
        [ "", "", "", "", "", "", "s30", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "" ],
        [ "s34", "", "s40", "", "", "", "", "", "s11", "", "", "", "", "", "", "", "", "", "", "g36", "", "", "", "", "", "", "", "g31", "g33", "g35", "", "g39", "" ],
        [ "", "", "", "", "", "", "", "s32", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "" ],
        [ "", "", "", "", "r25", "r25", "", "", "", "", "r25", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "" ],
        [ "", "", "", "", "", "", "r26", "r26", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "" ],
        [ "", "", "", "", "", "", "r27", "r27", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "" ],
        [ "", "", "", "", "", "", "r28", "r28", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "" ],
        [ "", "s38", "", "r32", "", "", "r32", "r32", "r32", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "g37", "", "" ],
        [ "", "", "", "r30", "", "", "r30", "r30", "r30", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "" ],
        [ "", "", "", "r31", "", "", "r31", "r31", "r31", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "" ],
        [ "", "", "", "", "", "", "r29", "r29", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "" ],
        [ "", "", "", "", "", "", "", "", "s11", "", "", "", "", "", "", "", "", "", "", "g36", "", "", "", "", "", "", "", "", "", "g41", "", "", "" ],
        [ "", "", "", "", "", "", "", "", "s11", "", "", "", "", "", "", "", "", "", "", "g36", "", "", "", "", "", "", "", "", "", "g45", "", "", "g42" ],
        [ "", "", "", "s43", "", "", "", "", "s11", "", "", "", "", "", "", "", "", "", "", "g36", "", "", "", "", "", "", "", "", "", "g44", "", "", "" ],
        [ "", "", "", "", "", "", "r33", "r33", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "" ],
        [ "", "", "", "r34", "", "", "", "", "r34", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "" ],
        [ "", "", "", "r35", "", "", "", "", "r35", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "" ],
        [ "", "", "", "", "r22", "r22", "", "", "", "", "r22", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "" ],
    ],

}

// Token class
var Token = function(label) {
    this.setPattern(label, "");
}

// Token prototype
Token.prototype = {

    // set the pattern
    "setPattern": function(label, text) {
        if (label == null) {
            this.label = "";
        } else {
            this.label = label;
        }
        if (text == null) {
            this.text = "";
        } else {
            this.text = text;
        }
        this.length = text.length;
    },

}

// Syntax tree class
var Tree = function(label, text) {
    if (label == null) {
        this.label = "";
    } else {
        this.label = label;
    }
    if (text == null) {
        this.text = "";
    } else {
        this.text = text;
    }
    this.children = [];
}

// State stack class
var StateStack = function() {
    this._stack = [];
}

// State stack prototype
StateStack.prototype = {

    // push a state pair to the stack top
    "push": function(tree, state) {
        var pair = { "tree": tree, "state": state };
        this._stack.push(pair);
    },

    // pop a state pair from the stack top, remove it, and return the tree
    "popTree": function() {
        var last = this._stack.length - 1;
        if (last < 0) {
            return null;
        } else {
            var pair = this._stack.pop();
            return pair.tree;
        }
    },

    // peek the state number of the stack top
    "peekState": function() {
        var last = this._stack.length - 1;
        if (last < 0) {
            return 0;
        } else {
            return this._stack[last].state;
        }
    },

    // get the number of the stack items
    "getCount": function() {
        return this._stack.length;
    },

}

// Syntax parser class
var Parser = function(grammar) {
    // terminal symbols
    var terms = grammar.terminals.concat(grammar.dummies);
    this._terminals = terms.map(this._quote);
    this._dummies = grammar.dummies.map(this._quote);

    // lexical analysis elements
    this._elements = [];
    for (var i = 0; i < terms.length; i++) {
        this._elements.push(new RegExp("^(" + terms[i] + ")"));
    }

    // production rules
    this._rules = [];
    var nonterms = [];
    for (var i = 0; i < grammar.rules.length; i++) {
        var pair = grammar.rules[i].split("=");
        var symbol = pair[0];
        this._rules.push({ "symbol": symbol, "count": parseInt(pair[1], 10) });
        if (0 < i && nonterms.indexOf(symbol) < 0) {
            // non-terminal symbols
            nonterms.push(symbol);
        }
    }
    nonterms.unshift("$");
    var symbols = grammar.terminals.map(this._quote).concat(nonterms);

    // transition table
    this._table = [];
    for (var i = 0; i < grammar.table.length; i++) {
        var row = {};
        for (var j = 0; j < symbols.length; j++) {
            var match = grammar.table[i][j].match(/^(s|r|g)([0-9]+)$/);
            if (match) {
                var symbol = match[1];
                var number = parseInt(match[2], 10);
                row[symbols[j]] = { "symbol": symbol, "number": number };
            }
        }
        this._table.push(row);
    }
}

// Syntax parser prototype
Parser.prototype = {

    // lexical analysis
    "tokenize": function(text) {
        var small = this._toSmall(text);
        var tokens = [];
        while (0 < small.length) {
            var max = new Token();
            for (var i = 0; i < this._elements.length; i++) {
                var result = this._elements[i].exec(small);
                if (result != null && max.length < result[0].length) {
                    // get the longest and the first token
                    max.setPattern(this._terminals[i], result[0]);
                }
            }
            if (0 < max.length) {
                // found a token
                if (this._dummies.indexOf(max.label) < 0) {
                    tokens.push(max);
                }
                small = small.substring(max.length);
            } else {
                // not found a token
                break;
            }
        }

        // get the result
        if (0 < small.length) {
            var valid = tokens.reduce(this._join, "");
            return { "tokens": null, "valid": valid, "invalid": small };
        }
        return { "tokens": tokens };
    },

    // syntax analysis
    "parse": function(tokens) {
        var stack = new StateStack();

        // dealing all tokens
        tokens.push(new Token("$"));
        while (0 < tokens.length) {
            var next = tokens[0];
            var label = next.label;

            // execute an action
            var action = this._table[stack.peekState()][label];
            if (!action) {
                break;
            }
            if (action.symbol == "s") {
                // shift
                var leaf = new Tree(label, next.text);
                stack.push(leaf, action.number);
                tokens.shift();
            } else {
                // reduce
                var rule = this._rules[action.number];
                var nodes = [];
                for (var i = 0; i < rule.count; i++) {
                    var top = stack.popTree();
                    if (top.label.substring(0, 1) == "#") {
                        // a non-terminal symbol that should be removed
                        Array.prototype.unshift.apply(nodes, top.children);
                    } else {
                        nodes.unshift(top);
                    }
                }

                // create a syntax tree
                var text = nodes.reduce(this._join, "");
                var node = new Tree(rule.symbol, text);
                Array.prototype.push.apply(node.children, nodes);

                // accept
                if (action.number == 0) {
                    return { "tree": node.children[0] };
                }

                // transit
                action = this._table[stack.peekState()][node.label];
                if (!action) {
                    break;
                }
                stack.push(node, action.number);
            }
        }

        // the case of not to accept
        var valid = "";
        while (0 < stack.getCount()) {
            var tree = stack.popTree();
            valid = tree.text + valid;
        }
        var invalid = tokens.reduce(this._join, "");
        return { "tree": null, "valid": valid, "invalid": invalid };
    },

    // convert to lowercase letters
    "_toSmall": function(text) {
        var half = text.replace(/[\uFF01-\uFF5E]/g, this._toHankaku);
        var quote = half.replace(/[\u201C\u201D]/g, "\"").replace("\u2018", "`").replace("\u2019", "'");
        var other = quote.replace("\u3000", " ").replace("\u301C", "~").replace("\uFFE5", "\u00A5");
        return other.toLowerCase();
    },

    // convert to half-width characters
    "_toHankaku": function(text) {
        return String.fromCharCode(text.charCodeAt(0) - 0xFEE0);
    },

    // join the strings
    "_join": function(acc, cur) {
        return acc + cur.text;
    },

    // add the single quatations
    "_quote": function(cur) {
        return "'" + cur + "'";
    },

}

// Siteswap validator class
var Validator = function() {
    this.reset();
}

// Siteswap validator prototype
Validator.prototype = {

    // siteswap alphabets
    "ALPHABET": "0123456789abcdefghijklmnopqrstuvwxyz",

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
        var root = tree.children[0];
        if (root.label == "Async") {
            this._validateAsync(root);
            return;
        }

        // synchronous siteswap
        var term = root.children.pop();
        if (term.text == "*") {
            // mirror pattern
            var follow = [];
            for (var i = 0; i < root.children.length; i++) {
                var both = root.children[i];
                var nodes = [ both.children[0], both.children[3], both.children[2], both.children[1], both.children[4] ];
                var text = nodes.reduce(this._join, "");
                var mirror = new Tree(both.label, text);
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

    // validate the asynchronous tree
    "_validateAsync": function(tree) {
        // convert to the array of number array
        var throws = [];
        for (var i = 0; i < tree.children.length; i++) {
            var balls = [];
            var each = tree.children[i].children[0];
            if (each.label == "AsyncMulti") {
                // multiplex
                for (var j = 1; j < each.children.length - 1; j++) {
                    balls.push(this.ALPHABET.indexOf(each.children[j].text));
                }
            } else {
                // vanilla
                balls.push(this.ALPHABET.indexOf(each.text));
            }
            throws.push(balls);
        }
        this._validateNumbers(throws);
    },

    // validate the synchronous tree
    "_validateSynch": function(tree) {
        // convert to the array of number array
        var throws = [];
        for (var i = 0; i < tree.children.length; i++) {
            var both = tree.children[i];
            for (var side = 0; side <= 1; side++) {
                var balls = [];
                var one = both.children[side * 2 + 1].children[0];
                if (one.label == "SynchMulti") {
                    // multiplex
                    for (var j = 1; j < one.children.length - 1; j++) {
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
            return this.ALPHABET.indexOf(simple.text);
        }

        // exists "x" switch
        var index = this.ALPHABET.indexOf(simple.children[0].text);
        if (side == 0) {
            index++;
        } else {
            index--;
        }
        return index;
    },

    // validate the array of number array
    "_validateNumbers": function(throws) {
        // create dropping spaces
        var period = throws.length;
        var drops = new Array(period);
        for (var i = 0; i < period; i++) {
            drops[i] = 0;
        }

        // get dropping positions from throwing balls
        var sum = 0;
        var max = 0;
        for (var i = 0; i < period; i++) {
            var balls = throws[i];
            for (var j = 0; j < balls.length; j++) {
                var number = (balls[j] + i) % period;
                drops[number]++;
                sum += balls[j];
                if (0 < balls[j]) {
                    max = Math.max(max, balls[j] + i);
                }
            }
        }

        // are all dropping balls equal to throwing them?
        for (var i = 0; i < period; i++) {
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
        for (var i = 0; i < max; i++) {
            this.state.push(0);
        }
        var count = Math.ceil(max / period)
        var width = count * period;
        var position = 0;
        for (var i = 0; i < count; i++) {
            for (var j = 0; j < period; j++) {
                var balls = throws[j];
                for (var k = 0; k < balls.length; k++) {
                    var number = position + balls[k] + j;
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


# Siteswap Analyzer

You can analyze siteswaps.
If the siteswap is valid, the number of balls, the period, and the state are displayed respectively.
You can also demonstrate using JuggleMaster JavaScript.

# File list

<dl>
  <dt>index.html</dt>
    <dd>This is the main page for the Siteswap Analyzer.</dd>
  <dt>default.css</dt>
    <dd>The style sheet for the main page.</dd>
  <dt>grammar.js</dt>
    <dd>The grammar object and the syntax converter.</dd>
  <dt>parser.js</dt>
    <dd>Classes for parser, token, syntax tree, and state stack.</dd>
  <dt>validator.js</dt>
    <dd>A siteswap validation class.</dd>
  <dt>controller.js</dt>
    <dd>This is a controller that receives the input of the main page and outputs the analysis result.</dd>
  <dt>test.html</dt>
    <dd>This is a page for testing the Siteswap Analyzer.</dd>
  <dt>test.css</dt>
    <dd>The style sheet for the test page.</dd>
  <dt>test.js</dt>
    <dd>This is a controller that receives the input of the test page and outputs the test result to the table.</dd>
</dl>

# Siteswap specifications by ABNF

The followings are the specifications of the pattern of the siteswap to be accepted.

```ABNF
Pattern     = Async / Synch
Async       = 1*EachHand
EachHand    = AsyncSimple / AsyncMulti
AsyncSimple = Even / Odd
Even        = "0" / "2" / "4" / "6" / "8" / "a" / "c" / "e" / "g" / "i" / "k" / "m" / "o" / "q" / "s" / "u" / "w" / "y"
Odd         = "1" / "3" / "5" / "7" / "9" / "b" / "d" / "f" / "h" / "j" / "l" / "n" / "p" / "r" / "t" / "v" / "x" / "z"
AsyncMulti  = "[" 2*AsyncSimple "]"
Synch       = 1*BothHand ["*"]
BothHand    = "(" OneHand "," OneHand ")"
OneHand     = SynchSimple / SynchMulti
SynchSimple = Even ["x"]
SynchMulti  = "[" 2*SynchSimple "]"
```


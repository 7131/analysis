# Siteswap Analyzer

English site: https://7131.github.io/analysis/<br>
Japanese site: https://app.7131.jp/analysis/

You can analyze siteswaps.
If the input string is a valid siteswap, the number of balls, the period, and the state are displayed, respectively.
You can also demonstrate using juggling simulator.

This analyzer accepts vanilla, multiplex, and synchronous patterns.

<dl>
  <dt>Vanilla siteswap</dt>
    <dd>is a string of letters consisting only of numbers and letters of the alphabet. For example, 3, 441, 7131, db97531, etc.</dd>
  <dt>Multiplexing</dt>
    <dd>uses square brackets in addition to vanilla. It will allow multiple props to be grouped together. For example, [123], [34]23, [34][32]0, etc.</dd>
  <dt>Synchronous pattern</dt>
    <dd>is expressed using round brackets and commas (and the letter 'x'). For example, (4x,2x), (6x,0)*, (2,4)([44x],2x), etc.</dd>
</dl>


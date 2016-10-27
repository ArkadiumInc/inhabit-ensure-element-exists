inhabit-utils-element-exists
===========

## Installation
### npm
[![NPM](https://nodei.co/npm/inhabit-utils-element-exists.png)](https://nodei.co/npm/inhabit-utils-element-exists/)

First, install `inhabit-utils-element-exists` via npm command-line, as follows:
```
npm install inhabit-utils-element-exists
```
## Usage:
```javascript
var ElementChecker = require('inhabit-utils-element-exists');
//$ - jquery
var elementChecker = new ElementChecker($,2000,100);
elementChecker.checkElement("#elementId")
.done(function () {
     //Do something
})
.fail(function () {
//Do something else
});
```

## License
COPYRIGHT (c) 2016 Arkadium

BSD ISC License

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

## Contribution
Be free to create pull requests

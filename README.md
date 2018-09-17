# markdown-it-small

## Install

```
npm install markdown-it-small --save
```

## Use

```js
var md = require('markdown-it')()
            .use(require('markdown-it-small'));

md.render('--inserted--') // => '<small>inserted</small>'
```
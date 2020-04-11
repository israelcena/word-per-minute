# Word-per-minute

<br>
Word-per-minute as a javascript addon for calculate
Reading time estimation.

`word-per-minute` helps you estimate how long an article will take to read.
It works perfectly with plain text, but also with `markdown` or `html`.

## Installation

```sh
npm install word-per-minute --production
```

## Usage

### Classic

```javascript
const readTime = require('word-per-minute');

const stats = readTime(text);
// ->
// stats: {
//   text: '1 min read',
//   minutes: 1,
//   time: 60000,
//   words: 200
// }
```

### Stream

```javascript
const readTime = require('word-per-minute/stream');

fs.createReadStream('foo')
  .pipe(readTime)
  .on('data', stats => {
    // ...
  });
```

## API

`readingTime(text, options?)`

- `text`: the text to analyze
- options (optional)
  - `options.wordsPerMinute`: (optional) the words per minute an average reader can read (default: 200)
  - `options.wordBound`: (optional) a function that returns a boolean value depending on if a character is considered as a word bound (default: spaces, new lines and tabulations)
 - `options.language`: you can set a language for return of reading text (default: en-us)                                                  |

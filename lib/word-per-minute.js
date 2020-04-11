const languageConfig = require('./languages.json')
const ansiWordBound = require('./ansiWordBound')

function readingTime(text, options) {
  var words = 0, start = 0, end = text.length - 1, wordBound, i

  options = options || {}

  //Use default values if necessary
  options.wordsPerMinute = options.wordsPerMinute || 200

  //Use provided function if available
  wordBound = options.wordBound || ansiWordBound

  //Fetch bounds
  while (wordBound(text[start])) start++
  while (wordBound(text[end])) end--

  //Calculate the number of words
  for (i = start; i <= end;) {
    for (; i <= end && !wordBound(text[i]); i++);
    words++
    for (; i <= end && wordBound(text[i]); i++);
  }

  //Reading time stats
  var minutes = words / options.wordsPerMinute
  var time = minutes * 60 * 1000
  var displayed = Math.ceil(minutes.toFixed(2))

  //Checks whether a language has been set, if not English as default
  options.language = options.language || 'pt_br'

  //search for the language set in the
  let languageUse = languageConfig.find((obj) => {
    return obj.type === options.language.replace('-', '_')
  })

  return {
    text: displayed + languageUse.read_msg,
    minutes: minutes,
    time: time,
    words: words
  }
}

/**
 * Export
 */
module.exports = readingTime

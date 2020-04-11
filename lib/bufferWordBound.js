function bufferWordBound(c) {
  return (
    (32 === c) ||
    (10 === c) ||
    (13 === c) ||
    (9 === c)
  )
}

module.exports = bufferWordBound

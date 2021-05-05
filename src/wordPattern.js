var wordPattern = function (pattern, s) {
  var words = s.split(' ')
  var letters = pattern.split('')
  if (words.length !== letters.length) return false
  for (var i = 0; i < pattern.length; i++) {
    if (letters.indexOf(letters[i]) !== words.indexOf(words[i])) return false
  }
  return true
}

export default wordPattern

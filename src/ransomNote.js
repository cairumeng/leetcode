var canConstruct = function (ransomNote, magazine) {
  var obj = {}
  for (var i = 0; i < magazine.length; i++) {
    if (!obj[magazine[i]]) {
      obj[magazine[i]] = 1
    } else {
      obj[magazine[i]]++
    }
  }
  for (var j = 0; j < ransomNote.length; j++) {
    if (obj[ransomNote[j]] == undefined) return false
    if (--obj[ransomNote[j]] < 0) return false
  }
  return true
}

export default canConstruct

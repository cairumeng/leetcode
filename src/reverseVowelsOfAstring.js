var reverseVowels = function (s) {
  var result = []

  var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
  for (var i = 0, j = s.length - 1; i <= j; i++, j--) {
    while (i <= j && !vowels.includes(s[i])) {
      result[i] = s[i]
      i++
    }

    while (i < j && !vowels.includes(s[j])) {
      result[j] = s[j]
      j--
    }

    if (vowels.includes(s[i]) && vowels.includes(s[j])) {
      result[i] = s[j]
      result[j] = s[i]
    }
  }
  return result.join('')
}

var isVowel = function (c) {
  return /[aoeiu]/i.test(c)
}

var reverseVowels2 = function (s) {
  var result = []

  for (var i = 0, j = s.length - 1; i <= j; i++, j--) {
    var findI = false
    var findJ = false
    while (i <= j && !(findI = isVowel(s[i]))) {
      result[i] = s[i]
      i++
    }

    while (i < j && !(findJ = isVowel(s[j]))) {
      result[j] = s[j]
      j--
    }

    if (findI && findJ) {
      result[i] = s[j]
      result[j] = s[i]
    }
  }
  return result.join('')
}

export default reverseVowels2

var num2letters = {
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z'],
}
var letterCombinations = function (digits) {
  if (digits.length == 0) return []
  var result = num2letters[digits[0]]
  var base = []
  var letters = []
  for (var i = 1; i < digits.length; i++) {
    base = result
    result = []
    letters = num2letters[digits[i]]
    for (var j = 0; j < letters.length; j++) {
      base.map((c) => result.push(c + letters[j]))
    }
  }
  console.log(result)
  return result
}

export default letterCombinations

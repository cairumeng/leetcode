var romanNums = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
}

var excepts = {
  IV: 4,
  IX: 9,
  XL: 40,
  XC: 90,
  CD: 400,
  CM: 900,
}

var romanToInt = function (s) {
  var int = 0
  var i = 0
  for (; i < s.length - 1; i++) {
    if (
      (s[i] === 'I' || s[i] === 'X' || s[i] === 'C') &&
      excepts[s[i] + s[i + 1]]
    ) {
      int += excepts[s[i] + s[i + 1]]
      i++
    } else {
      int += romanNums[s[i]]
    }
  }

  return i === s.length ? int : int + romanNums[s[s.length - 1]]
}

var romanToInt2 = function (s) {
  var i
  var int = 0
  for (i = 0; i < s.length; i++) {
    var cur = romanNums[s[i]]
    var next = romanNums[s[i + 1]]
    if (cur < next) {
      int += next - cur
      i++
      continue
    }
    int += cur
  }
  return int
}
export default romanToInt2

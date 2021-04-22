var isMatch = function (a, b) {
  switch (a) {
    case '(':
      return b === ')'
    case '[':
      return b === ']'
    case '{':
      return b === '}'
    default:
      return false
  }
}

var isValid = function (s) {
  if (s.length % 2 !== 0) {
    return false
  }
  var arr = []

  for (var i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
      arr.push(s[i])
    } else {
      if (!isMatch(arr[arr.length - 1], s[i])) {
        return false
      }
      arr.pop()
    }
  }

  return arr.length === 0
}

var isClose = function (c) {
  return c === '}' || c === ']' || c === ')'
}

var isValid2 = function (s) {
  return isValidRecursive(s, 0, s.length - 1)
}

var isValidRecursive = function (s, left, right) {
  if (right < left) return true
  if (isClose(s[left]) || (right - left + 1) % 2 !== 0) return false

  var count = 1
  for (var i = left + 1; i <= right; i++) {
    if (s[left] === s[i]) {
      count++
    } else if (isMatch(s[left], s[i])) {
      if (--count === 0) {
        return (
          isValidRecursive(s, left + 1, i - 1) &&
          isValidRecursive(s, i + 1, right)
        )
      }
    }
  }

  return count === 0
}
export default isValid2

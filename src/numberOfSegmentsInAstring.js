var countSegments = function (s) {
  var arr = s.split(' ')
  var count = arr.length
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length == 0 || arr[i] == ' ') count--
  }
  return count
}

export default countSegments

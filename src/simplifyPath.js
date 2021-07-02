var simplifyPath = function (path) {
  var fileNames = path.split('/')
  var getBackCount = 0
  for (var i = fileNames.length - 1; i >= 0; i--) {
    if (fileNames[i] == '.') fileNames[i] = ''
    if (fileNames[i] == '..') {
      fileNames[i] = ''
      getBackCount++
    }
    if (getBackCount > 0 && fileNames[i].length > 0) {
      fileNames[i] = ''
      getBackCount--
    }
  }
  var simpliedNames = fileNames.filter((name) => name.length > 0)
  return '/' + simpliedNames.join('/')
}

var simplifyPath2 = function (path) {
  let paths = path.split('/')
  let arr = []
  for (let p of paths) {
    if (p === '..') {
      arr.pop()
    } else if (p !== '.' && p.length > 0) {
      arr.push(p)
    }
  }
  return '/' + arr.join('/')
}
export default simplifyPath

// var groupAnagrams = function (strs) {
//   var patterns = []
//   var resultIndex = 0
//   var result = []
//   var foundPattern = false
//   var copyObjet = function (obj) {
//     var newObj = {}
//     Object.keys(obj).map((key) => (newObj[key] = obj[key]))
//     return newObj
//   }
//   for (var i = 0; i < strs.length; i++) {
//     for (var j = 0; j < patterns.length; j++) {
//       if (strs[i].length !== patterns[j]['length']) continue
//       var curPattern = copyObjet(patterns[j])
//       for (var k = 0; k < strs[i].length; k++) {
//         if (curPattern[strs[i][k]] == 0 || curPattern[strs[i][k]] == undefined)
//           break
//         else curPattern[strs[i][k]]--
//       }

//       if (k == strs[i].length) {
//         foundPattern = true
//         result[curPattern['index']].push(strs[i])
//         break
//       }
//     }

//     if (!foundPattern) {
//       var pattern = {}
//       for (let str of strs[i]) {
//         if (pattern[str] == undefined) {
//           pattern[str] = 1
//         } else {
//           pattern[str]++
//         }
//       }
//       pattern['index'] = resultIndex++
//       pattern['length'] = strs[i].length
//       patterns.push(pattern)
//       result.push([strs[i]])
//     }
//     foundPattern = false
//   }
//   return result
// }

var groupAnagrams = function (strs) {
  let state = []
  for (let s of strs) {
    const sorted = s.split('').sort().join('')
    state[sorted] = state[sorted] ? [...state[sorted], s] : [s]
  }
  return Object.values(state)
}

export default groupAnagrams

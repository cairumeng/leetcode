var combinationSum2 = function (candidates, target) {
  var result = []
  candidates.sort((a, b) => a - b)
  var findCombin = function (index, newTarget, combin) {
    for (var i = index; i < candidates.length; i++) {
      if (i > index && candidates[i] == candidates[i - 1]) continue
      if (newTarget < candidates[i]) return
      if (newTarget == candidates[i]) {
        result.push([...combin, newTarget])
        return
      }
      findCombin(i + 1, newTarget - candidates[i], [...combin, candidates[i]])
    }
  }
  findCombin(0, target, [])

  return result
}
export default combinationSum2

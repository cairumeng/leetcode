var combinationSum = function (candidates, target) {
  var result = []
  candidates.sort((a, b) => a - b)

  var findCombin = function (startIndex, target, combin) {
    for (var i = startIndex; i < candidates.length; i++) {
      if (target < candidates[i]) return

      var quot = Math.floor(target / candidates[i])

      while (quot > 0) {
        var newTarget = target - candidates[i] * quot
        var newCombin = [...combin, ...Array(quot).fill(candidates[i])]
        if (newTarget == 0) {
          result.push(newCombin)
        } else {
          findCombin(i + 1, newTarget, newCombin)
        }
        quot--
      }
    }
  }

  findCombin(0, target, [])

  return result
}

var combinationSum1 = function (candidates, target) {
  var result = []

  candidates.sort((a, b) => a - b)

  function combine(index, target, combin) {
    for (let i = index; i < candidates.length; i++) {
      let candidate = candidates[i]
      if (target < candidate) {
        return
      }

      if (target === candidate) {
        result.push([...combin, candidate])
        return
      }
      combine(i, target - candidate, [...combin, candidate])
    }
  }

  combine(0, target, [])
  return result
}

export default combinationSum

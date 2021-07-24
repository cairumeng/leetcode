var findRelativeRanks = function (score) {
  var originalScore = [...score]
  score.sort((a, b) => b - a)
  var scorePlaceObj = {}
  for (var i = 0; i < score.length; i++) {
    if (i === 0) scorePlaceObj[score[i]] = 'Gold Medal'
    if (i === 1) scorePlaceObj[score[i]] = 'Silver Medal'
    if (i === 2) scorePlaceObj[score[i]] = 'Bronze Medal'
    if (i >= 3) scorePlaceObj[score[i]] = (i + 1).toString()
  }
  var result = []
  for (var j = 0; j < originalScore.length; j++) {
    result.push(scorePlaceObj[originalScore[j]])
  }
  return result
}
export default findRelativeRanks

var constructRectangle = function (area) {
  var result = []
  for (var w = Math.floor(Math.sqrt(area)); w >= 1; w--) {
    if (area % w == 0) {
      result.push(area / w)
      result.push(w)
      return result
    }
  }
}
export default constructRectangle

var searchMatrix = function (matrix, target) {
  var binarySearch = function (start, end, arr) {
    if (end == start) {
      return arr[start] == target
    }

    if (end < start) return false
    if (target == arr[end] || target == arr[start]) return true
    if (target > arr[end] || target < arr[start]) return false
    if (end - start <= 1) return false

    var mid = Math.floor(start + end / 2)
    if (target == arr[mid]) return true
    if (target < arr[mid]) return binarySearch(start + 1, mid - 1, arr)
    return binarySearch(mid + 1, end - 1, arr)
  }
  var m = matrix.length
  var n = matrix[0].length
  for (var i = 0; i < m; i++) {
    if (binarySearch(0, n - 1, matrix[i])) return true
  }
  return false
}
export default searchMatrix

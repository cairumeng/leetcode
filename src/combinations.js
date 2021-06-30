var combine = function (n, k) {
  var result = []

  var recursive = function (n, k, arr) {
    if (k === 0) return result.push(arr)
    if (k > n) return
    recursive(n - 1, k - 1, [...arr, n])
    recursive(n - 1, k, arr)
  }

  recursive(n, k, [])
  return result
}

export default combine

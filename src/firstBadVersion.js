/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    var start = 1
    var end = n

    while (end - start >= 1) {
      mid = Math.floor((start + end) / 2)
      isBadVersion(mid) ? (end = mid) : (start = mid + 1)
    }
    return start
  }
}

export default solution

var findComplement = function (num) {
  var count = 0
  var tmp = 0
  var tmp2 = num
  while (tmp2 > 0) {
    tmp2 = tmp2 >> 1
    tmp |= 1 << count
    count++
  }

  return num ^ tmp
}
export default findComplement

var isValidSudoku = function (board) {
  var checkColumn = {}
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[i].length; j++) {
      if (board[i][j] == '.') continue
      if (checkColumn[board[i][j]]) return false
      else checkColumn[board[i][j]] = 1
    }
    checkColumn = {}
  }
  var checkRow = {}
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[i].length; j++) {
      if (board[j][i] == '.') continue
      if (checkRow[board[j][i]]) return false
      else checkRow[board[j][i]] = 1
    }
    checkRow = {}
  }
  var checkBox = {}
  for (var i = 0; i < board.length; i += 3) {
    for (var j = 0; j < board[i].length; j++) {
      if (board[i][j] !== '.') {
        if (checkBox[board[i][j]]) return false
        else checkBox[board[i][j]] = 1
      }
      if ((j + 1) % 3 == 0) {
        if ((i + 1) % 3 == 0) {
          i -= 2
          checkBox = {}
        } else {
          i++
          j -= 3
        }
      }
    }
    checkBox = {}
  }
  return true
}

export default isValidSudoku

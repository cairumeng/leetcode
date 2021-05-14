var islandPerimeter = function (grid) {
  var perimeter = 0
  for (var i = 0; i < grid.length; i++) {
    for (var j = 0; j < grid[i].length; j++) {
      if (grid[i][j] == 1) {
        if (!grid[i][j - 1]) perimeter++
        if (!grid[i][j + 1]) perimeter++
        if (!grid[i - 1] || !grid[i - 1][j]) perimeter++
        if (!grid[i + 1] || !grid[i + 1][j]) perimeter++
      }
    }
  }
  return perimeter
}
export default islandPerimeter

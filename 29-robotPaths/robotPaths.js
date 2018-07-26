/**
 *  
 *  A robot located at the top left corner of a 5x5 grid is trying to reach the 
 *  bottom right corner. The robot can move either up, down, left, or right, 
 *  but cannot visit the same spot twice. How many possible unique paths are 
 *  there to the bottom right corner? 
 *  
 *  make your solution work for a grid of any size.
 *
 */

// A Board class will be useful

var makeBoard = function(n) {
  var board = [];
  for (var i = 0; i < n; i++) {
    board.push([]);
    for (var j = 0; j < n; j++) {
      board[i].push(false);
    }
  }
  board.togglePiece = function(i, j) {
    this[i][j] = !this[i][j];
  }
  board.hasBeenVisited = function(i, j) {
    return !!this[i][j];
  }
  return board;
};


var robotPaths = function(n, board, i, j) {
  board = new board(n);
  let count = 0;
  const traverse = (n, board, i, j) => {
    let toGo = [i, j];
    if(i === n - 1 && j === n - 1){
      count++;
      return toGo;
    }
    if(i > 0 && !board.hasBeenVisited(i - 1, j)){
      toGo = [i - 1, j];
      board.togglePiece(...toGo);
      traverse(n, board, i - 1, j);
      board.togglePiece(...toGo);
    } if(j < n - 1 && !board.hasBeenVisited(i, j + 1)){
      toGo = [i, j + 1];
      board.togglePiece(...toGo);
      traverse(n, board, i, j + 1);
      board.togglePiece(...toGo);
    } if(i < n - 1 && !board.hasBeenVisited(i + 1, j)){
      toGo = [i + 1, j];
      board.togglePiece(...toGo);
      traverse(n, board, i + 1, j);
      board.togglePiece(...toGo);
    } if(j > 0 && !board.hasBeenVisited(i, j - 1)){
      toGo = [i, j - 1];
      board.togglePiece(...toGo);
      traverse(n, board, i, j - 1);
      board.togglePiece(...toGo);
    }
    return toGo;
  }
  board.togglePiece(i, j);
  traverse(n, board, i, j);
  return `possible unique paths: ${count}`
}

console.log(robotPaths(5, makeBoard, 0, 0));
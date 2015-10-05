(function(globals){ // IIFE
// Not this again...
console.log(game.tracer());

  it.skip('should totally fail', function(){
    chai.expect(false).equals(true);
  })
  //
  it('should have a game in the window', function(){
    chai.expect(window.game).to.be.equal(game);
  })

  it('should be an object', function(){
    chai.expect(game).to.be.an('object');
  })

  it('should have a key of boardl', function(){
    chai.expect(game.board).to.exist;
  })

  it('should be a function', function(){
    chai.expect(game.board).to.be.a('function');
  })

it.skip('should tell me what piece is at a position', function(){
  chai.expect(game.pieceAt(6,3)).to.equal('p');
  chai.expect(game.pieceAt(6,2)).to.equal('p');
  chai.expect(game.pieceAt(4,3)).to.equal(null);
  chai.expect(game.pieceAt(0,0)).to.equal('R');
});


  it('should move exactly one piece', function(){
  //initialize the environment...
    game.reset();
    var board = game.board();

  //test the preconditions...
    chai.expect(board[6][3]).to.equal('p');
    chai.expect(board[4][3]).to.be.null;

    chai.expect(game.tracer()).to.equal([
      '|R|N|B|Q|K|B|N|R|',
      '|P|P|P|P|P|P|P|P|',
      '| | | | | | | | |',
      '| | | | | | | | |',
      '| | | | | | | | |',
      '| | | | | | | | |',
      '|p|p|p|p|p|p|p|p|',
      '|r|n|b|q|k|b|n|r|',
    ].join('\n') + '\n');

    // Action to change the world...
    chai.expect(game.applyMove(
      { rank: 6, file: 3 }, // from
      { rank: 4, file: 3 }  // to
    )).to.equal(undefined);

    var board = game.board(); // Re-copy the board?

    // Test the Postconditions...
    chai.expect(board[6][3]).to.be.null;
    chai.expect(board[4][3]).to.be.equal('p');

    chai.expect(game.tracer()).to.equal([
      '|R|N|B|Q|K|B|N|R|',
      '|P|P|P|P|P|P|P|P|',
      '| | | | | | | | |',
      '| | | | | | | | |',
      '| | | |p| | | | |',
      '| | | | | | | | |',
      '|p|p|p| |p|p|p|p|',
      '|r|n|b|q|k|b|n|r|',
    ].join('\n') + '\n');

  }); // it should move a piece



 //it should move exactly one picee

  // it('should be able to move a different piece', function(){
  //   //initialize the environment...
  //   game.reset();
  //   var board = game.board();

    //test the precondition
    // chai.expect(board


// There's that crazy line again...
})(window || module && module.exports || this);











// console.log("game is an " + game);
// console.log("game.board \n" + game.board());
// console.log("game.reset \n" + game.reset());
// console.log("game.next \n" + game.next());
// console.log("game.prev \n" + game.prev());
// console.log("game.end \n" + game.end());
// console.log("game.applyMove: \n" + game.applyMove([6,3],[4,3]));
// console.log("game.tracer is- \n" + game.tracer());

// console.log("moves" + game.current);








// Notes for var moves= in main.js
// var current = board[4][3] = board[6][3];
// var last = board[6][3] = null;
// console.log(board.join('\n' + '|'));
// var current = moves[0] var to = moves[0]
// d4, Nf6, c4, e6, g3, d5, Bg2, Be7, Nf3

/*[6,3],[4,3]], [[0,6],[2,5]], [[6,2],[4,2]], [[1,4],[2,4]], [[6,6],[5,6]], [[1,3],[3,3]], [[7,5],[6,6]], [[0,5],[1,4]] [[7,6],[5,5]]*/
/*{
  move: 1,
  from: [6,3],
  to: [4,3]
}, {
  move: 2,
  from: [0,6],
  to: [2,5]
}, {
  move: 3,
  from: [6,2],
  to: [4,2]
}, {
  move: 4,
  from: [1,4],
  to: [2,4]
}, {
  move: 5,
  from: [6,6],
  to: [5,6]
}, {
  move: 6,
  from: [1,3],
  to: [3,3]
}, {
  move: 7,
  from: [7,5],
  to: [6,6]
}, {
  move: 8,
  from: [0,5],
  to: [1,4]
}, {
  move: 9,
  from: [7,6],
  to: [5,5]
}*/

// [6,3],[0,6],[6,2],[1,4],[6,6],[1,3],[7,5],[0,5],[7,6] ],//from
// [ [4,3],[2,5],[4,2],[2,4],[5,6],[3,3],[6,6],[1,4],[5,5] ] //to

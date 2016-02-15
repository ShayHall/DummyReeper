var doubleArray = [];
var memory_values = [];
var memory_tiles_ids = [];
var memory_array =[];
var tiles_flipped = 0;

angular.module('memory',[])
.controller('baconCtrl', function($rootScope, $scope, $http) {
  $http.get("https://api.spoonflower.com:443/design/search?q=bacon&sort=classic&limit=15&substrate=fabric&availability=all")
    .then(function successCallback(response){
      $rootScope.patterns = response.data.results[0].results;
      memory_array = $rootScope.patterns.map(function(a){return a.thumbnail_url});
      doubleArray = memory_array.concat(memory_array);
      Array.prototype.memory_tile_shuffle = function() {
        var i = this.length, j, temp;
        while (--i > 0) {
          j = Math.floor(Math.random() * (i+1));
          temp = this[j];
          this[j] = this[i];
          this[i] = temp;
        }
      }//method for shuffling board
$scope.newBoard = function(){
  tiles_flipped = 0;
  var output = '';
  doubleArray.memory_tile_shuffle();
  for(var i= 0; i < doubleArray.length; i++) {
    output += '<div id="tile_'+i+'" onclick="memoryFlipTile(this, \''+doubleArray[i]+'\')"></div>';
  }
  document.getElementById('memory_board').innerHTML = output;
}//END newBoard()


    }, function errorCallback(response) {
      console.log("ERROR!");
    });

})//baconCtrl

 function memoryFlipTile(tile, val) {
  if(tile.innerHTML == "" && memory_values.length < 2) {
    tile.innerHTML = '<div style="background-image:url('+val+'); height: 6em;"/>';
    if(memory_values.length == 0) {
      memory_values.push(val);
      memory_tiles_ids.push(tile.id);
    } else if (memory_values.length == 1){
      memory_values.push(val);
      memory_tiles_ids.push(tile.id);
      if(memory_values[0] == memory_values[1]) {
        tiles_flipped += 2;
        //clear both arrays
        memory_values = [];
        memory_tiles_ids = [];
        //check to see if the whole board is cleared
        if(tiles_flipped == doubleArray.length) {
          alert("Board cleared... Click 'Bacon Memory' to play again.");
          document.getElementById('memory_board').innerHTML = "";
        }
      } else {
        function flip2Back(){
          //Flip the 2 tiles back over
          var tile_1 = document.getElementById(memory_tiles_ids[0]);
          var tile_2 = document.getElementById(memory_tiles_ids[1]);
          tile_1.style.background = '#72231f no-repeat';
          tile_1.innerHTML = "";
          tile_2.style.background = '#72231f no-repeat';
          tile_2.innerHTML = "";
          //Clear both arrays
          memory_values = [];
          memory_tiles_ids = [];
        }
        setTimeout(flip2Back, 800);
      }//END else flip2Back()
    }//END if memory_values.length == 0 statement
  }//END big if statement
}//END memoryFlipTile


//adapted from https://www.youtube.com/watch?v=c_ohDPWmsM0

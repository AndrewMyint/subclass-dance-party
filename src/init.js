$(document).ready(function() {
  window.dancers = [];
  window.maxCount = 16;
  window.maxRow=4;

  for(var i =1; i<= window.maxCount; i++){
    $('#s').append($('<div/>', { id: 'div' + i}))
  }
  var count = 0;
  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
   // window ={makeBlinkydancer:fn, makeDancer:fn}
   //console.log(window);
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker   for the kind of dancer we're supposed to make

    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    if (count < window.maxCount){
      count++;
      var boxNumber = count;
      var divId = 'div' + boxNumber;
      var divPos = $('#'+divId).position();
      var dancer = new dancerMakerFunction(divPos.top + 70,divPos.left + 70,Math.random() * 1000);
      window.dancers.push({box:boxNumber,item:dancer});
    }
    $('#s').append(dancer.$node);
  });

  $('#btnLineUp').on('click', function(event){
    if ($(this).text() === 'Line Up'){
      $(this).text("Go back");
      for (let i = 0; i < window.dancers.length; i++){
        let rowNumber = Math.ceil(window.dancers[i].box / 4);
        let boxNumber = (rowNumber-1)* 4 + rowNumber;
        let divId = 'div' + boxNumber;
        let divPos = $('#'+divId).position();
        console.log('rowNumber' +rowNumber, 'divNumber' + boxNumber);
        window.dancers[i].item.setPosition(divPos.top + 70, divPos.left + 70);
      }
    }
    else {
      $(this).text("Line Up");
      for (let i = 0; i < window.dancers.length; i++){
        let divId = 'div' + window.dancers[i].box;
        let divPos = $("#"+divId).position();
        window.dancers[i].item.setPosition(divPos.top + 70, divPos.left + 70);
      }
    }
  });
  var interaction =function() {
    for (let i = 0; i < window.dancers.length; i += 2){
      var divPos1 = window.dancers[i].item.$node.position();
      var divPos2 = window.dancers[i+1].item.$node.position();
      window.dancers[i].item.setPosition(divPos2.top , divPos2.left);
      window.dancers[i+1].item.setPosition(divPos1.top, divPos1.left);
    }
  }
  $('#btnInteract').on('click', function(event){
    interaction();
  });
});
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


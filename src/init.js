$(document).ready(function() {
  window.dancers = [];
  window.maxCount = 16;
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

    /* var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    ); */
    if (count < window.maxCount){
      count++;
      var divId = 'div' + count;
      var divPos = $('#'+divId).position();
      //console.log(dancerMakerFunction);
      var dancer = new dancerMakerFunction(divPos.top + 60,divPos.left + 60,Math.random() * 1000);
      window.dancers.push({div:divId,item:dancer});

      $('body').append(dancer.$node)
    }

    //$('body').append(dancer.$node);
  });
});


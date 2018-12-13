var zoomingDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};
zoomingDancer.prototype = Object.create(makeDancer.prototype);
zoomingDancer.prototype.constructor = zoomingDancer;

zoomingDancer.prototype.step = function() {
  //makeDancer.prototype.step.call(this);
  // var style= window.getComputedStyle(this.$node);
  // console.log(style);
   /* var styleSettings = {
    border: border * 2
  }; */
  //this.$node.css('border');
  debugger;
  var border = this.$node.css('border');
  console.log(this.$node.css('border-width'));
};

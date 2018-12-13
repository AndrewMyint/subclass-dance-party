var zoomingDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this._big = false;
};
zoomingDancer.prototype = Object.create(makeDancer.prototype);
zoomingDancer.prototype.constructor = zoomingDancer;

zoomingDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  // var style= window.getComputedStyle(this.$node);
  // console.log(style);
  var spanClass= this._big? 'smallCircle':'bigCircle';
  this._big=!this._big;

  this.$node[0].className =spanClass;
  //this.$node[0].css(styleSettings);
  //debugger;
  /* var style = window.getComputedStyle(this.$node[0]);
  var border = this.$node.css('border');
  console.log(style); */
 ///console.log(this.$node.css('border-width'));
};

var zoomingDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, 1000);
  this.$node[0].className ='bigCircle';
  this._big = false;
};
zoomingDancer.prototype = Object.create(makeDancer.prototype);
zoomingDancer.prototype.constructor = zoomingDancer;

zoomingDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);

  var bigSize = {
    border:'70px solid blueviolet'
  };
  var smallSize = {
    border:'10px solid blueviolet'
  };

  this.$node.css(this._big? smallSize:bigSize);
  this._big=!this._big;

};

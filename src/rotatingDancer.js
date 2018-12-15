var rotatingDancer = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, 1000);
  this.color = false;
  this.$node[0].className ='rotated';
  //debugger;
  this.degree=15;
}

rotatingDancer.prototype = Object.create(makeDancer.prototype);
rotatingDancer.prototype.constructor = rotatingDancer;
rotatingDancer.prototype.step = function () {
  makeDancer.prototype.step.call(this);
}
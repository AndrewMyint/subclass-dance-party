var rotatingDancer = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, 1000);
  this.color = false;
  var div = $('<div class = "rotateDiv"></div>');
  this.$node[0].className ='rotated';
  this.$node.append(div);
  //debugger;
  this.degree=15;
}

rotatingDancer.prototype = Object.create(makeDancer.prototype);
rotatingDancer.prototype.constructor = rotatingDancer;
rotatingDancer.prototype.step = function () {
  makeDancer.prototype.step.call(this);

}
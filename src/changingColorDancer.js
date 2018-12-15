var changingColorDancer = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this._color = false;
  //this.degree=15;
  this.$node[0].className ='changeColor';
}

changingColorDancer.prototype = Object.create(makeDancer.prototype);
changingColorDancer.prototype.constructor = changingColorDancer;
changingColorDancer.prototype.step = function () {
  makeDancer.prototype.step.call(this);

  var styleSetting ={
       borderColor: this.getRandomColor()
     }
  this.$node.css(styleSetting);
}

changingColorDancer.prototype.getRandomColor =function() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
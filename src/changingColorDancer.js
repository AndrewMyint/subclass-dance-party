var changingColorDancer = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.color = false;
  //this.degree=15;
  //this.$node[0].className ='rotated';
}

changingColorDancer.prototype = Object.create(makeDancer.prototype);
changingColorDancer.prototype.constructor = changingColorDancer;
changingColorDancer.prototype.step = function () {
  makeDancer.prototype.step.call(this);
   var spanClass= this._color? 'smallCircle':'changeColor';
  this._color=!this._color;

  this.$node[0].className =spanClass;
  // if (this.degree < 180) {
  //   this.degree +=15;
  // } else {this.degree =0; }

  // var styleSetting ={
  //   transform: 'rotate('+this.degree+'deg)'
  // }
  // this.$node.css(styleSetting);
}
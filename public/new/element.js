/* global idStore */

var Element = function(coordObj, color) {
  this.element = document.createElement('div');
  this.element.id = idStore.create();
  this.element.style.position = 'absolute';
  this.element.style.backgroundColor = color;

  this.y = coordObj.y;
  this.x = coordObj.x;
  this.width = coordObj.width;
  this.height = coordObj.height;
};

Element.prototype.render = function() {
  this.element.style.top = this.y + 'px';
  this.element.style.left = this.x + 'px';
  this.element.style.width = this.width + 'px';
  this.element.style.height = this.height + 'px';
};
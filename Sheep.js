'use strict';

function Sheep(name) {
  this.name = name
}

function Pen() {
  this.pen = []
}

Pen.prototype.insert = function (sheep) {
  return this.pen.push(sheep);
};

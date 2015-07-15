var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var squareArray = [];
var circleArray = [];
canvas.addEventListener('click', on_canvas_click);
var squareChange = document.getElementById('squareChange');
var circleChange = document.getElementById('circleChange');


function Shape(x, y, w, color) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.color = color;
}

function Square(x, y, w, color) {
  Shape.call(this, x, y, w, color)
}

Square.prototype = new Shape();

Square.prototype.draw = function () {
  ctx.beginPath();
  ctx.fillStyle= this.color;
  ctx.rect(this.x, this.y, this.w*2, this.w*2);
  ctx.fill();
}

Square.prototype.colorChange = function () {
  ctx.beginPath();
  ctx.fillStyle=  document.getElementById('color').value;
  ctx.rect(this.x, this.y, this.w*2, this.w*2);
  ctx.fill();
}

squareChange.addEventListener('click', function () {
  for (var i = 0; i < squareArray.length; i++) {
    squareArray[i].colorChange();
  }
})

Square.prototype.colorChange = function () {
  ctx.beginPath();
  ctx.fillStyle=  document.getElementById('color').value;
  ctx.rect(this.x, this.y, this.w*2, this.w*2);
  ctx.fill();
}

squareChange.addEventListener('click', function () {
  for (var i = 0; i < squareArray.length; i++) {
    squareArray[i].colorChange();
  }
})

function Circle(x, y, w, color) {
  Shape.call(this, x, y, w, color);
}

Circle.prototype = new Shape();

Circle.prototype.draw = function () {
  ctx.beginPath();
  ctx.fillStyle= this.color;
  ctx.arc(this.x, this.y, this.w, 0, Math.PI*2, false);
  ctx.fill();
}

Circle.prototype.circChange = function () {
  ctx.beginPath();
  ctx.fillStyle=  document.getElementById('color').value;
  ctx.arc(this.x, this.y, this.w, 0, Math.PI*2, false);
  ctx.fill();
}

circleChange.addEventListener('click', function () {
  for (var i = 0; i < circleArray.length; i++) {
    circleArray[i].circChange();
  }
})

function on_canvas_click(ev) {
    var color = document.getElementById('color').value;
    var x = ev.clientX - canvas.offsetLeft;
    var y = ev.clientY - canvas.offsetTop;
    var w = document.getElementById('width').value;
    var shapeChoice = document.getElementsByTagName('select')[0].value;
    if(shapeChoice === 'circle'){
    var circle = new Circle(x, y, w, color)
    circle.draw();
    circleArray.push(circle);
    } else {
    var square = new Square(x,y,w,color)
    square.draw();
    squareArray.push(square);
    }
    console.log(circleArray);
}

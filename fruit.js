function Fruit() {
  this.x;
  this.y;
  this.tail = [];
  scale = 25;

  this.pickLocation = function () {
    this.y = (Math.floor(Math.random() * columns - 1) + 1) * scale;
    this.x = (Math.floor(Math.random() * rows - 1) + 1) * scale;
  }

  var imgf = new Image();

  this.draw = function () {
    imgf.onload = this.draw;
    ctx.drawImage(imgf, this.x, this.y, scale, scale);
  }

  imgf.src = "img/fruit.png";
}

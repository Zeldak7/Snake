function Fruit() {
  this.x;
  this.y;
  this.tail = [];
  scale = 25;

  this.pickLocation = function () {
    var xx;
    var yy;
    yy = (Math.floor(Math.random() * columns - 1) + 1) * scale;
    xx = (Math.floor(Math.random() * rows - 1) + 1) * scale;

    for (i=0; i<50; i++){
      if (xx==block.xarr[i] && yy==block.yarr[i]){
         this.pickLocation();
      } else {
        this.y=yy;
        this.x=xx;
      }
    }
  }

  var imgf = new Image();
   this.draw = function () {
    imgf.onload = this.draw;
    ctx.drawImage(imgf, this.x, this.y, scale, scale);
  }
  imgf.src = "img/fruit.png";
}

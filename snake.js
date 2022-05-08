function Snake() {
	this.x = 150;
	this.y = 150;
	this.xspeed = scale * 1;
	this.yspeed = 0;
	this.total = 0;
	this.tail = [];
	var hscore = 0;
	var imgt = new Image();
	var imgh = new Image();
	imgh.src = "img/head.png";

	this.draw = function () {

		imgh.onload = this.draw;
		imgt.onload = this.draw;

		for (let i = 0; i < this.tail.length; i++) {
			ctx.drawImage(imgh, this.tail[i].x, this.tail[i].y, scale, scale);
		}
		ctx.drawImage(imgh, this.x, this.y, scale, scale);
	}
	this.update = function () {

		for (var i = 0; i < this.tail.length - 1; i++) {
			this.tail[i] = this.tail[i + 1];
		}
		this.tail[this.total - 1] = { x: this.x, y: this.y };
		this.x = this.x + this.xspeed;
		this.y = this.y + this.yspeed;

	}
	let directionl = "Right";
	this.changeDirection = function (direction) {

		switch (direction) {
			case 'Up':
				this.xspeed = 0;
				this.yspeed = -scale * 1;
				direction1 = "UP";
				break;
			case 'Down':
				this.xspeed = 0;
				this.yspeed = scale * 1;
				direction1 = "DOWN";
				break;
			case 'Left':
				this.xspeed = -scale * 1;
				this.yspeed = 0;
				direction1 = "LEFT";
				break;
			case 'Right':
				this.xspeed = scale * 1;
				this.yspeed = 0;
				direction1 = "Right";
				break;
		}
	}
	this.eat = function (fruit) {
		if (this.x == fruit.x && this.y == fruit.y) { //Wenn frucht aufgehoben wird
			this.total++;
			return true;
		}
		return false;

	}

	this.checkCollision = function () {
		for (var i = 0; i < this.tail.length; i++) {

			if (this.x == this.tail[i].x &&
				this.y == this.tail[i].y) {
				this.gameover();
			}
		}
		if (this.x >= canvas.width) {
			this.gameover();
		}
		if (this.y >= canvas.height) {
			this.gameover();
		}
		if (this.x < 0) {
			this.gameover();
		}
		if (this.y < 0) {
			this.gameover();
		}
         
        for (i=0; i<50; i++){
              if (this.x == block.xarr[i] && this.y == block.yarr[i]){
				this.gameover();  
			  }   
		}
	}
	this.gameover = function () {
		this.total = 0;
		this.tail = [];
		this.x = 0;
		this.y = 0;
		this.xspeed = scale * 1;
		this.yspeed = 0;
		fruit.pickLocation();
		delete block;
		block = new Block();
		alert("Game over");
	}
}






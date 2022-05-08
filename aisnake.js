function Aisnake() {
	this.x = 0;
	this.y = 0;
	this.total = 0;
	this.tail = [];
	var hscore = 0;
	var imgt = new Image();
	var imgh = new Image();
	imgh.src = "img/messi.png";
	imgt.src = "img/aitail.png";

	this.draw = function () {

		imgh.onload = this.draw;
		imgt.onload = this.draw;

		for (let i = 0; i < this.tail.length; i++) {
			ctx.drawImage(imgt, this.tail[i].x, this.tail[i].y, scale, scale);
		}
		ctx.drawImage(imgh, this.x, this.y, scale, scale);
	}

	this.update = function () {
		for (var i = 0; i < this.tail.length - 1; i++) {
			this.tail[i] = this.tail[i + 1];
		}

		this.tail[this.total] = { x: this.x, y: this.y };
		//this.x = this.x+this.xspeed;
		//this.y = this.y+this.yspeed;
	}


	this.eat = function (fruit) {
		if (this.x == fruit.x && this.y == fruit.y) { //Wenn frucht aufgehoben wird
			this.total++;
			return true;
		}
		return false;
	}

	this.eatsnake = function (snake) {

		for (var i = 0; i < snake.tail.length; i++) {
			if (this.x == snake.tail[i].x &&
				this.y == snake.tail[i].y) {
				return true
			}
			return false;

		}
	}

	this.checkCollision = function () {
		for (var i = 0; i < this.tail.length - 1; i++) {

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

		if (this.x < 0 ) {	
			this.gameover();
		}

		if (this.y < 0 ) {
			this.gameover();
		}
	}


	this.gameover = function () {
		this.total = 0;
		this.tail = [];
		this.x = 0;
		this.y = 0;

	}

	this.move = function () {

		if (fruit.x - this.x >= fruit.y - this.y) {   // Wenn der abstand zur frucht auf der x achse größer ist als der auf der y

			if (fruit.x > this.x) {		   //Wenn die frucht rechts oder genau auf mir ist 
				this.x = this.x + scale;         //damm gehe nach rechts
			} else {
				if (fruit.y < this.y) {
					this.y = this.y - scale;   //gehe nach oben
				}
			}

		} else {

			if (fruit.y > this.y) {      // wenn die frucht unter mir oder auf mir ist dann
				this.y = this.y + scale;       // dann gehe nach unten
			} else {

				if (fruit.x < this.x) {    // wenn die frucht links von mir ist
					this.x = this.x - scale; // gehe links

				}
			}
		}

	}
}































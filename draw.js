const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
var scale = 25;
var gamespeed = 150;
const rows = 500 / scale;
const columns = 500 / scale;
var snake;
var z=0;

function setup() {
	snake = new Snake();
	fruit = new Fruit();
    block = new Block();
	fruit.pickLocation();

	window.setInterval(() => {

		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.drawImage(background, 0, 0);
		fruit.draw();
		snake.update();
		snake.draw();
		block.draw();

		if (snake.eat(fruit)) {
			fruit.pickLocation();
			block.addBlock();
		}
		snake.checkCollision();
		document.querySelector('.score')
			.innerText = snake.total;
	}, gamespeed);

}

window.addEventListener('keydown', ((evt) => {
	const direction = evt.key.replace('Arrow', '');
	snake.changeDirection(direction);
}));

function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}





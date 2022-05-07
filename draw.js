const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
var scale = 25;
var gamespeed = 150;
const rows = 500 / scale;
const columns = 500 / scale;
var snake;

showHighScores();




function setup() {
	snake = new Snake();
	fruit = new Fruit();
	aisnake = new Aisnake();
	fruit.pickLocation();




	window.setInterval(() => {


		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.drawImage(background, 0, 0);
		fruit.draw();
		snake.update();
		aisnake.update();
		snake.draw();
		aisnake.draw();
		aisnake.move();

		if (snake.eat(fruit)) {
			fruit.pickLocation();

		}

		if (aisnake.eat(fruit)) {
			fruit.pickLocation();
		}

		if (snake.eatsnake(aisnake)) {
			snake.gameover();
		}

		if (aisnake.eatsnake(snake)) {
			aisnake.gameover();
		}

		aisnake.checkCollision();
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





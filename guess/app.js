let randomNumber = Math.trunc(Math.random() * 30 + 1);
let score = 4;
let highScore = 0;
console.log(randomNumber);

const between1To5 = document.querySelector('.one_five');
const between6To10 = document.querySelector('.six_ten');
const between11To15 = document.querySelector('.eleven_fifteen');
const between16To20 = document.querySelector('.sixteen_twenty');
const between21To25 = document.querySelector('.twentyone_twentyfive');
const between26To30 = document.querySelector('.twentysix_thirty');

between1To5.addEventListener('click', function () {
	if (score > 0) {
		if (
			randomNumber === 1 ||
			randomNumber === 2 ||
			randomNumber === 3 ||
			randomNumber === 4 ||
			randomNumber === 5
		) {
			document.querySelector('.greet').textContent = 'You Win';
			document.querySelector('body').style.background = '#fff';
			document.querySelector('.number').textContent = randomNumber;

			if (score > highScore) {
				highScore = score;
				document.querySelector('.high__score_num').textContent = highScore;
			}
		} else {
			if (score > 1) {
				document.querySelector('.greet').textContent = 'Number Not Match';
				score--;
				document.querySelector('.score_num').textContent = score;
			} else {
				document.querySelector('.greet').textContent = 'You lose the game';
				score--;
				document.querySelector('.score_num').textContent = score;
			}
		}
	}
});

between6To10.addEventListener('click', function () {
	if (score > 0) {
		if (
			randomNumber === 6 ||
			randomNumber === 7 ||
			randomNumber === 8 ||
			randomNumber === 9 ||
			randomNumber === 10
		) {
			document.querySelector('.greet').textContent = 'You Win';
			document.querySelector('body').style.background = '#fff';
			document.querySelector('.number').textContent = randomNumber;

			if (score > highScore) {
				highScore = score;
				document.querySelector('.high__score_num').textContent = highScore;
			}
		} else {
			if (score > 1) {
				document.querySelector('.greet').textContent = 'Number Not Match';
				score--;
				document.querySelector('.score_num').textContent = score;
			} else {
				document.querySelector('.greet').textContent = 'You lose the game';
				score--;
				document.querySelector('.score_num').textContent = score;
			}
		}
	}
});

between11To15.addEventListener('click', function () {
	if (score > 0) {
		if (
			randomNumber === 11 ||
			randomNumber === 12 ||
			randomNumber === 13 ||
			randomNumber === 14 ||
			randomNumber === 15
		) {
			document.querySelector('.greet').textContent = 'You Win';
			document.querySelector('body').style.background = '#fff';
			document.querySelector('.number').textContent = randomNumber;

			if (score > highScore) {
				highScore = score;
				document.querySelector('.high__score_num').textContent = highScore;
			}
		} else {
			if (score > 1) {
				document.querySelector('.greet').textContent = 'Number Not Match';
				score--;
				document.querySelector('.score_num').textContent = score;
			} else {
				document.querySelector('.greet').textContent = 'You lose the game';
				score--;
				document.querySelector('.score_num').textContent = score;
			}
		}
	}
});

between16To20.addEventListener('click', function () {
	if (score > 0) {
		if (
			randomNumber === 16 ||
			randomNumber === 17 ||
			randomNumber === 18 ||
			randomNumber === 19 ||
			randomNumber === 20
		) {
			document.querySelector('.greet').textContent = 'You Win';
			document.querySelector('body').style.background = '#fff';
			document.querySelector('.number').textContent = randomNumber;

			if (score > highScore) {
				highScore = score;
				document.querySelector('.high__score_num').textContent = highScore;
			}
		} else {
			if (score > 1) {
				document.querySelector('.greet').textContent = 'Number Not Match';
				score--;
				document.querySelector('.score_num').textContent = score;
			} else {
				document.querySelector('.greet').textContent = 'You lose the game';
				score--;
				document.querySelector('.score_num').textContent = score;
			}
		}
	}
});

between21To25.addEventListener('click', function () {
	if (score > 0) {
		if (
			randomNumber === 21 ||
			randomNumber === 22 ||
			randomNumber === 23 ||
			randomNumber === 24 ||
			randomNumber === 25
		) {
			document.querySelector('.greet').textContent = 'You Win';
			document.querySelector('body').style.background = '#fff';
			document.querySelector('.number').textContent = randomNumber;

			if (score > highScore) {
				highScore = score;
				document.querySelector('.high__score_num').textContent = highScore;
			}
		} else {
			if (score > 1) {
				document.querySelector('.greet').textContent = 'Number Not Match';
				score--;
				document.querySelector('.score_num').textContent = score;
			} else {
				document.querySelector('.greet').textContent = 'You lose the game';
				score--;
				document.querySelector('.score_num').textContent = score;
			}
		}
	}
});

between26To30.addEventListener('click', function () {
	if (score > 0) {
		if (
			randomNumber === 26 ||
			randomNumber === 27 ||
			randomNumber === 28 ||
			randomNumber === 29 ||
			randomNumber === 30
		) {
			document.querySelector('.greet').textContent = 'You Win';
			document.querySelector('body').style.background = '#fff';
			document.querySelector('.number').textContent = randomNumber;

			if (score > highScore) {
				highScore = score;
				document.querySelector('.high__score_num').textContent = highScore;
			}
		} else {
			if (score > 1) {
				document.querySelector('.greet').textContent = 'Number Not Match';
				score--;
				document.querySelector('.score_num').textContent = score;
			} else {
				document.querySelector('.greet').textContent = 'You lose the game';
				score--;
				document.querySelector('.score_num').textContent = score;
			}
		}
	}
});

document.querySelector('.playAgain').addEventListener('click', function () {
	randomNumber = Math.trunc(Math.random() * 30 + 1);
	score = 4;

	document.querySelector('.score_num').textContent = score;
	document.querySelector('.greet').textContent = 'Lets play again';
	document.querySelector('body').style.background = '#ddd';
	document.querySelector('.number').textContent = '?';
});

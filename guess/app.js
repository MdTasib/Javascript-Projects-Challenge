const randomNumber = Math.trunc(Math.random() * 30 + 1);
console.log(randomNumber);

const between1To5 = document.querySelector('.one_five');
const between6To10 = document.querySelector('.six_ten');
const between11To15 = document.querySelector('.eleven_fifteen');
const between16To20 = document.querySelector('.sixteen_twenty');
const between21To25 = document.querySelector('.twentyone_twentyfive');
const between26To30 = document.querySelector('.twentysix_thirty');

between1To5.addEventListener('click', function () {
	if (
		randomNumber === 1 ||
		randomNumber === 2 ||
		randomNumber === 3 ||
		randomNumber === 4 ||
		randomNumber === 5
	) {
		document.querySelector('.greet').textContent = 'You Win';
	} else {
		document.querySelector('.greet').textContent = 'Number Not Match';
	}
});

between6To10.addEventListener('click', function () {
	if (
		randomNumber === 6 ||
		randomNumber === 7 ||
		randomNumber === 8 ||
		randomNumber === 9 ||
		randomNumber === 10
	) {
		document.querySelector('.greet').textContent = 'You Win';
	} else {
		document.querySelector('.greet').textContent = 'Number Not Match';
	}
});

between11To15.addEventListener('click', function () {
	if (
		randomNumber === 11 ||
		randomNumber === 12 ||
		randomNumber === 13 ||
		randomNumber === 14 ||
		randomNumber === 15
	) {
		document.querySelector('.greet').textContent = 'You Win';
	} else {
		document.querySelector('.greet').textContent = 'Number Not Match';
	}
});

between16To20.addEventListener('click', function () {
	if (
		randomNumber === 16 ||
		randomNumber === 17 ||
		randomNumber === 18 ||
		randomNumber === 19 ||
		randomNumber === 20
	) {
		document.querySelector('.greet').textContent = 'You Win';
	} else {
		document.querySelector('.greet').textContent = 'Number Not Match';
	}
});

between21To25.addEventListener('click', function () {
	if (
		randomNumber === 21 ||
		randomNumber === 22 ||
		randomNumber === 23 ||
		randomNumber === 24 ||
		randomNumber === 25
	) {
		document.querySelector('.greet').textContent = 'You Win';
	} else {
		document.querySelector('.greet').textContent = 'Number Not Match';
	}
});

between26To30.addEventListener('click', function () {
	if (
		randomNumber === 26 ||
		randomNumber === 27 ||
		randomNumber === 28 ||
		randomNumber === 29 ||
		randomNumber === 30
	) {
		document.querySelector('.greet').textContent = 'You Win';
	} else {
		document.querySelector('.greet').textContent = 'Number Not Match';
	}
});

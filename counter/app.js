// set initial count
let count = 0;

// select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function (btn) {
	btn.addEventListener('click', function (e) {
		const selectedBtn = e.currentTarget.classList;

		// increment, decrease and reset
		if (selectedBtn.contains('decrease')) {
			count--;
		} else if (selectedBtn.contains('increase')) {
			count++;
		} else {
			count = 0;
		}

		// color changes
		if (count > 0) {
			value.style.color = 'green';
		} else if (count < 0) {
			value.style.color = 'red';
		} else {
			value.style.color = 'black';
		}

		value.textContent = count;
	});
});

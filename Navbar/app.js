// select element
const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function () {
	// console.log(links.classList);
	// console.log(links.classList.contains("random"));
	// console.log(links.classList.contains("links"));
	// useing add && remove method
	/*
	if (links.classList.contains('show-links')) {
		links.classList.remove('show-links');
	} else {
		links.classList.add('show-links');
  }
  */

	// useing toggle method
	links.classList.toggle('show-links');
});

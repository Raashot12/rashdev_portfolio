const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});


//Find the first ascending integer that does not exist in an array of numbers.

Ex: [1, 2, 3, 5, 9, 2, 3]
//You should find 4.

//How do you do it ?

// const sortedArr = arr.sort()
// const nonRepeatedNos = new Set( sortedArr )
// const array = [...nonRepeatedNos]
// const result = array.reduce( ( p, c, i ) => {
// 	if ( c !== i ) {
// 		return i
// 	}
// } )
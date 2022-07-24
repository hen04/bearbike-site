"use strict";

window.onload = function () {
	let page = document.querySelector('body');
	let menuBtn = document.querySelector('.js-menu-btn');

	menuBtn.addEventListener('click', function () {
		page.classList.toggle('menu-opened');
	});

	let smoothLinks = document.querySelectorAll('.header-menu a[href^="#"]');
	for (let smoothLink of smoothLinks) {
		smoothLink.addEventListener('click', function (e) {
			e.preventDefault();
			let id = smoothLink.getAttribute('href');

			document.querySelector(id).scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});

			page.classList.toggle('menu-opened');
		});
	}

}

const imagesLoaded = require('imagesloaded')

//Preload images
const preloadImages = (selector = 'img') => {
	return new Promise((resolve) => {
		imagesLoaded(document.querySelectorAll(selector), {background: true}, resolve);
	});
};

preloadImages('.image').then(() => document.body.classList.remove('loading'));
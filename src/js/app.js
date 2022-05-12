import { gsap } from 'gsap'
import noise from './noise.js'
import './loader.js'

noise();


//image hover 
const images = document.querySelectorAll('.image')
const text = document.querySelector('.titleWrap h1 span')
// const chars = text.querySelectorAll('.word > .char, .whitespace')

images.forEach( image => {
	image.addEventListener("mouseenter", () => {
		timeline.play()
		text.innerText = image.dataset.text
	})

	image.addEventListener("mouseleave", () => {
		timeline.reverse()
		text.innerText = 'galerie'
	})
})

//Gsap animation

const timeline = gsap.timeline({paused: true})
	.to(text, {
		ease: 'Power3.easeIn',
		duration: 0.2,
		x: '-20%',
		opacity: 0
	})
	.to(text, {
		ease: 'Power3.easeIn',
		duration: 0.2,
		x: '0%',
		opacity: 1
	})
















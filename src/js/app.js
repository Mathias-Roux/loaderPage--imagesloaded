import { gsap } from 'gsap'
import noise from './noise.js'
import './loader.js'

noise();


//image hover 
const images = document.querySelectorAll('.image')
const text = document.querySelector('.titleWrap h1 span')
// const chars = text.querySelectorAll('.word > .char, .whitespace')

//Gsap animation

const timeline = gsap.timeline({paused: true})
	.to(text, {
		ease: 'Power3.easeInOut',
		duration: 0.3,
		opacity: 0
	})
	.to(text, {
		ease: 'Power3.easeInOut',
		duration: 0.1,
		opacity: 1
	})


images.forEach( image => {
	image.addEventListener("mouseenter", () => {
		timeline.play()
		setTimeout(() => {
			text.innerText = image.dataset.text
		}, 200)
	})

	image.addEventListener("mouseleave", () => {
		timeline.reverse()
		setTimeout(() => {
			text.innerText = 'galerie'
		}, 200)
	})
})













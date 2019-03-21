const slider = document.querySelectorAll('.holder');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
let auto = true;
let interval;
let intervalTime = 5000;

const nextBtn = () => {
	const active = document.querySelector('.active');
	active.classList.remove('active');
	if(active.nextElementSibling) {
		active.nextElementSibling.classList.add('active');
	}
	else {
		slider[0].classList.add('active');
	}
}

next.addEventListener('click', e => {
	nextBtn();
	if(auto) {
		clearInterval(interval);
		interval = setInterval(nextBtn, intervalTime);
	}
})


const prevBtn = () => {
	const active = document.querySelector('.active');
	active.classList.remove('active');
	if(active.previousElementSibling) {
		active.previousElementSibling.classList.add('active');
	}
	else {
		slider[slider.length - 1].classList.add('active');
	}
}
prev.addEventListener('click', e => {
	nextBtn();
	if(auto) {
		clearInterval(interval);
		interval = setInterval(nextBtn, intervalTime);
	}
})

if(auto) {
	interval = setInterval(nextBtn, intervalTime);
}
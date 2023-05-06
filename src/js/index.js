let siema;

window.addEventListener("load", () => {
	document.querySelector("#email-form__email").addEventListener("focus", hideLabelOnFocus);

	const header = document.querySelector(".header");
	window.addEventListener("scroll", () => {
		if(window.scrollY > 0) {
			header.classList.add("header_scroll");
		}
		else {
			header.classList.remove("header_scroll")
		}
	})

	document.querySelector(".burger").onclick = openMenu;

	siema = new Siema({
		duration: 500,
		onChange() {
			document.querySelector(".slider__button_active").classList.remove("slider__button_active");
			document.querySelector(`.slider__button[data-index="${siema.currentSlide + 1}"]`).classList.add("slider__button_active");
			sliderAutoHeight();
		}
	});

	const sliderButtons = document.querySelectorAll(".slider__button");

	for (let button of sliderButtons) {
		button.onclick = (e) => {
			document.querySelector(".slider__button_active").classList.remove("slider__button_active");
			e.target.classList.add("slider__button_active");

			siema.goTo(e.target.getAttribute("data-index") - 1);
			sliderAutoHeight();
		}
	}

	sliderAutoHeight();
})

function hideLabelOnFocus({target}) {
	const label = target.parentElement.querySelector("label");
	label.classList.add("visibly-hidden");

	const returnLabel = () => {
		if(target.value === "") {
			label.classList.remove("visibly-hidden");
		}
	}

	target.addEventListener("blur", returnLabel);
}

function openMenu() {
	const burger = document.querySelector(".burger");
	burger.classList.add("burger_active");

	const menu = document.querySelector(".header__nav");
	menu.classList.add("header__nav_active");

	document.body.classList.add("lock");

	burger.onclick = () => {
		burger.classList.remove("burger_active");
		menu.classList.remove("header__nav_active");

		document.body.classList.remove("lock");

		burger.onclick = openMenu;
	};
}

function sliderAutoHeight() {
	const currentSlide = document.querySelector(`.slider__item[data-index="${siema.currentSlide + 1}"]`);
	document.querySelector(".siema").style.height = `${currentSlide.offsetHeight}px`;
}
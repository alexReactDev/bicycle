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
window.addEventListener("load", () => {
	document.querySelector("#email-form__email").addEventListener("focus", hideLabelOnFocus);
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
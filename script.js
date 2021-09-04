const section = document.querySelector("#colors");
console.log(section);
section.addEventListener("click", (e) => {
	const clickElement = e.target;
	// document.body.style.backgroundColor = clickElement.dataset.hex;
	document.body.style.backgroundColor = clickElement.getAttribute("data-hex");
});

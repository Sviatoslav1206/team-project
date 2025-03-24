var myBurgerIcon = document.getElementById("burger-icon");
var btnOpenMenu = document.getElementById("open_menu");

var myModalMenu = document.getElementById("modal_menu");

var bodyElement = document.body;


function toggleClass(objForm) {
	return function () {
		objForm.classList.toggle("is-open");
		bodyElement.classList.toggle("locked");

		if (objForm.classList.contains("is-open")) {
			myBurgerIcon.setAttribute("href", "/img/sprite.svg#icon-close-iscon");
		} else {
			myBurgerIcon.setAttribute("href", "/img/sprite.svg#icon-menu-icon");
		}

	};
}

btnOpenMenu.addEventListener("click", toggleClass(myModalMenu));

function changeThemeStyle() {
	document.body.classList.toggle("light_theme");
	let img_field = document.getElementById("icon-switch");
	if (document.body.classList.contains("light_theme")) {
		img_field.setAttribute("href", "/img/sprite.svg#icon-facebook-icon");
		//img_field.setAttribute("fill", "--var(text-color)");
	} else {
		img_field.setAttribute("href", "/img/sprite.svg#icon-moon");
		//img_field.setAttribute("alt", "Dark theme");
	}
}

document.getElementById("theme-switch").addEventListener("click", () => changeThemeStyle());
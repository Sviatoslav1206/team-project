var myBurgerIcon = document.getElementById("burger-icon");
var btnOpenMenu = document.getElementById("open_menu");

var myModalMenu = document.getElementById("modal_menu");

function toggleClass(objForm) {
	console.log(objForm);

	return function () {
		objForm.classList.toggle("is-open");

		if (objForm.classList.contains("is-open")) {
			myBurgerIcon.setAttribute("href", "/img/sprite.svg#icon-close-iscon");
		} else {
			myBurgerIcon.setAttribute("href", "/img/sprite.svg#icon-menu-icon");
		}

	};
}

btnOpenMenu.addEventListener("click", toggleClass(myModalMenu));
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

var menuLinks = document.querySelectorAll(".mobile-menu-nav-list-item-link, .menu-social-link");

menuLinks.forEach(link => {
	link.addEventListener("click", function () {
		myModalMenu.classList.remove("is-open");
		bodyElement.classList.remove("locked");
		myBurgerIcon.setAttribute("href", "/img/sprite.svg#icon-menu-icon");
	});
});

btnOpenMenu.addEventListener("click", toggleClass(myModalMenu));
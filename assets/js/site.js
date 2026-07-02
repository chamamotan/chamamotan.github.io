(function () {
	var toggle = document.querySelector('[data-nav-toggle]');
	var links = document.querySelectorAll('.nav-links a');

	if (!toggle) {
		return;
	}

	toggle.addEventListener('click', function () {
		document.body.classList.toggle('menu-open');
	});

	links.forEach(function (link) {
		link.addEventListener('click', function () {
			document.body.classList.remove('menu-open');
		});
	});
})();

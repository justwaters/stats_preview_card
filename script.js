const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

function updateThemePreference(e) {
	if (e.matches) {
		document.body.classList.toggle("dark-mode");
	} else {
		document.body.classList.toggle("light-mode");
	}
}

// Initial theme check
updateThemePreference(prefersDarkScheme);

// Add listener for theme change
prefersDarkScheme.addEventListener("change", updateThemePreference);

// Mode toggle button
document.getElementById("mode-button").addEventListener("click", () => {
	document.body.classList.toggle("light-mode");
	document.body.classList.toggle("dark-mode");
});

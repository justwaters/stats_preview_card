const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
const prefersLightScheme = window.matchMedia("(prefers-color-scheme: light)");

function updateThemePreference(e) {
	if (e.matches) {
		// If dark scheme is matched
		document.body.classList.add("dark-mode");
		document.body.classList.remove("light-mode");
	} else {
		// If light scheme is matched
		document.body.classList.add("light-mode");
		document.body.classList.remove("dark-mode");
	}
}

// Initial theme check
updateThemePreference(prefersDarkScheme);

// Add listeners for theme change
prefersDarkScheme.addEventListener("change", updateThemePreference);
prefersLightScheme.addEventListener("change", updateThemePreference);

// Mode toggle button
document.getElementById("mode-button").addEventListener("click", () => {
	if (document.body.classList.contains("dark-mode")) {
		document.body.classList.remove("dark-mode");
		document.body.classList.add("light-mode");
	} else {
		document.body.classList.remove("light-mode");
		document.body.classList.add("dark-mode");
	}
});

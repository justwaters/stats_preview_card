const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
const prefersLightScheme = window.matchMedia("(prefers-color-scheme: light)");

let userTheme = undefined;
let currentTheme = "dark";

function updateThemePreference() {
	if (prefersDarkScheme.matches) {
		console.log("User prefers dark mode");
		userTheme = "dark";
	} else {
		console.log("User prefers light mode");
		userTheme = "light";
	}
	console.log("currentTheme = " + currentTheme);
	console.log("userTheme = " + userTheme);
	if (userTheme !== currentTheme) {
		document.body.classList.toggle("light-mode");
		document.body.classList.toggle("dark-mode");
		console.log("Switched!");
		currentTheme = userTheme;
	}
	console.log("");
	console.log("");
}

updateThemePreference();

// Add listener for theme change
prefersDarkScheme.addEventListener("change", updateThemePreference);

// Mode toggle button
document.getElementById("mode-button").addEventListener("click", () => {
	document.body.classList.toggle("light-mode");
	document.body.classList.toggle("dark-mode");
	if (currentTheme == "dark") {
		currentTheme = "light";
	} else {
		currentTheme = "dark";
	}
});

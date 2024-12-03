# Frontend Mentor - Stats preview card component solution

This is a solution to the [Stats preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Links

- Solution URL: [https://github.com/justwaters/stats_preview_card](https://github.com/justwaters/stats_preview_card)
- Live Site URL: [https://justwaters.github.io/stats_preview_card/](https://justwaters.github.io/stats_preview_card/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- Mobile-first workflow

## Some JavaScript code I'm proud of

```js
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
```

## Author

- Website - [JD Waters](https://justin.1waters.com)
- Frontend Mentor - [@justwaters](https://www.frontendmentor.io/profile/justwaters)
- GitHub - [@justwaters](https://github.com/justwaters)

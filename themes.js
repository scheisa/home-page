let yoda = document.querySelector('.yoda')
let trooper = document.querySelector('.trooper')
let gruvbox = document.querySelector('.gruvbox')
let def = document.querySelector('.default')

const Theme = localStorage.getItem('currentTheme');
updateUI();

function updateUI(){
	if (Theme == "yoda") {
		document.body.style.setProperty("--bg", "#2B2A33")
		document.body.style.setProperty("--accent", "#4a5334")
		document.body.style.setProperty("--second-accent", "#573e37")
		document.getElementsByClassName("image")[0].src = "pictures/yoda.jpg";
	}
	else if (Theme == "trooper") {
		document.body.style.setProperty("--bg", "#2B2A33")
		document.body.style.setProperty("--accent", "white")
		document.body.style.setProperty("--second-accent", "black")
		document.getElementsByClassName("image")[0].src = "pictures/trooper.jpg";
	}
	else if (Theme == "gruvbox") {
		document.body.style.setProperty("--bg", "#2B2A33")
		document.body.style.setProperty("--accent", "#628912")
		document.body.style.setProperty("--second-accent", "#cb8c18")
		document.getElementsByClassName("image")[0].src = "pictures/gruvbox.jpg";
	}
}

function ThemeToggle(theme, strTheme) {
	theme.addEventListener('click' ,()=>{
		localStorage.setItem("currentTheme" , strTheme)
	});
	console.log(strTheme)
}

ThemeToggle(trooper, "trooper");
ThemeToggle(yoda, "yoda");
ThemeToggle(gruvbox, "gruvbox");
ThemeToggle(def, "");

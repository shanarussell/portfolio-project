
//saves the current them in local storage
let theme = localStorage.getItem('theme')

//if there's no theme in local storage, set to light
if(theme == null){
	setTheme('light')
}else{
	setTheme(theme)
}

//dots under the photo
let themeDots = document.getElementsByClassName('theme-dot')


//iterate through the dots
//listen for a click
//set the mode based upon data-mode in html
//set theme to the mode (call the function)
for (var i=0; themeDots.length > i; i++){
	themeDots[i].addEventListener('click', function(){
		let mode = this.dataset.mode
		console.log('Option clicked:', mode)
		setTheme(mode)
	})
}

//sets the theme based on what was clicked
//puts current theme in local storage
function setTheme(mode){
	if(mode == 'light'){
		document.getElementById('theme-style').href = 'default.css'
	}

	if(mode == 'blue'){
		document.getElementById('theme-style').href = 'blue.css'
	}

	if(mode == 'green'){
		document.getElementById('theme-style').href = 'green.css'
	}

	if(mode == 'purple'){
		document.getElementById('theme-style').href = 'purple.css'
	}

	localStorage.setItem('theme', mode)
}

//to fill right side of window
function aboutMeSection(){
	let aboutMeID = document.getElementById("right-html-wrapper");
	aboutMeID.innerHTML ="<h2>About Me</h2>";
}

function skillsSection(){
	let skillsID = document.getElementById("right-html-wrapper");
	skillsID.innerHTML ="<h2>Skills</h2>";
}

function portfolioSection(){
	let portfolioID = document.getElementById("right-html-wrapper");
	portfolioID.innerHTML ="<h2>Portfolio</h2>";
}

function contactSection(){
	let contactID = document.getElementById("right-html-wrapper");
	contactID.innerHTML ="<h2>Contact Me</h2>";
}

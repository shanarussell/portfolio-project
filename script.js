

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
		document.getElementById('theme-style').href = 'light.css'
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
window.onload = function initialHomeSection(){
	let initialHomeID = document.getElementById("right-html-wrapper");
	initialHomeID.innerHTML=initialHomeText;
}

function homeSection(){
	let homeID = document.getElementById("right-html-wrapper");
	homeID.innerHTML=initialHomeText;
}

function aboutMeSection(){
	let aboutMeID = document.getElementById("right-html-wrapper");
	aboutMeID.innerHTML =aboutMeText;
}

function skillsSection(){
	let skillsID = document.getElementById("right-html-wrapper");
	skillsID.innerHTML = skillsText;
}

function portfolioSection(){
	let portfolioID = document.getElementById("right-html-wrapper");
	portfolioID.innerHTML = portfolioText;
}

function contactSection(){
	let contactID = document.getElementById("right-html-wrapper");
	contactID.innerHTML =contactText;
}

let initialHomeText='<h4>INITIAL home content goes here</h4>'

let homeText='<h4>NEW home content goes here</h4>'

let aboutMeText = "<h4>More about me</h4><p>I am a full-stack developer with previous experience spanning IT Support, Educational Technology Administration, and Graphic Design.</p><p>I am currently a member of Merit America's Java Development program. This is a 30-week intensive program focused on Full Stack Web Application Development, including hands-on coursework in Java Development, Client-Server Programming (SQL + Spring), and Frontend Development (Classic Web + React). I will complete this program in Septenber 2022.</p>";

let skillsText= '<h4>TOP EXPERTISE</h4><p>Front end developer with working knowledge about back-end and database technologies and Languages: <a target="_blank" href="SHANA_RUSSELL_RESUME.pdf">Download Resume</a></p><div id="skills"><ul><li>Java</li><li>JavaScript</li><li>React</li><li>SQL</li><li>Postgres</li></ul><ul><li>Redux</li><li>Bootstrap</li><li>Spring Boot</li><li>Adobe CC</li><li>HTML/CSS</li></ul></div>';

let portfolioText='<h4>Portfolio goes here</h4>';

let contactText='<h4>Contact goes here</h4>'
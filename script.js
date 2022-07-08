
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
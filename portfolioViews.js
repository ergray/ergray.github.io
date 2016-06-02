var FrontPage = Backbone.View.extend({

	el: "#anchor",


	events: {
		"click .frontPContainer": "selectView"
	},

	initialize: function(){
		this.render()
	},

	render: function(){
		console.log(this.events);
		$("#anchor").append(
			"<div id='topBar'>"+
				"<h1>Eric Gray - Developer</h1>"+
			"</div>"+
			"<div id='mainContainer'>"+
				"<div class='frontPContainer' id='about'>"+
					"<p class='frontContainer' >About</p>"+
				"</div>"+
				"<div class='frontPContainer' id='adventure'>"+
					"<p class='frontContainer'>Choose Your Own Adventure</p>"+
				"</div>"+
				"<div class='frontPContainer' id='curious'>"+
					"<p class='frontContainer'>Curious Cities</p>"+
				"</div>"+
				"<div class='frontPContainer' id='employee'>"+
					"<p class='frontContainer'>Employee Scheduler for a Small Business</p>"+
				"</div>"+
			"</div>"
			)
	},

	selectView: function(e){
		this.undelegateEvents();
		var userFocus = new UserFocus({focus: e.target.id})
	}	
})

var UserFocus = Backbone.View.extend({

	el: '#anchor',

	events: {
		"click #bottomBar" : "homewards"
	},

	initialize: function(opts){
		$("#mainContainer").children().remove();
		console.log(opts.focus);
		this.render(opts.focus)
	},

	render: function(destination){
		this.showThis(destination)
	},

	showThis: function(destination){
		if (destination === 'about'){
			$("#mainContainer").append(
				"<div id='descriptionOfProject'>"+
					"<p>"+
						"As a developer I have always been something more of a hobbyist. I love "+
						"creating small projects and seeing them run. In 2015 I attended and "+
						"completed a course in Javascript from Portland Code School. Before they "+
						"closed, I also spent time as a teacher's assistant. Currently I am looking "+
						"to increase my skills even further and find work where I can put those "+
						"skills to good use, and beyond the realm of hobby."+
					"</p>"+
						"<ul>I currently have some understanding of the following:"+
						"<li>Javascript</li>"+
						"<li>HTML</li>"+
						"<li>CSS</li>"+
						"<li>Backbone</li>"+
						"<li>Node.js</li>"+
						"<li>jQuery</li>"+
						"<li>SQL</li>"+
						"<li>Github</li>"+
						"<li>SCSS</li>"+
						"</ul>"+
				"</div>"+
				"<div id='bottomBar'><div>Back</div></div>"
			)
			return
		} else if (destination === 'adventure'){
			$("#mainContainer").append(
				"<div id='descriptionOfProject'>"+
					"<p>"+
						"Mundane Hero is an in-browser choose your own adventure game."+
						"It is written in Javascript and utilizes the backbone.js framework "+
						"as well as jQuery. The logic was written by myself and the basic design "+
						"is my own layout. The CSS was was written with assistance of Gregor "+
						"Holzmann."+
					"</p>"+
					"<a href='http://www.htmlsouls.com/SuperheroCYOA/superhero.html'><img src='./images/CYOACap.png'></a>"+
					"<p>"+
						"Although a relatively simple idea, Mundane Hero has a twist in that "+
						"prior to beginning the game, the player is asked to answer a series of "+
						"questions. These questions determine certain attributes the player has "+
						"and consequently, open up pathways in-game that may not be available "+
						"otherwise. This makes multiple playthroughs feel a bit more unique."+
					"</p>"+
					"<p>"+
						"In this project, Backbone does most of the heavy lifting. All of the "+
						"answers and questions are listed in a primary collection, and fed to "+
						"the site via Backbone events. The game is a single page application "+
						"and thanks to Backbone, delivers content to the user very quickly."+
					"</p>"+
					"<span>"+
						"You can find the github project here: <a href='https://github.com/ergray/mundanehero'>Github Project</a>"+
					"</span><br><br>"+
					"<span>"+
						"A live version of the project is located here: <a href='http://www.htmlsouls.com/SuperheroCYOA/superhero.html'>Mundane Hero</a>"+
					"</span>"+

				"</div>"+
				"<div id='bottomBar'><div>Back</div></div>"
			)
		} else if (destination === 'curious'){
			$("#mainContainer").append(
				"<div id='descriptionOfProject'>"+
					"<p>"+
						"Curious Cities is a project developed by myself and two classmates "+
						"as a final project for our Javascript class at Portland Code School."+
						"Its purpose is to provide a userbase with a map of their city that "+
						"they can edit with landmarks, indicating locations of scenic, quirky "+
						"interest. Users would be able to take photos of locations, upload them "+
						"via the application, and see the new markers appear on the map."+
					"</p>"+
					"<a href='http://curious-cities.herokuapp.com/'><img class='rightIMG' src='./images/citycapture.PNG'></a>"+
					"<p>"+
						"This project was built in Javascript and relies heavily on the framework "+
						"Backbone. We used the Google Maps API to create the mapping portion, as well "+
						"as Amazon to host our images. My contribution to this project was largely "+
						"organizing and writing the Backbone views and learning how to incorporate them "+
						"into the Google API."+
					"</p>"+
					"<span>"+
						"You can find the github project here: <a href='https://github.com/guerilla-spectacles/test-curious-cities'>Github Project</a>"+
					"</span><br><br>"+
					"<span>"+
						"A live version of the project is located here: <a href='http://curious-cities.herokuapp.com/'>Curious Cities</a>"+
					"</span>"+
				"</div>"+
				"<div id='bottomBar'><div>Back</div></div>"
			)
		} else if (destination === 'employee'){
			$("#mainContainer").append(
				"<div id='descriptionOfProject'>"+
					"<p>"+
						"This simple scheduling application came out of a request from the owner of "+
						"a cafe I frequent. He wanted something very simple where he could create a "+
						"basic profile for an employee which kept track of their name, shift "+
						"worked, and total number of hours worked per week."+
					"</p>"+
					"<a href='http://ergray.github.io/scheduler/fivepoints.html'><img class='rightIMG' src='./images/captureOfSchedule.PNG'></a>"+
					"<p>"+
						"I built this project in Javascript, and am the sole contributor. The framework "+
						"used is Backbone. I wrote server code for this with Node.js and for the final "+
						"project, I hosted data using Orchestrate, and the application itself is hosted "+
						"by Heroku."+
					"</p>"+
					"<span><br>"+
						"You can find the github project here: <a href='https://github.com/ergray/fivepoints'>Github Project</a>"+
					"</span><br><br>"+
					"<span>"+
						"A live version of the project is located here: <a href='http://ergray.github.io/scheduler/fivepoints.html'>Employee Schedule</a>"+
					"</span><br>"+
				"</div>"+
				"<div id='bottomBar'><div>Back</div></div>"
			)
		}
	},

	homewards: function(){
		$("#anchor").children().remove();
		this.undelegateEvents();
		var frontPage = new FrontPage()
	}


})
var FrontPage = Backbone.View.extend({

	el: "#anchor",


	events: {
		"click .frontPContainer": "selectView"
	},

	initialize: function(opts){
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
					"<H2>Mundane Hero</H2>"+
					"<p class='frontContainer'>A Choose Your Own Adventure Game with Character</p>"+
				"</div>"+
				"<div class='frontPContainer' id='curious'>"+
					"<p class='frontContainer'>Curious Cities</p>"+
				"</div>"+
				"<div class='frontPContainer' id='employee'>"+
					"<H2>Employee Scheduler for a Small Business</H2>"+
				"</div>"+
			"</div>"
			)
	},
	
		selectView: function(e){
		this.undelegateEvents();
		if (e.target.id === ""){
			var userFocus = ($(e.target).parent()[0].id)
		} else {
		 var userFocus = e.target.id
		};
		console.log(userFocus);

		Backbone.history.navigate(userFocus, {trigger: true});
	}	
})

var MundaneView = Backbone.View.extend({

	el: '#anchor',

	events: {
		"click #bottomBar" : "homewards"
	},

	initialize: function(opts){
		$("#mainContainer").children().remove();
		this.render()
	},	

	render: function(){
    		$(document).scrollTop(0);
			$("#mainContainer").append(
				"<div id='descriptionOfProject'>"+
					"<p>"+
						"Mundane Hero is an in-browser choose your own adventure game."+
						"It is written in Javascript and utilizes the backbone.js framework "+
						"as well as jQuery. The logic was written by myself and the basic design "+
						"is my own layout. The CSS was was written with assistance of Gregor "+
						"Holzmann."+
					"</p><br>"+
					"<a href='http://www.htmlsouls.com/SuperheroCYOA/superhero.html'><img class='centerIMG' src='./images/CYOACap.png'></a><br>"+
					"<br><p>"+
						"At its heart, Mundane Hero is a simple game. What makes it a bit more "+
						"unique is its character creation at the beginning of play. A user is "+
						"ask to choose a name and answer a series of questions. These answers "+
						"determine a set of hidden statistics not known by the user. Subsequently "+
						"these statistics open up various plot paths, making the game have a certain "+
						"amount of variety from one game to the next."+
					"</p><br>"+
					"<p>"+
						"In this project, Backbone does most of the heavy lifting. All of the "+
						"answers and questions are listed in a primary collection, and fed to "+
						"the application via Backbone events. The game is a single page application "+
						"and thanks to Backbone, delivers content to the user very quickly."+
					"</p><br>"+
					"<p>"+
						"One of the project's crucial foundations is its easy template. Anyone who "+
						"wants to make their own game can take the original code and replace and "+
						"questions, stories, and statistics. Creating your own story is a simple"+
						"task and requires little manipulation of the code's working components."+
					"</p><br>"+	
					"<p>"+
						"Future content will include further reaching story elements, as well as "+
						"hidden links which display information (such as backstory) in the browser's "+
						"console. I love hidden mechanics that aren't required for a game to work but "+
						"still manage increase a game's depth."+
					"</p><br>"+					
					"<span>"+
						"You can find the github project here: <a href='https://github.com/ergray/mundanehero'>Github Project</a>"+
					"</span><br><br>"+
					"<span>"+
						"A live version of the project is located here: <a href='http://www.htmlsouls.com/SuperheroCYOA/superhero.html'>Mundane Hero</a>"+
					"</span><br>"+

				"</div>"+
				"<div id='bottomBar'><div>Back</div></div>"
			)		
	},

	homewards: function(){
		Backbone.history.navigate("");
		this.undelegateEvents();
		$("#anchor").children().remove();
		var frontPage = new FrontPage()
	}

})

var AboutView = Backbone.View.extend({

	el: '#anchor',

	events: {
		"click #bottomBar" : "homewards"
	},

	initialize: function(opts){
		$("#mainContainer").children().remove();
		this.render()
	},	

	render: function(){
    		$(document).scrollTop(0);
			$("#mainContainer").append(
				"<div id='descriptionOfProject'>"+
					"<p>"+
						"I am a front-end web developer based out of Portland, Oregon, "+
						"specializing in Javascript and the Backbone framework. I graduated from "+
						"Portland Code School's front-end web development course in 2015. After "+
						"completing that course I spent a term as a teacher's assistant. The work "+
						"involved tutoring new students as well as grading homework. Since Portland "+
						"Code School's closure, I have been at work on my own small projects. I tend "+
						"to work more towards functionality than form, and love to tinker with new "+
						"ways of approaching problems."+
					"</p><br>"+
						"<ul>My current skills are as follows:"+
						"<br>"+
						"<li>Javascript</li>"+
						"<li>HTML</li>"+
						"<li>CSS</li>"+
						"<li>Backbone</li>"+
						"<li>Node.js</li>"+
						"<li>jQuery</li>"+
						"<li>SQL</li>"+
						"<li>Github</li>"+
						"<li>SCSS</li>"+
						"</ul><br>"+
					"<p>"+
						"I can be reached at <a href='mailto:ericxgray@gmail.com'>ericxgray@gmail.com</a>."+
				"</div>"+
				"<div id='bottomBar'><div>Back</div></div>"
			)	
	},

	homewards: function(){
		Backbone.history.navigate("");
		this.undelegateEvents();
		$("#anchor").children().remove();
		var frontPage = new FrontPage()
	}

})

var CuriousView = Backbone.View.extend({

	el: '#anchor',

	events: {
		"click #bottomBar" : "homewards"
	},

	initialize: function(opts){
		$("#mainContainer").children().remove();
		this.render()
	},	

	render: function(){
    		$(document).scrollTop(0);
			$("#mainContainer").append(
				"<div id='descriptionOfProject'>"+
					"<p>"+
						"Curious Cities is an application developed by myself and two classmates "+
						"as a final project for our Front End Web Development class at Portland "+
						"Code School. Its purpose is to give users a map of their city that highlights "+
						"quirky landmarks. The content of these maps is provided by the google maps "+
						"API and user uploaded locations. Users submit photos and brief descriptions, "+
						"and the application sets a marker on the map."+
					"</p><br>"+
					"<a href='http://curious-cities.herokuapp.com/'><img class='rightIMG' src='./images/citycapture.PNG'></a>"+
					"<p>"+
						"This project was built in Javascript and relies heavily on the framework "+
						"Backbone. We used the Google Maps API to create the mapping portion, as well "+
						"as Amazon S3 to host our images. My contribution to this project was largely "+
						"organizing and writing the Backbone views and learning how to incorporate them "+
						"into the Google API. The application itself is hosted by Heroku, and the database "+
						"for markers is held through Orchestrate."+
					"</p><br>"+
					"<p>"+
						"Curious Cities utilizes location data stored in digital photos to pinpoint the "+
						"location's marker on the application map. When we began development for this "+
						"project we wanted something that a user could snap a photo of in real time and "+
						"immediately update the map with live data. This means that one of the projects "+
						"dependencies is that the user have geo/location data enabled for their photos. "+
						"We all recognized this as something of an obstacle to those who didn't want to "+
						"have that feature turned on necessarily, and had plans in a future update to "+
						"allow a user to manually place a marker."+
					"</p><br>"+
					"<span>"+
						"You can find the github project here: <a href='https://github.com/guerilla-spectacles/test-curious-cities'>Github Project</a>"+
					"</span><br><br>"+
					"<span>"+
						"A live version of the project is located here: <a href='http://curious-cities.herokuapp.com/'>Curious Cities</a>"+
					"</span><br>"+
				"</div>"+
				"<div id='bottomBar'><div>Back</div></div>"
			)	
	},

	homewards: function(){
		Backbone.history.navigate("", {trigger: true});
		this.undelegateEvents();
		$("#anchor").children().remove();
		var frontPage = new FrontPage()
	}

})

var EmployeeView = Backbone.View.extend({

	el: '#anchor',

	events: {
		"click #bottomBar" : "homewards"
	},

	initialize: function(opts){
		$("#mainContainer").children().remove();
		this.render()
	},	

	render: function(){
    		$(document).scrollTop(0);
			$("#mainContainer").append(
				"<div id='descriptionOfProject'>"+
					"<p>"+
						"This application was created at the request of the owner of a small cafe I "+
						"like to go to. He wanted something very simple that would let him keep track "+
						"of individual employees by name as well as a log of their weekly schedule, "+
						"totalling their hours worked (based on day and shift) at the end of their schedule."+
					"</p><br>"+
					"<a href='http://ergray.github.io/scheduler/fivepoints.html'><img class='rightIMG' src='./images/captureOfSchedule.PNG'></a>"+
					"<p>"+
						"I built this project in Javascript. The framework used is Backbone. I wrote the server "+
						"code for this with Node.js. For the final project, I hosted data using Orchestrate, and "+
						"the application itself is hosted by Heroku. For the purpose of a demonstration the current "+
						"viewable version is hosted through GitHub with a JSON file for employee information."+
					"</p><br>"+
					"<p>"+
						"Because of the request for a simple application without many features, I used Backbone "+
						"primarily to quickly deliver data to the screen, as well as the ability to easily "+
						"update employee profiles. The table and template are simply hard written into the "+
						"front page. Future implementations could include more of a calendar for notating days "+
						"off, etc."+
					"</p><br>"+
					"<span><br>"+
						"You can find the github project here: <a href='https://github.com/ergray/fivepoints'>Github Project</a>"+
					"</span><br><br>"+
					"<span>"+
						"A live version of the project is located here: <a href='http://ergray.github.io/scheduler/fivepoints.html'>Employee Schedule</a>"+
					"</span><br>"+
				"</div>"+
				"<div id='bottomBar'><div>Back</div></div>"
			)		
	},

	homewards: function(){
		Backbone.history.navigate("");
		this.undelegateEvents();
		$("#anchor").children().remove();
		var frontPage = new FrontPage()
	}

})
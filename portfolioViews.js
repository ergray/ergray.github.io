var FrontPage = Backbone.View.extend({

	el: "#anchor",


	events: {
		"click .frontPContainer": "selectView",
		"click .projectLinks": "selectView"
	},

	initialize: function(opts){
		this.render()
	},

	render: function(){
		console.log(this.events);
		$("#anchor").append(
			"<div id='intro'>"+
				"<h1>Eric Gray</h1><br>"+
				"<h5><span style='color:green'>Javascript</span> - <span style='color:red'>SQL</span> - <span style='color:orange'>Games</span></h5>"+
			"</div>"+
			"<br>"+
					
			"<div id='mainContainer'>"+
				"<div id='meBlurb'>"+
					"<p>I've worked at famous bookstores and shipped dangerous goods but I don't think "+
					"I've enjoyed any of it as much as I enjoy coding. If you're interested in discussing "+
					"a project, I'd love to talk to you about it!</p><br>"+
				"</div>"+
				"<div id='projects'>"+
					"<a class='projlink' href='#cooking'><div class='projectLinks' id='cooking'>"+
						"<H2>Cooking Collective</H2>"+
						"<div class='frontDesc'><p>A Javascript web application featuring React, Redux, Node and MySQL</p></div>"+
					"</div></a>"+
					"<a class='projlink' href='#burgers'><div class='projectLinks' id='burgers'>"+
						"<H2>BurgerQuest</H2>"+
						"<div class='frontDesc'><p>Written with Javascript, jQuery, Underscore, and HTML Canvas</p></div>"+
					"</div></a>"+
					"<a class='projlink' href='#adventure'><div class='projectLinks' id='adventure'>"+
						"<H2>Mundane Hero</H2>"+
						"<div class='frontDesc'><p>A Choose Your Own Adventure Game written with Backbone</p></div>"+
					"</div></a>"+
					"<a class='projlink' href='#curious'><div class='projectLinks' id='curious'>"+
						"<H2>Curious Cities</H2>"+
						"<div class='frontDesc'><p>Javascript web application written in Backbone</p></div>"+
					"</div></a>"+
					"<a class='projlink' href='#employee'><div class='projectLinks' id='employee'>"+
						"<H2>Simple Scheduling App</H2>"+
						"<div class='frontDesc'><p>Written with the Backbone Javascript framework<p></div>"+
					"</div></a>"+
					"<a class='projlink' href='#contact'><div class='projectLinks' id='contact'>"+
						"<H2>Get In Touch</H2>"+
					"</div></a>"+
				"</div>"+
			"</div>"
			)
	},
	
	// selectView: function(e){
	// 	this.undelegateEvents();
	// 	console.log(e.target.id)
	// 	if (e.target.id === ""){
	// 		var userFocus = ($(e.target).parent()[0].id)
	// 	} else {
	// 	 var userFocus = e.target.id
	// 	};

	// 	if (userFocus === "myImg" || userFocus === "aboutText" || userFocus === "imgContainer"){
	// 		userFocus = "about"
	// 	}
	// 	console.log(userFocus);

	// 	Backbone.history.navigate(userFocus, {trigger: true});
	// }	
})

var CookingView = Backbone.View.extend({
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
					"<br>"+
					"<h1>The Cooking Collective</h1>"+
					"<br>"+
					"<H2>Description:</H2>"+
					"<br>"+
						"Coming Soon!"+
					"<br><p><br>"+
						"Image coming soon"+
						"</p><br>"+
					"<H2>Technologies:</H2>"+
					"<br>"+
					"<span>Coming soon!</span>"+
					"<br>"+
					"<H2>Soure Code:</H2>"+
					"<br>"+
					"<a href='https://github.com/ergray/cooking_collective'>Github Repo</a><br>"+
					"<H2>Live Project:</H2>"+
					"<br>"+
					"<a href='https://cooking-collective.herokuapp.com/'>The Cooking Collective</a>"+
				"</div>"
				)
	},

	homewards: function(){
		Backbone.history.navigate("");
		this.undelegateEvents();
		$("#anchor").children().remove();
		var frontPage = new FrontPage()
	}
})

var ContactView = Backbone.View.extend({
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
					"<br>"+
					"<ul>"+
						"<li><a href='https://github.com/ergray'>GitHub</a></li>"+
						"<li><a href='https://www.linkedin.com/in/ericxgray/'>LinkedIn</a></li>"+
						"<li><a href='mailto:ericxgray@gmail.com'>Email: ericxgray@gmail.com</a></li>"+
						"<li>Based out of Oakland, CA</li>"+
					"</ul>"+
				"</div>"
				)
	},

	homewards: function(){
		Backbone.history.navigate("");
		this.undelegateEvents();
		$("#anchor").children().remove();
		var frontPage = new FrontPage()
	}
})

var BurgerView = Backbone.View.extend({
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
					"<br>"+
					"<p>"+
						"BurgerQuest is an in browser game built with Javascript, html5 canvas, "+
						"jQuery and underscore. I built this because I love games and wanted to "+
						"experiment more with user experience and html canvas. Aesthetic design "+
						"isn't exactly one of my strong points at the moment, and I imagine myself "+
						"in a working role of creating logic for a design team."+
					"<br><p><br>"+
						"<a href='https://github.com/ergray/BurgerQuest'><img class='centerIMG' src='./images/burgerCapture.PNG'></a><br><br>"+
					"</p><br>"+
					"<p>"+
						"This game was a lot of fun to create. I gave myself a minimum viable "+
						"product, which was to create a moveable character that can interact with "+
						"multiple menus, have a sort of 'fight' sequence, and deliver the result "+
						"of this fight to a customer, which then triggers another customer to enter "+
						"the game."+
					"</p><br>"+
					"<p>"+
						"The largest challenge of the game was the movement of the character and "+
						"customer. The methods for these actions took some re-writes, in particular "+
						"for the customer's movement, which is controlled by a pathing method. The "+
						"difficulty was largely in making sure that either figure was not able to "+
						"move through what should be a solid object. I worked around this by making "+
						"an equation for the figure to look ahead of where they were going and if "+
						"it was a valid location to go ahead and make that move, otherwise to stay "+
						"where they were."+
					"</p><br>"+
					"<p>"+
						"Although there are no points exactly, the worker is given money, and there "+
						"are benefits and detriments to how well food is cooked, represented by tips. "+
						"Currently there is no use for this money, however in future iterations my "+
						"intent is to add a mechanism for purchasing cooking tools, as well as stealing "+
						"from the register (which will have its own consequences)."+
					"</p><br>"+	
					"<p>"+
						"You can find a working version of this game here: <a href='http://www.htmlsouls.com/BurgerQuest/game.html'>Burger Quest</a>"+
					"</p><br>"+				
					"<span>"+
						"You can find the github project here: <a href='https://github.com/ergray/BurgerQuest'>Github Project</a>"+
					"</span><br><br>"+
					// "<div id='bottomBar' class='full-width'><div><p>Back</p></div></div>"+
				"</div>"
				)
	},

	homewards: function(){
		Backbone.history.navigate("");
		this.undelegateEvents();
		$("#anchor").children().remove();
		var frontPage = new FrontPage()
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
					"<br>"+
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
					// "<div id='bottomBar' class='full-width'><div><p>Back</p></div></div>"+
				"</div>"
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
					"<br>"+
					"<p>"+
						"I am a full stack javascript developer based out of Oakland, California. "+
						"My programming knowledge comes from a mix of self-learning through personal "+
						"projects, as well as having attended a 15 week javascript code school in "+
						"Portland, Oregon. Most of my projects include backbone for a framework "+
						"(including this portfolio), but I have done projects in Angular as well. "+
						"My next project will include a SQL database and will use React."+
					"</p><br>"+
					"<p>"+
						"Coding is very exciting to me. There's a lot of work to it, and it can "+
						"be very challenging, but I find that this challenge just pushes me to "+
						"work harder and grow more. Although I don't consider myself much of a "+
						"visual designer, I do enjoy making simple layouts that help emphasize "+
						"code. While I could probably use a CMS to make my own site a bit flasher, "+
						"I find that I prefer to build things from the ground up, and thus learn "+
						"more about the foundations of design and programming"+
					"</p><br>"+	
						"<ul>My skills include:"+
						"<br>"+
						"<li>Javascript</li>"+
						"<li>HTML</li>"+
						"<li>CSS</li>"+
						"<li>Backbone</li>"+
						"<li>Node.js</li>"+
						"<li>jQuery</li>"+
						"<li>MySQL</li>"+
						"<li>Github</li>"+
						"<li>SCSS</li>"+
						"</ul><br>"+
					"<span>"+
						"My github profile can be found at: <a href='https://github.com/ergray'>https://github.com/ergray</a> "+
						"and I can be reached at <a href='mailto:ericxgray@gmail.com'>ericxgray@gmail.com</a>."+
					"</span><br>"+	
					// "<div id='bottomBar' class='full-width'><p>Back</p></div>"+
				"</div>"
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
					"<br>"+
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
					// "<div id='bottomBar' class='full-width'><div><p>Back</p></div></div>"+
				"</div>"
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
					"<br>"+
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
					// "<div id='bottomBar' class='full-width'><div><p>Back</p></div></div>"+
				"</div>"
			)		
	},

	homewards: function(){
		Backbone.history.navigate("");
		this.undelegateEvents();
		$("#anchor").children().remove();
		var frontPage = new FrontPage()
	}

})
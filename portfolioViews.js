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
					"<a class='projlink' href='#cooking'><div class='projectLinks odds' id='cooking'>"+
						"<H2>Cooking Collective</H2>"+
						"<div class='frontDesc'><p>A Javascript web application featuring React, Redux, Node and MySQL</p></div>"+
					"</div></a>"+
					"<a class='projlink' href='#burgers'><div class='projectLinks evens' id='burgers'>"+
						"<H2>BurgerQuest</H2>"+
						"<div class='frontDesc'><p>Written with Javascript, jQuery, Underscore, and HTML5 Canvas</p></div>"+
					"</div></a>"+
					"<a class='projlink' href='#adventure'><div class='projectLinks odds' id='adventure'>"+
						"<H2>Mundane Hero</H2>"+
						"<div class='frontDesc'><p>A Choose Your Own Adventure Game written with Backbone</p></div>"+
					"</div></a>"+
					"<a class='projlink' href='#curious'><div class='projectLinks evens' id='curious'>"+
						"<H2>Curious Cities</H2>"+
						"<div class='frontDesc'><p>Javascript web application written in Backbone</p></div>"+
					"</div></a>"+
					"<a class='projlink' href='#employee'><div class='projectLinks odds' id='employee'>"+
						"<H2>Scheduling Application</H2>"+
						"<div class='frontDesc'><p>Written with the Backbone Javascript framework<p></div>"+
					"</div></a>"+
					"<a class='projlink' href='#contact'><div class='projectLinks evens' id='contact'>"+
						"<H2>Get In Touch</H2>"+
					"</div></a>"+
				"</div>"+
			"</div>"
			)
	},
})

var CookingView = Backbone.View.extend({
	el: '#anchor',

	initialize: function(opts){
		$("#mainContainer").children().remove();
		this.render()
	},

	render: function(){
			$(document).scrollTop(0);
			$("#mainContainer").append(
				"<div id='descriptionOfProject'>"+
					"<br>"+
					"<div class='projectName'>"+
						"<h1>The Cooking Collective</h1>"+
					"</div>"+
					"<div class='projSubheader'>"+
						"<H3>Description:</H3>"+
						"<br>"+
						"<p>Cooking Collective is a web application meant to help users determine"+
						"what recipes they can make based on what foodstuffs they have at any given"+
						"moment. Users add inventory from a list of known ingredients and can create"+
						"recipes that are shared with other users."+
						"</p>"+
					"</div>"+
					"<div class='projSubheader'>"+
						"<h3>Technologies:</h3>"+
						"<br><br>"+
						"<ul>"+
							"<li>Javascript</li>"+
							"<li>React</li>"+
							"<li>Redux</li>"+
							"<li>MySQL</li>"+
							"<li>Node.JS</li>"+
							"<li>Webpack</li>"+
							"<li>Babel</li>"+
							"<li>Amazon Web Services</li>"+
							"<li>Heroku</li>"+
						"</ul>"+
					"</div>"+
						"<br>"+
					"<div class='projSubheader'>"+
						"<h3>Soure Code:</h3>"+
						"<a href='https://github.com/ergray/cooking_collective'>Github Repo</a><br>"+
					"</div>"+
					"<br>"+
					"<div class='projSubheader'>"+
						"<h3>Live Project:</h3>"+
						"<a href='https://cooking-collective.herokuapp.com/'>The Cooking Collective</a>"+
					"</div>"+
				"</div>"
				)
	}
})

var ContactView = Backbone.View.extend({
	el: '#anchor',

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
	}
})

var BurgerView = Backbone.View.extend({
	el: '#anchor',

	initialize: function(opts){
		$("#mainContainer").children().remove();
		this.render()
	},

	render: function(){
			$(document).scrollTop(0);
			$("#mainContainer").append(
				"<div id='descriptionOfProject'>"+
					"<br>"+
					"<div class='projectName'>"+
						"<h1>BurgerQuest</h1>"+
					"</div>"+
					"<div class='projSubheader'>"+
						"<H3>Description:</H3>"+
						"<br>"+
						"<p>BurgerQuest is a game inspired by the role playing games I used to"+
						"play as a kid. This is the first visual game with moving parts that I"+
						"have made, and it was a fun process to learn about object collision."+
						"I plan to continue updating this further in between other projects."+
						"</p>"+
					"</div>"+
					"<div class='projSubheader'>"+
						"<h3>Technologies:</h3>"+
						"<br>"+
						"<ul>"+
							"<li>Javascript</li>"+
							"<li>HTML5 Canvas</li>"+
							"<li>jQuery</li>"+
							"<li>Underscore</li>"+
						"</ul>"+
					"</div>"+
						"<br>"+
					"<div class='projSubheader'>"+
						"<h3>Soure Code:</h3>"+
						"<a href='https://github.com/ergray/BurgerQuest'>Github Repo</a><br>"+
					"</div>"+
					"<br>"+
					"<div class='projSubheader'>"+
						"<h3>Live Project:</h3>"+
						"<a href='http://www.htmlsouls.com/BurgerQuest/game.html'>BurgerQuest</a>"+
					"</div>"+
				"</div>"
				)
	}
})

var MundaneView = Backbone.View.extend({

	el: '#anchor',

	initialize: function(opts){
		$("#mainContainer").children().remove();
		this.render()
	},	

	render: function(){
    		$(document).scrollTop(0);
			$("#mainContainer").append(
				"<div id='descriptionOfProject'>"+
					"<br>"+
					"<div class='projectName'>"+
						"<h1>Mundane Hero</h1>"+
					"</div>"+
					"<div class='projSubheader'>"+
						"<H3>Description:</H3>"+
						"<br>"+
						"<p>Mundane Hero is a choose your own adventure game from the"+
						"perspective of a powerless individual in a world full of"+
						"super heroes and villains. Besides being a choose your own"+
						"adventure, it also includes a character creation process. This "+
						"process gives the user some otherwise hidden options based on "+
						"how they answer."+
						"</p>"+
					"</div>"+
					"<div class='projSubheader'>"+
						"<h3>Technologies:</h3>"+
						"<br>"+
						"<ul>"+
							"<li>Javascript</li>"+
							"<li>Backbone</li>"+
							"<li>jQuery</li>"+
							"<li>Underscore</li>"+
							"<li>JSON</li>"+
						"</ul>"+
					"</div>"+
						"<br>"+
					"<div class='projSubheader'>"+
						"<h3>Soure Code:</h3>"+
						"<a href='https://github.com/ergray/mundanehero'>Github Repo</a><br>"+
					"</div>"+
					"<br>"+
					"<div class='projSubheader'>"+
						"<h3>Live Project:</h3>"+
						"<a href='http://www.htmlsouls.com/SuperheroCYOA/superhero.html'>Mundane Hero</a>"+
					"</div>"+
				"</div>"
			)		
	}

})

var CuriousView = Backbone.View.extend({

	el: '#anchor',

	initialize: function(opts){
		$("#mainContainer").children().remove();
		this.render()
	},	

	render: function(){
    		$(document).scrollTop(0);
			$("#mainContainer").append(
				"<div id='descriptionOfProject'>"+
					"<br>"+
					"<div class='projectName'>"+
						"<h1>Curious Cities</h1>"+
					"</div>"+
					"<div class='projSubheader'>"+
						"<H3>Description:</H3>"+
						"<br>"+
						"<p>Curious Cities was a final project for Portland Code School. This "+
						"was a group project done with two others. The purpose of the application "+
						"was to provide users with a map of their local city (in this early iteration "+
						"Portland, OR specifically, and give them the ability to drop permanent markers "+
						"on the map highlighting interesting locations to visit. The idea was to "+
						"highlight artistic, free locations in particular. My role in this application "+
						"was primarily working on models and views in Backbone.</p>"+
					"</div>"+
					"<div class='projSubheader'>"+
						"<h3>Technologies:</h3>"+
						"<br>"+
						"<ul>"+
							"<li>Javascript</li>"+
							"<li>Backbone</li>"+
							"<li>jQuery</li>"+
							"<li>JSON</li>"+
							"<li>Node.JS</li>"+
							"<li>Express</li>"+
							"<li>Heroku</li>"+
						"</ul>"+
					"</div>"+
						"<br>"+
					"<div class='projSubheader'>"+
						"<h3>Soure Code:</h3>"+
						"<a href='https://github.com/guerilla-spectacles/test-curious-cities'>Github Repo</a><br>"+
					"</div>"+
				"</div>"
			)	
	}
})

var EmployeeView = Backbone.View.extend({

	el: '#anchor',

	initialize: function(opts){
		$("#mainContainer").children().remove();
		this.render()
	},	

	render: function(){
    		$(document).scrollTop(0);
			$("#mainContainer").append(
				"<div id='descriptionOfProject'>"+
					"<br>"+
					"<div class='projectName'>"+
						"<h1>Scheduling Application</h1>"+
					"</div>"+
					"<div class='projSubheader'>"+
						"<H3>Description:</H3>"+
						"<br>"+
						"<p>This was one of the first applications I built from scratch. An owner of "+
						"a cafe nearby wanted something to keep basic track of which days and shifts "+
						"his employees were working. I came up with a simple NoSQL solution that allowed "+
						"him to add and delete employees, and adjust their workings days and hours."+
						"</p>"+
					"</div>"+
					"<div class='projSubheader'>"+
						"<h3>Technologies:</h3>"+
						"<br>"+
						"<ul>"+
							"<li>Javascript</li>"+
							"<li>Backbone</li>"+
							"<li>jQuery</li>"+
							"<li>Node.js</li>"+
							"<li>JSON</li>"+
						"</ul>"+
					"</div>"+
						"<br>"+
					"<div class='projSubheader'>"+
						"<h3>Soure Code:</h3>"+
						"<a href='https://github.com/ergray/fivepoints'>Github Repo</a><br>"+
					"</div>"+
				"</div>"
			)		
	}
})
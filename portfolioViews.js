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
					"<p class='frontContainer'>Employee Scheduler</p>"+
				"</div>"+
			"</div>"
			)
	},

	selectView: function(e){
		console.log(e.target.id);
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
				"<div>hi im eric</div>"+
				"<div id='bottomBar'>Back</div>"
			)
			return
		} else if (destination === 'adventure'){
			$("#mainContainer").append(
				"<div>adventure</div>"+
				"<div id='bottomBar'>Back</div>"
			)
		} else if (destination === 'curious'){
			$("#mainContainer").append(
				"<div>curious</div>"+
				"<div id='bottomBar'>Back</div>"
			)
		} else if (destination === 'employee'){
			$("#mainContainer").append(
				"<div>employee</div>"+
				"<div id='bottomBar'>Back</div>"
			)
		}
	},

	homewards: function(){
		$("#anchor").children().remove();
		this.undelegateEvents();
		var frontPage = new FrontPage()
	}


})
var Router = Backbone.Router.extend ({

	index: null,
	mundane: null,

	routes: {
		"" : "tester",
		"adventure": "mundaneBuild",
		"about": "aboutBuild",
		"employee": "schedulerBuild",
		"curious": "citiesBuild"
	},

	initialize: function(){
		this.index = new FrontPage({router: this});
	},

	mundaneBuild: function(){
		var mundane = new MundaneView()
	},

	aboutBuild: function(){
		var about = new AboutView()
	},

	schedulerBuild: function(){
		var schedule = new EmployeeView();
	},

	citiesBuild: function(){
		var cities = new CuriousView();
	}
})
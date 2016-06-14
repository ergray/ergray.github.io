var Router = Backbone.Router.extend ({

	index: null,
	mundane: null,

	routes: {
		"" : "render",
		"adventure": "mundaneBuild",
		"about": "aboutBuild",
		"employee": "schedulerBuild",
		"curious": "citiesBuild"
	},

	render: function(){
		if (this.index != null){
		this.index.undelegateEvents();
	};
		$("#anchor").children().remove();
		this.index = new FrontPage({router: this});	
	},

	mundaneBuild: function(){
		this.addMainContainer();
		var mundane = new MundaneView()
	},

	aboutBuild: function(){
		this.addMainContainer();
		var about = new AboutView()
	},

	schedulerBuild: function(){
		this.addMainContainer();
		var schedule = new EmployeeView();
	},

	citiesBuild: function(){
		this.addMainContainer();
		var cities = new CuriousView();
	},

	addMainContainer: function(){
		if($('#anchor').children().length === 0){
			return (
				$("#anchor").append(
					"<div id='topBar'>"+
						"<h1>Eric Gray - Developer</h1>"+
					"</div>"+
					"<div id='mainContainer'>"+
					"</div>"
				)
			)
		}
	}
})
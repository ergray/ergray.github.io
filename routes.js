var Router = Backbone.Router.extend ({

	index: null,
	mundane: null,

	routes: {
		"" : "render",
		"burgers": "burgerBuild",
		"adventure": "mundaneBuild",
		"about": "aboutBuild",
		"employee": "schedulerBuild",
		"curious": "citiesBuild",
		"cooking": "cookingBuild",
		"contact": "contactBuild"
	},

	render: function(){
		if (this.index != null){
		this.index.undelegateEvents();
	};
		$("#anchor").children().remove();
		this.index = new FrontPage({router: this});	
	},

	contactBuild: function(){
		this.addMainContainer();
		var cooking = new ContactView()
	},

	cookingBuild: function(){
		this.addMainContainer();
		var cooking = new CookingView()
	},

	burgerBuild: function(){
		this.addMainContainer();
		var burger = new BurgerView()
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
					"<div id='intro'>"+
						"<h1>Eric Gray</h1>"+
						"<h5><span style='color:green'>Javascript</span> - <span style='color:red'>SQL</span> - <span style='color:orange'>Games</span></h5>"+
					"</div>"+
					"<br>"+
					"<div id='mainContainer'>"+
					"</div>"
				)
			)
		}
	}
})
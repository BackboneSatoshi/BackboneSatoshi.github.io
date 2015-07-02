SPA.Views.ControllerLayoutView = Marionette.LayoutView.extend({
	template: "#tpl-controller-layout",
	className: "row",
	regions: {
		search: "#controller-search",
		perpage: "#controller-perpage"
	},
	onDestroy: function() {
		console.log("controllerLayoutViewを破棄");
	}
});
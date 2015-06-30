SPA.Views.HeaderView = Marionette.ItemView.extend({
	template:"#tpl-header",
	onDestroy: function() {
		console.log("HeaderViewを破棄");
	}
})
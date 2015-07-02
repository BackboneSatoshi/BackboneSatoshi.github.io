SPA.Views.SearchView = Marionette.ItemView.extend({
	template: "#tpl-search",
	className: "row",
	events: {
		'keydown .form-search .search-input': 'filtering'
	},
	filtering: _.debounce(function(ev) {
		var regex = new RegExp(this.$(".search-input").val(), 'i');

		this.collection.filterBy('filter-on-type', function(model) {
			return regex.test(model.get('name'));
		});
	}, 100),
});
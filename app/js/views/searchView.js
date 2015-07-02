SPA.Views.SearchView = Marionette.ItemView.extend({
	template: "#search",
	className: "row",
	events: {
		'click .form-search>button': 'filtering'
	},

	filtering: _.debounce(function(ev) {
		console.log(this.$(".search-input").val());
		var regex = new RegExp(this.$(".search-input").val(), 'i');

		this.collection.filterBy('filter-on-type', function(model) {
			return regex.test(model.get('name'));
		});
	}, 300),
});
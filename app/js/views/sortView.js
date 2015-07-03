SPA.Views.SortView = Marionette.ItemView.extend({
	template: "#tpl-sort",

	events: {
		"change .sort-by input[type=radio]": "changeSort"
	},

	changeSort: function(ev) {
		var $checked = this.$('.sort-by input:checked');
		console.log($checked.data('dir')　+ "　でソート");
		if($checked.data('key') === 'null') {
			this.collection.removeSort();
		} else {
			this.collection.setSort($checked.data('key'), $checked.data('dir'));
		}
	}
});
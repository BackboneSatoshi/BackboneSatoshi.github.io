SPA.Views.PerpageView = Marionette.ItemView.extend({
	template:"#tpl-perpage",
	events: {
		'change .perpage input[type=radio]': 'changePagination',
	},

	changePagination: function(ev) {
		console.log(this.$('.perpage input:checked').data('per-page'));

		this.collection.setPerPage(this.$('.perpage input:checked').data('per-page'));
	},

	onDestroy: function() {
		console.log("PerpageViewを破棄");
	}
})
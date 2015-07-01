SPA.Views.paginationView = Marionette.ItemView.extend({
	template: "#tpl-pagination",
	className: "pagination",
	events: {
		"click .prev": "onPrev",
		"click .next": "onNext"
	},

	collectionEvents: {
		"paginated:change:page": "onRender",
		"paginated:change:numPages":"onRender"
	},

	onRender: function() {
		this.$(".current").text(this.collection.getPage() + 1);
		this.$(".total").text(this.collection.getNumPages());
		this.$(".prev").prop("disabled", !this.collection.hasPrevPage());
		this.$("next").prop("disabled", !this.collection.hasNextPage());
	},

	onPrev: function() {
		if(this.collection.hasPrevPage()) {
			this.collection.prevPage();
		}
	},
	onNext: function() {
		if(this.collection.hasNextPage()) {
			this.collection.nextPage();
		}
	}
});
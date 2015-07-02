SPA.Views.LayoutView = Marionette.LayoutView.extend({
	template: "#tpl-layout",
    regions: {
      header: "#main-header",
      controller: "#main-controller",
      content: "#main-content",
      pagination: "#main-pagination"
    },
    onDestroy: function() {
		console.log("LayoutViewを破棄");
	}
});

SPA.Views.LayoutView = Marionette.LayoutView.extend({
	template: "#tpl-layout",
    regions: {
      header: "#main-header",
      content: "#main-content",
      pagination: "#main-pagination",
      controller: "#main-controller"
    },
    onDestroy: function() {
		console.log("LayoutViewを破棄");
	}
});

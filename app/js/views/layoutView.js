SPA.Views.LayoutView = Marionette.LayoutView.extend({
	template: "#tpl-layout",
    regions: {
      header: "#main-header",
      content: "#main-content"
    }
});

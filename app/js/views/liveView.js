SPA.Views.LiveView = Marionette.ItemView.extend({
	template: "#tpl-live",
	_modelBinder: undefined,
	initialize: function() {
		this._modelBinder = new Backbone.ModelBinder();
		this._bindingOptions = {
			"name": '[name = "fullname"]',
			"tel": '[name = "phonenumber"]',
			"age": '[name = "age"]',
			"email": '[name = "email"]',
		};
	},
	onClose: function() {
		// viewが破棄される時にはモデルバインティングもアンバインドさせる
		this._modelBinder.unbind();
	},
	onRender: function() {
		var bindings = this._bindingOptions;

		this._modelBinder.bind(this.model,this.el,bindings);
	}
});
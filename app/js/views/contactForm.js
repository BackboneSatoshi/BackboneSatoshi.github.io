SPA.Views.ContactForm = Marionette.ItemView.extend({
  template: '#tpl-new-contact',
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
    this._modelBinder.unbind();
  },

  onRender: function() {
    var bindings = this._bindingOptions;

    this._modelBinder.bind(this.model,this.el,bindings);
  },

  ui: {
    nameInput: '.contact-name-input',
    telInput: '.contact-tel-input',
    emailInput: '.contact-email-input',
    ageInput: '.contact-age-input'
  },

  events: {
    'submit .contract-form': 'onFormSubmit'
  },

  triggers: {
    'click .form-cancel-btn': 'form:canceled'
  },

  serializeData: function() {
    return _.extend(this.model.toJSON(), {
      isNew: this.model.isNew()
    });
  },

  onFormSubmit: function(e) {
    e.preventDefault();

    this.trigger('form:submitted', {
      age: this.ui.ageInput.val(),
      name: this.ui.nameInput.val(),
      tel: this.ui.telInput.val(),
      email: this.ui.emailInput.val()
    });
  }
});

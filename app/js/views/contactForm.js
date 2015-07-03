SPA.Views.ContactForm = Marionette.ItemView.extend({
  template: '#tpl-new-contact',

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
  },
  onDestroy: function() {
    console.log("ContactFormビューを破棄");
  }
});

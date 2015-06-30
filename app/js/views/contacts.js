
SPA.Views.Contacts = Marionette.CompositeView.extend({
  template: '#tpl-contacts',
  childView: SPA.Views.Contact,
  childViewContainer: '.contacts-container',
  triggers: {
    'click .add-contact-btn': 'addContact:clicked'
  }
});

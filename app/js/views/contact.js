SPA.Views.Contact = Marionette.ItemView.extend({
  tagName: 'li',
  className: 'media col-sm-6 col-md-6 col-lg-4',
  template: '#tpl-contact',
  triggers: {
    'click .delete-contract': 'delete:clicked',
    'click .edit-contract': 'edit:clicked'
  }
});

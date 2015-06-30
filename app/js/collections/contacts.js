SPA.Collections.Contacts = Backbone.Collection.extend({
  model: SPA.Models.Contact,
  localStorage: new Backbone.LocalStorage('contacts')
});

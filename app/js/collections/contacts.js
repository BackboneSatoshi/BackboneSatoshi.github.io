SPA.Collections.Contacts = Backbone.Collection.extend({
  model: SPA.Models.Contact,
  initialize: function() {
  	this._createSampleData();
  },
  localStorage: new Backbone.LocalStorage('contacts'),
  _createSampleData: function() {
    _.each([
      {
        id: 1,
        name : 'Taketani Saki',
        tel: '111-2222-3333',
        email: 'Taketanisaki@backbone.com',
        avatar: 'http://robohash.org/1?size=128x128'
      },
      {
        id: 2,
        name : 'Kimura Miki',
        tel: '111-2234-3333',
        email: 'kimuramiki@backbone.com',
        avatar: 'http://robohash.org/2?size=128x128'
      },
      {
        id: 3,
        name : 'Gouda Takeshi',
        tel: '918-1774-0199',
        email: 'Goudatakeshi@backbone.com',
        avatar: 'http://robohash.org/3?size=128x128'
      },
      {
        id: 4,
        name : 'Mikasa Kotone',
        tel: '702-9289-5145',
        email: 'mikasakotone@backbone.com',
        avatar: 'http://robohash.org/4?size=128x128'
      },
      {
        id: 5,
        name : 'Fujimoto Satoshi',
        tel: '318-2292-6700',
        email: 'fujimotosatoshi@backbone.com',
        avatar: 'http://robohash.org/5?size=128x128'
      },
      {
        id: 6,
        name : 'Robot Automation',
        tel: '803-2557-9815',
        email: 'robotautomation@jourrapide.com',
        avatar: 'http://robohash.org/6?size=128x128'
      }], function(contact) {
        this.create(contact);
      }, this);
  }
});

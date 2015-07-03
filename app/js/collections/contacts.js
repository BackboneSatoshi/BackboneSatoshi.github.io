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
        email: 'robotautomation@backbone.com',
        avatar: 'http://robohash.org/6?size=128x128'
      },{
        id: 7,
        name: '狡噛慎也（こうがみ しんや)',
        tel: '085-2342-2342',
        email: 'kougami@backbone.com',
        avatar: 'http://robohash.org/7?size=128x128'
      },
      {
        id: 8,
        name: '常守朱（つねもり あかね)',
        tel: '085-2342-2342',
        email: 'tunemori@backbone.com',
        avatar: 'http://robohash.org/8?size=128x128'
      },
      {
        id: 9,
        name: '宜野座伸(ぎのざ のぶちか)',
        tel: '085-2342-2342',
        email: 'ginoza@backbone.com',
        avatar: 'http://robohash.org/9?size=128x128'
      },
      {
        id: 10,
        name: '征陸智己 (まさおか ともみ)',
        tel: '085-2342-2342',
        email: 'masaoka@backbone.com',
        avatar: 'http://robohash.org/10?size=128x128'
      },
      {
        id: 11,
        name: '縢秀星 (かがり しゅうせい)',
        tel: '085-2342-2342',
        email: 'kagari@backbone.com',
        avatar: 'http://robohash.org/11?size=128x128'
      },
      {
        id: 12,
        name: 'Douglas Crockford',
        tel: '015-2342-2342',
        email: 'douglascrockford@backbone.com',
        avatar: 'http://robohash.org/12?size=128x128'
      },
      {
        id: 13,
        name : 'John Resig',
        tel: '141-2322-3433',
        email: 'John Resig@backbone.com',
        avatar: 'http://robohash.org/13?size=128x128'
      },
      {
        id: 14,
        name : 'Jake Archibald',
        tel: '141-2522-3411',
        email: 'Jake Archibald@backbone.com',
        avatar: 'http://robohash.org/14?size=128x128'
      },
      {
        id: 15,
        name : 'Nicholas C.Zakas',
        tel: '151-2983-3411',
        email: 'NicholasC.Zakas@backbone.com',
        avatar: 'http://robohash.org/15?size=128x128'
      },
      {
        id: 16,
        name : 'Paul Irish',
        tel: '161-2983-3411',
        email: 'Paul Irish@backbone.com',
        avatar: 'http://robohash.org/16?size=128x128'
      },
      {
        id: 17,
        name : 'Sindre Sorhus',
        tel: '171-2983-3411',
        email: 'Sindre Sorhus@backbone.com',
        avatar: 'http://robohash.org/17?size=128x128'
      },
      {
        id: 18,
        name : 'Addy Osmani',
        tel: '181-2983-3411',
        email: 'Addy Osmani@backbone.com',
        avatar: 'http://robohash.org/18?size=128x128'
      }], function(contact) {
        this.create(contact);
      }, this);
  }
});
